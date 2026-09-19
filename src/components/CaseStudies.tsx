import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { caseStudies } from '../lib/data';

import type { MotionValue } from 'motion/react';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  image: string;
  stats: string;
}

function Card({
  study,
  i,
  progress,
  range,
  targetScale,
}: {
  key?: string | number;
  study: CaseStudy;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-10vh + ${i * 40}px)` }}
        className="relative w-full max-w-6xl h-[60vh] md:h-[70vh] rounded-none overflow-hidden bg-light/5 border border-light/10 origin-top flex flex-col md:flex-row shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.5)]"
      >
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-between">
          <div>
            <div className="font-sans text-xs uppercase tracking-widest text-light/50 mb-6">
              {study.category}
            </div>
            <h3 className="font-display text-3xl md:text-5xl text-light leading-snug">
              {study.title}
            </h3>
          </div>

          <div className="mt-12 md:mt-0">
            <p className="font-sans text-lg md:text-xl text-light/80 tracking-wide leading-relaxed">
              {study.stats}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full overflow-hidden relative">
          <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
            <img
              src={study.image}
              alt={study.title}
              className="object-cover w-full h-full opacity-80"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent md:hidden block" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CaseStudies() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="work" ref={container} className="relative mt-24 mb-48">
      <div className="px-6 2xl:px-12 pt-20 pb-10 sticky top-0 z-10 w-full bg-dark/80 backdrop-blur-md flex flex-col pt-32">
        <h2 className="font-sans text-sm tracking-widest text-accent uppercase mb-2">Portfolio</h2>
        <h3 className="font-display text-4xl md:text-5xl tracking-tight leading-snug">
          Our Investments
        </h3>
      </div>

      <div className="px-6 2xl:px-12">
        {caseStudies.map((study, i) => {
          const targetScale = 1 - (caseStudies.length - i) * 0.05;
          return (
            <Card
              key={study.id}
              study={study}
              i={i}
              progress={scrollYProgress}
              range={[i * (1 / caseStudies.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
