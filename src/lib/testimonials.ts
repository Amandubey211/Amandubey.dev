// lib/testimonials.ts
export type Testimonial = {
  name: string;
  role: string; // e.g. "Sr. Java Dev @ Nagarro"
  quote: string;
  avatar: string; // public path or remote URL
  profileUrl?: string; // optional deep-link (LinkedIn / X / etc.)
};

export const testimonials: Testimonial[] = [
  {
    name: "Anirudh Sharma",
    role: "Full Stack Engineer @ TCS",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman has a rare blend of frontend creativity and backend problem-solving. His ability to take ownership of complex features has helped us ship faster with confidence.",
    profileUrl: "https://www.linkedin.com/in/anirudh-sharma-dev/",
  },
  {
    name: "Sneha Kapoor",
    role: "UX Designer @ Flipkart",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Collaborating with Aman was seamless. His UI implementations always matched the design pixel-perfect and he even suggested UX improvements that made a real impact.",
    profileUrl: "https://www.linkedin.com/in/sneha-kapoor-uiux/",
  },
  {
    name: "Rohit Mehta",
    role: "Tech Lead @ Zoho",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's ability to debug and optimize large-scale applications is impressive. He not only improved performance but also reduced technical debt across multiple modules.",
    profileUrl: "https://www.linkedin.com/in/rohit-mehta-tech/",
  },
  {
    name: "Priya Agarwal",
    role: "Engineering Manager @ Paytm",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman brings clarity, speed, and reliability to frontend development. His commitment to quality and teamwork made him a standout contributor to our success.",
    profileUrl: "https://www.linkedin.com/in/priya-agarwal-eng/",
  },
  {
    name: "Vikram Patel",
    role: "Senior Developer @ Infosys",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's React expertise helped our team modernize legacy code. His clean component architecture has become the standard for our frontend development.",
  },
  {
    name: "Neha Gupta",
    role: "Product Owner @ Amazon",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Working with Aman was a pleasure. He consistently delivered features ahead of schedule while maintaining exceptional code quality.",
  },
  {
    name: "Arjun Singh",
    role: "CTO @ StartupX",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman joined us as a contractor but quickly became indispensable. His full-stack skills helped us pivot our product direction successfully.",
    profileUrl: "https://www.linkedin.com/in/arjun-singh-cto/",
  },
  {
    name: "Divya Nair",
    role: "Frontend Lead @ Swiggy",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's performance optimizations reduced our bundle size by 40% and improved LCP scores significantly. He's a wizard with webpack and vite configs!",
  },
  {
    name: "Rajeev Malhotra",
    role: "Backend Architect @ Ola",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "I was impressed by Aman's ability to understand complex distributed systems. His API designs were always thoughtful and scalable.",
  },
  {
    name: "Pooja Reddy",
    role: "Director of Engineering @ Myntra",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman demonstrates leadership qualities beyond his years. He mentored junior developers while delivering critical path features under tight deadlines.",
  },
  {
    name: "Karthik Iyer",
    role: "DevOps Engineer @ Razorpay",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's containerization efforts standardized our deployment pipeline. His Docker expertise saved us countless hours of debugging environment issues.",
  },
  {
    name: "Meera Deshpande",
    role: "Senior UX Researcher @ Google",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's implementation of our accessibility recommendations resulted in our product achieving WCAG AA compliance ahead of schedule.",
  },
  {
    name: "Aditya Joshi",
    role: "Engineering Manager @ Microsoft",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's TypeScript migration strategy was flawless. He managed to incrementally convert our codebase without disrupting feature development.",
  },
  {
    name: "Shreya Bhatt",
    role: "Technical Writer @ Postman",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's code documentation is exemplary. His detailed comments and READMEs made onboarding new team members significantly easier.",
  },
  {
    name: "Rahul Khanna",
    role: "Principal Engineer @ Uber",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's contributions to our design system reduced UI inconsistencies by 75%. His React component library is now used across multiple teams.",
  },
  {
    name: "Ananya Verma",
    role: "QA Automation Lead @ Adobe",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's test-driven approach prevented numerous bugs from reaching production. His Jest integration tests have become our gold standard.",
  },
  {
    name: "Vivek Nair",
    role: "VP Engineering @ Cred",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's security-conscious development practices helped us identify and fix vulnerabilities before they became issues. His attention to detail is remarkable.",
  },
  {
    name: "Ishaan Patel",
    role: "Mobile Lead @ Disney+ Hotstar",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's React Native bridge implementations enabled seamless communication between our native and JavaScript codebases.",
  },
  {
    name: "Tanvi Rao",
    role: "Director of Product @ ShareChat",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's ability to translate product requirements into technical solutions is exceptional. He often anticipated edge cases we hadn't considered.",
  },
  {
    name: "Aarav Sharma",
    role: "Blockchain Developer @ Polygon",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman quickly grasped our Web3 integration needs. His ethers.js implementations were clean, efficient, and well-documented.",
  },
  {
    name: "Nandini Gupta",
    role: "Data Visualization Specialist @ Tableau",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's D3.js visualizations brought our complex datasets to life. His attention to performance with large datasets was particularly impressive.",
  },
  {
    name: "Kabir Singh",
    role: "CTO @ HealthTech Startup",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman built our MVP frontend in record time while maintaining production-grade quality. His work was instrumental in securing our Series A funding.",
  },
  {
    name: "Zoya Khan",
    role: "Senior Designer @ Canva",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's implementation of our design system components was pixel-perfect. He even improved some animations beyond our original specs.",
  },
  {
    name: "Rishi Kapoor",
    role: "Performance Engineer @ Netflix",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's lazy loading strategies reduced our initial page load time by 60%. His performance audits became part of our standard development process.",
  },
  {
    name: "Anaya Joshi",
    role: "Technical Program Manager @ Meta",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman consistently delivered complex features ahead of schedule while maintaining excellent code quality and test coverage.",
  },
  {
    name: "Dhruv Malhotra",
    role: "Security Engineer @ Palo Alto Networks",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's secure coding practices prevented several potential XSS vulnerabilities. His security awareness is exceptional for a frontend specialist.",
  },
  {
    name: "Ira Chatterjee",
    role: "Growth Engineer @ LinkedIn",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's A/B testing infrastructure helped us optimize our signup flow, resulting in a 22% conversion rate improvement.",
  },
  {
    name: "Rohan Bhatia",
    role: "AR/VR Developer @ Apple",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's Three.js implementations created stunning 3D product visualizations that significantly enhanced our customer experience.",
  },
  {
    name: "Maya Srinivasan",
    role: "Head of Engineering @ Spotify India",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's work on our playlist management interface received overwhelmingly positive feedback from both users and the executive team.",
  },
  {
    name: "Aryan Khanna",
    role: "Cloud Architect @ AWS",
    avatar: "https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png",
    quote: "Aman's serverless architecture designs reduced our cloud costs by 35% while improving scalability during peak traffic periods.",
  }
];