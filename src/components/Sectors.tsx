import { motion } from 'motion/react';
import { sectors } from '../lib/data';

export default function Sectors() {
  return (
    <section
      id="sectors"
      className="py-24 md:py-32 px-6 2xl:px-12 w-full bg-dark text-light relative z-10 border-t border-light/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3"
        >
          <h2 className="font-sans text-sm tracking-widest text-light/50 uppercase mb-4">
            Industries We Serve
          </h2>
          <h3 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.1] text-accent">
            Sector <br /> Expertise
          </h3>
        </motion.div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="py-4 border-b border-light/10 flex items-center group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-light/20 mr-4 group-hover:bg-accent transition-colors" />
              <span className="font-sans text-lg lg:text-xl font-light tracking-wide group-hover:text-light text-light/80 transition-colors">
                {sector}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
