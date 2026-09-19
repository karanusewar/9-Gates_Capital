import { motion } from 'motion/react';
import { advantages } from '../lib/data';

export default function Advantages() {
  return (
    <section className="py-24 md:py-32 px-6 2xl:px-12 w-full bg-light text-dark relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans text-sm tracking-widest text-dark/50 uppercase mb-4">
              Why Choose Us
            </h2>
            <h3 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.1]">
              OUR <br /> ADVANTAGE
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-dark/10 pt-8"
            >
              <h4 className="font-display text-2xl mb-4 font-medium tracking-wide">{adv.title}</h4>
              <p className="font-sans text-dark/70 leading-relaxed text-lg font-light">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
