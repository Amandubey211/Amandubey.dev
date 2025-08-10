import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact | Aman Dubey – Let’s Start Your Project",
  description:
    "Get in touch with Aman Dubey to discuss your project ideas, collaborations, or opportunities. Expert in React.js, Next.js, MERN stack, and building scalable, high-performance applications.",
  keywords: [
    "Contact Aman Dubey",
    "Hire Web Developer",
    "React Developer",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Freelance Developer",
  ],
  openGraph: {
    title: "Contact | Aman Dubey – Let’s Start Your Project",
    description:
      "Reach out and let's create something amazing together! Specializing in React.js, MERN stack, and scalable web apps.",
    url: "https://amandubey.vercel.app/contact",
    siteName: "Aman Dubey's Portfolio",
    images: [
      {
        url: "https://amandubey.vercel.app/og/contact-aman.png",
        width: 1200,
        height: 630,
        alt: "Contact Aman Dubey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Aman Dubey – Let’s Start Your Project",
    description:
      "Reach out and let's create something amazing together! Specializing in React.js, MERN stack, and scalable web apps.",
    creator: "@AmanDub97115331",
    images: ["https://amandubey.vercel.app/og/contact-aman.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
