// export default {
//   darkMode: "class",
//   content: ["./src/**/*.{ts,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           "0%": { backgroundPosition: "0% 50%" },
//           "50%": { backgroundPosition: "100% 50%" },
//           "100%": { backgroundPosition: "0% 50%" },
//         },
//         shine: {
//           "0%": { "background-position": "100%" },
//           "100%": { "background-position": "-100%" },
//         },
//       },
//       animation: {
//         shine: "shine 5s linear infinite",
//         gradient: "gradient 8s linear infinite",
//       },
//     },
//   },
//   plugins: [],
// };

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // This is correct, do not change it.
  // darkMode: "class",

  // This is the part to update. It includes all the folders Next.js uses.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Your custom theme and animations are perfect. Do not change them.
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        gradient: "gradient 8s linear infinite",
      },
    },
  },

  plugins: [],
};
