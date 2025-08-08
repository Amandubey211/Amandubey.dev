// app/lib/rate-limit.ts

import { LRUCache } from "lru-cache";
import { NextResponse } from "next/server";

// --- Type Definitions for Clarity ---
type RateLimitOptions = {
  uniqueTokenPerInterval?: number;
  interval?: number; // The interval in milliseconds
};

type RateLimitResult = {
  isRateLimited: boolean;
  limit: number;
  remaining: number;
  reset: number; // The timestamp when the rate limit will be reset
};

/**
 * Creates a rate limiter instance using an in-memory LRU cache.
 * @param options - Configuration for the rate limiter.
 * @returns An object with a `check` method.
 */
const rateLimit = (options?: RateLimitOptions) => {
  const tokenCache = new LRUCache<string, number>({
    max: options?.uniqueTokenPerInterval || 500, // Max 500 unique IP addresses per interval
    ttl: options?.interval || 60000, // Default interval is 1 minute (60,000 ms)
  });

  return {
    /**
     * Checks if a token (e.g., an IP address) has exceeded the request limit.
     * @param limit - The maximum number of allowed requests per interval.
     * @param token - A unique identifier for the user (typically the IP address).
     * @returns A promise that resolves with the rate limit status.
     */
    check: async (limit: number, token: string): Promise<RateLimitResult> => {
      const tokenCount = tokenCache.get(token) || 0;
      const currentUsage = tokenCount + 1;
      tokenCache.set(token, currentUsage);

      const isRateLimited = currentUsage > limit;
      const remaining = isRateLimited ? 0 : limit - currentUsage;

      // Get the expiration time for the token from the cache
      const reset =
        (tokenCache.getRemainingTTL(token) || options?.interval || 60000) +
        Date.now();

      return {
        isRateLimited,
        limit,
        remaining,
        reset,
      };
    },
  };
};

// Create a singleton instance of the rate limiter.
// This instance will be shared across all API requests.
// It allows 5 requests per IP address every 1 minute.
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 unique IPs
});

/**
 * A utility function to be used in your Next.js API routes.
 * It checks the rate limit for an incoming request and returns a NextResponse if the limit is exceeded.
 * @param request - The incoming Next.js API request.
 * @returns A NextResponse if rate-limited, otherwise an object with success and headers.
 */
export async function checkRateLimit(request: Request) {
  // Identify the user. Use the IP address, or fall back to a generic token for safety.
  // Note: 'x-forwarded-for' is the standard header for identifying the client's IP.
  const token = request.headers.get("x-forwarded-for") ?? "127.0.0.1";

  // Set the request limit for this specific route.
  const limit = 5;
  const { isRateLimited, remaining, reset } = await limiter.check(limit, token);

  // Prepare the rate limit headers. These are best practice to inform the client.
  const headers = new Headers();
  headers.set("X-RateLimit-Limit", String(limit));
  headers.set("X-RateLimit-Remaining", String(remaining));
  headers.set("X-RateLimit-Reset", String(Math.ceil(reset / 1000))); // Reset time in Unix seconds

  if (isRateLimited) {
    // If the user is rate-limited, return a 429 Too Many Requests response.
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      {
        status: 429,
        headers: headers, // Send headers even on failed requests
      }
    );
  }

  // If the user is not rate-limited, return a success object with the headers.
  return { success: true, headers };
}
