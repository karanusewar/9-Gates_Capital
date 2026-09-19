import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import heroBgImage from '../assets/images/finance_industrial_hero_1779709895213.png';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] w-full flex flex-col justify-center px-6 2xl:px-12 overflow-hidden border-b border-light/5"
    >
      {/* Background Image with Parallax & Overlay */}
      <motion.div
        className="absolute inset-0 z-0 opacity-80 mix-blend-luminosity"
        style={{
          y: y1,
          scale,
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-dark via-dark/70 to-dark/30 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark via-transparent to-dark/30 pointer-events-none" />

      {/* Geometric grid overlay for technical/finance feel */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, var(--theme-light) 1px, transparent 1px), linear-gradient(to bottom, var(--theme-light) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent)',
        }}
      />

      <div className="relative z-20 mt-12 md:mt-16 max-w-7xl mx-auto w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          >
            <h1 className="font-display font-medium text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] leading-[1.05] tracking-tight text-light">
              9Gates. <br />
              <span className="text-light/50 italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mt-6 sm:mt-12 leading-tight">
                Transforming Vision into Enduring Value.
              </span>
            </h1>
          </motion.div>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 grid md:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-4 hidden md:flex flex-col gap-8"
          >
            <div>
              <div className="w-16 h-px bg-accent mb-6" />
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-light/50 block mb-2">
                Global Investment Firm
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <div className="font-display text-3xl text-light">$14.2B</div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-light/40 mt-1">
                  Assets Under Mgt
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-light">140+</div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-light/40 mt-1">
                  Portfolio Cos
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-light">32%</div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-light/40 mt-1">
                  Avg Gross IRR
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-light">9</div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-light/40 mt-1">
                  Global Offices
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="md:col-span-8 lg:col-span-6 lg:col-start-7"
          >
            <p className="font-sans text-lg sm:text-xl text-light/80 font-light tracking-wide leading-relaxed mb-6">
              We are a global private investment firm that partners differently. Access{' '}
              <strong className="font-medium text-light">strategic capital</strong>, investor
              networks, and advisory support for startups, real estate, and manufacturing worldwide.
              We invest in what could be to create exceptional outcomes.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-accent text-white font-sans text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors shrink-0"
              >
                Get In Touch
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-3 font-sans text-xs font-semibold tracking-widest uppercase text-light hover:text-accent transition-colors group py-4"
              >
                Learn More
                <span className="w-8 h-[1px] bg-light/30 group-hover:bg-accent transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-6 2xl:left-12 flex items-center gap-4 hidden sm:flex"
      >
        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-light/40 uppercase rotate-[-90deg] origin-left translate-y-8">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-light/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/3 bg-accent"
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
