import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Guarantee() {
  return (
    <section
      id="about"
      className="py-32 px-6 2xl:px-12 w-full bg-light text-dark relative overflow-hidden border-t border-dark/10"
    >
      <div className="max-w-7xl mx-auto relative z-10 border-l border-dark/10 pl-6 md:pl-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wide leading-snug mb-8 uppercase">
              INVESTMENT <br /> PHILOSOPHY
            </h2>
            <div className="w-16 h-[2px] bg-dark mb-8" />
          </div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-lg md:text-xl leading-relaxed text-dark/80 mb-12"
            >
              <p className="mb-6 font-medium">
                At 9Gates, our approach is built on fundamental value creation:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-dark rounded-full mt-2 shrink-0" />
                  <span>
                    We partner differently to unlock opportunity and help people and companies
                    create exceptional outcomes.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-dark rounded-full mt-2 shrink-0" />
                  <span>
                    We invest in what could be, accelerating growth for visionary founders and
                    management teams.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-dark rounded-full mt-2 shrink-0" />
                  <span>
                    We connect deep and diverse vertical and regional expertise to deliver
                    unconventional insight.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-dark rounded-full mt-2 shrink-0" />
                  <span>
                    We prioritize sustainable, long-term impact through cross-platform collaboration
                    across global markets.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="flex items-center gap-4 group text-lg font-medium">
                <span className="border-b border-dark pb-1 group-hover:border-accent transition-colors">
                  Explore our portfolio
                </span>
                <span className="w-10 h-10 rounded-full bg-dark text-light flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <ArrowRight size={18} />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
