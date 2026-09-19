import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-10 overflow-hidden relative border-t border-light/5">
      <div className="px-6 2xl:px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-32 relative z-10">
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-light/70 mb-4 tracking-wide uppercase">
            Schedule a consultation
          </h2>
          <a href="tel:+1234567890" className="inline-flex items-center gap-6 group mb-6">
            <span className="font-display text-2xl md:text-4xl text-light group-hover:text-light/70 transition-colors">
              +1 (555) 000-0000
            </span>
          </a>
          <br />
          <a
            href="mailto:contact@9gatescapital.com"
            className="inline-flex items-center gap-6 group"
          >
            <span className="font-display text-xl md:text-2xl text-light/50 group-hover:text-light transition-colors">
              contact@9gatescapital.com
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-6 font-sans text-xs tracking-widest uppercase text-light/50">
          <a href="#" className="hover:text-light transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-light transition-colors">
            Twitter (X)
          </a>
          <a href="#" className="hover:text-light transition-colors">
            Instagram
          </a>
        </div>
      </div>

      {/* Massive Marquee */}
      <div className="relative w-full whitespace-nowrap overflow-hidden border-y border-light/10 py-6 flex items-center">
        <motion.div
          className="font-display text-[8vw] tracking-wide text-light/5 inline-flex whitespace-nowrap items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
        >
          <span className="pr-12">9GATES</span>
          <span className="pr-12">·</span>
          <span className="pr-12">9GATES</span>
          <span className="pr-12">·</span>
          <span className="pr-12">9GATES</span>
          <span className="pr-12">·</span>
          <span className="pr-12">9GATES</span>
          <span className="pr-12">·</span>
        </motion.div>
      </div>

      <div className="px-6 2xl:px-12 mt-12 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-light/30">
        <p>© 2026 9Gates. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-light transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-light transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
