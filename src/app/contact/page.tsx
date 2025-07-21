import Image from "next/image";
import {
  Sparkles,
  CircleDot,
  Linkedin,
  Github,
  Mail,
  Twitter,
  Instagram,
} from "lucide-react";

export const metadata = {
  title: "Contact | Aman Dubey",
};

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-white">
      {/* badge */}
      <h2 className="flex items-center gap-2 text-lime-400 tracking-widest text-sm mb-6">
        <Sparkles size={18} /> CONNECT WITH ME
      </h2>

      {/* heading */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.9] mb-14">
        Let&apos;s start a project
        <br />
        together
      </h1>

      {/* form + card */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* ───────────── form ───────────── */}
        <form
          action="https://formspree.io/f/xdkdabwk" /* Make sure to replace this with your Formspree ID */
          method="POST"
          className="space-y-4"
        >
          {/* name */}
          <FormField
            id="name"
            label="Full Name"
            type="text"
            placeholder="Jane Doe"
          />

          {/* email */}
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="jane@example.com"
          />

          {/* message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell me a bit about your project…"
              className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-4 placeholder:text-gray-500 outline-none focus:border-white transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white text-white text-lg font-medium hover:bg-white/10 transition"
          >
            Submit
          </button>
        </form>

        {/* ───────────── profile card ───────────── */}
        <aside className="bg-[#111116] border border-white/10 rounded-3xl p-10 flex flex-col gap-8 text-left backdrop-blur-lg md:mt-4">
          {/* availability pill */}
          <span className="inline-flex items-center gap-2 bg-[#1f271f] border border-white/10 rounded-full px-4 py-1.5 text-sm w-max">
            <CircleDot className="w-3 h-3 text-lime-400 fill-lime-400" />
            Available for work
          </span>

          {/* avatar */}
          {/* avatar with visible ring */}
          <div className="relative w-28 h-28 rounded-full ring-2 ring-white/20 p-3">
            {/* image is now inside its own clipped wrapper */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="https://amandubey.onrender.com/static/media/Aman%20Dubey.25d27bf821a77c9ede54.png"
                alt="Aman Dubey"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
          </div>

          {/* blurb */}
          <p className="text-gray-300 leading-relaxed">
            My inbox is always open. Whether you have a project or just want to
            say hi, I would love to hear from you. Feel free to contact me and
            I&apos;ll get back to you.
          </p>

          {/* socials */}
          <div className="flex gap-7 pt-2">
            <ContactIcon
              href="https://www.linkedin.com/in/profile-amandubey/"
              label="LinkedIn"
              icon={<Linkedin size={22} />}
            />
            <ContactIcon
              href="https://github.com/Amanstudentdiwan"
              label="GitHub"
              icon={<Github size={22} />}
            />
            <ContactIcon
              href="https://instagram.com/your-handle"
              label="Instagram"
              icon={<Instagram size={22} />}
            />
            <ContactIcon
              href="mailto:amandubey8833@gmail.com"
              label="Email"
              icon={<Mail size={22} />}
            />
            <ContactIcon
              href="https://twitter.com/your-handle"
              label="Twitter"
              icon={<Twitter size={22} />}
            />
          </div>
        </aside>
      </div>
    </main>
  );
}

/* ---------------- reusable bits ---------------- */
function FormField({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-4">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-4 placeholder:text-gray-500 outline-none focus:border-white transition"
      />
    </div>
  );
}

function ContactIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-white/70 hover:text-lime-400 transition"
    >
      {icon}
    </a>
  );
}
