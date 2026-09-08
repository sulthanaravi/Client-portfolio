import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageCircle, Copy, Check } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "sharukmohamed8@gmail.com";
  const whatsapp = "917806865023";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f5f5f5] px-6 py-20 text-black dark:bg-[#111111] dark:text-white sm:px-10 lg:px-14 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-black/10 dark:border-white/10 sm:h-[450px] sm:w-[450px]"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-[8%] h-2 w-2 rounded-full bg-black dark:bg-white"
        />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[20%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-black dark:bg-white"
        />

        <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 bg-black/5 dark:bg-white/5" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= TOP LABEL ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-black dark:bg-white" />

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/50 dark:text-white/40">
            Get In Touch
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          {/* ================= LEFT SIDE ================= */}

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="text-[14vw] font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-7xl lg:text-[7.5vw]"
            >
              Let's
              <br />
              <span className="text-black/25 dark:text-white/25">Create.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mt-8 max-w-xl text-sm leading-7 text-black/55 dark:text-white/50 sm:text-base"
            >
              Have a project, collaboration, or creative idea in mind? Let's
              turn it into something meaningful, engaging, and visually
              memorable.
            </motion.p>

            {/* ================= AVAILABILITY ================= */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30 dark:bg-white/30" />

                <span className="relative inline-flex h-3 w-3 rounded-full bg-black dark:bg-white" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50 dark:text-white/40">
                Available for creative projects
              </span>
            </motion.div>
          </div>

          {/* ================= RIGHT CONTACT PANEL ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-[#181818] sm:p-8"
          >
            {/* ================= EMAIL ================= */}

            <div className="border-b border-black/10 pb-7 dark:border-white/10">
              <div className="mb-5 flex items-center justify-between">
                <motion.a
                  href={`mailto:${email}`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black"
                  aria-label="Send email"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>

                {/* Copy Email */}

                <motion.button
                  type="button"
                  onClick={copyEmail}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </motion.button>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 dark:text-white/35">
                Email
              </p>

              <a
                href={`mailto:${email}`}
                className="group mt-2 flex items-center justify-between gap-3"
              >
                <span className="break-all text-sm font-semibold transition-opacity duration-300 group-hover:opacity-50 sm:text-base">
                  {email}
                </span>

                <ArrowUpRight className="hidden h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
              </a>

              {/* Email Action */}

              <a
                href={`mailto:${email}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-black hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
              >
                <Mail className="h-3.5 w-3.5" />
                Send Email
              </a>
            </div>

            {/* ================= WHATSAPP ================= */}

            <div className="pt-7">
              <motion.a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black"
                aria-label="Open WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </motion.a>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 dark:text-white/35">
                WhatsApp
              </p>

              {/* Clickable WhatsApp Number */}

              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 flex items-center gap-3"
              >
                <span className="text-base font-semibold transition-opacity duration-300 group-hover:opacity-50">
                  +91 7806865023
                </span>

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <p className="mt-5 max-w-xs text-xs leading-5 text-black/40 dark:text-white/30">
                Open for creative collaborations, video projects and content
                opportunities.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= FOOTER ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mt-20 border-t border-black/10 pt-6 dark:border-white/10"
        >
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.15em] text-black/40 dark:text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Mohamed Sharuk</p>

            <p>Video Editor · Content Creator · Digital Marketer</p>

            <a
              href="#home"
              className="font-bold text-black transition-opacity hover:opacity-50 dark:text-white"
            >
              Back To Top ↑
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
