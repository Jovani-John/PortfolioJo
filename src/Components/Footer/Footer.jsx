import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector("section");
      if (firstSection) {
        const sectionHeight = firstSection.offsetHeight;
        setIsVisible(window.scrollY > sectionHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
  });

  return (
    <footer id="Footer" className="relative overflow-hidden bg-black text-white py-4">
      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18), transparent 45%),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {/* About */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
          >
            <h2 className="font-extrabold text-2xl bg-gradient-to-r from-primary-300 via-primary-200 to-primary-50 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.25)]">
              Jovani John
            </h2>
            <p className="text-white/70">
              Frontend Developer — I build fast, accessible, and scalable web UIs.
              Let’s craft delightful user experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
          >
            <h3 className="font-bold text-xl text-primary-200">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#Projects", label: "Projects" },
                { href: "#ContactMe", label: "Contact" },
                {
                  href: "https://drive.google.com/file/d/1WRqWEkI5_Q3moP0ceT2Vcl49LxFpI1bx/view",
                  label: "Download CV",
                  external: true,
                },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="text-white/80 hover:text-primary-200 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp(0.6)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
          >
            <h3 className="font-bold text-lg md:text-xl text-primary-200">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/80 hover:text-primary-200 transition-colors">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                <a href="mailto:jovanijohn40@gmail.com">jovanijohn40@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-primary-200 transition-colors">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                <a href="tel:+201552568856">+201552568856</a>
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-primary-200 transition-colors">
                <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5" />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </motion.div>

          {/* Follow */}
          <motion.div
            variants={fadeUp(0.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
          >
            <h3 className="font-bold text-xl text-primary-200">Follow</h3>
            <ul className="flex flex-wrap gap-3">
              {[
                { href: "https://github.com/Jovani-John", icon: faGithub },
                { href: "https://www.linkedin.com/in/jovani-john/", icon: faLinkedin },
                { href: "https://www.instagram.com/jovaniii_john/?hl=en", icon: faInstagram },
                { href: "https://www.facebook.com/jovani.john/", icon: faFacebookF },
              ].map((s, i) => (
                <motion.li
                  key={s.href}
                  variants={fadeUp(1 + i * 0.1)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 hover:text-primary-50 hover:border-primary-400/40 transition-all"
                  >
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp(1.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-2 flex flex-col gap-3 sm:flex-row items-center justify-between pt-4 border-t border-white/10"
        >
          <p className="text-white/70 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} <strong>Jovani John</strong>. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Back to top */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[60] group"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 blur-[14px] opacity-60 group-hover:opacity-80 transition" />
          <span className="inline-flex items-center justify-center rounded-full bg-primary-600 hover:bg-primary-700 text-white h-11 w-11 shadow-lg transition">
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
        </button>
      )}
    </footer>
  );
}
