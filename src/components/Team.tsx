import { motion } from 'motion/react';
import { team } from '../lib/data';

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 md:py-32 px-6 2xl:px-12 w-full bg-dark text-light relative z-10 border-t border-light/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center max-w-2xl mx-auto"
        >
          <h2 className="font-sans text-sm tracking-widest text-accent uppercase mb-4">Our Team</h2>
          <h3 className="font-display text-3xl md:text-5xl tracking-tight leading-snug">
            The People Behind <br /> 9Gates
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light/5 border border-light/10 rounded-2xl p-8 hover:bg-light/10 transition-colors text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-light/10 mx-auto flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <span className="font-display font-medium text-xl text-light group-hover:text-accent transition-colors">
                  {group.abbreviation}
                </span>
              </div>
              <h4 className="font-sans text-xs tracking-widest text-light/50 uppercase mb-4">
                {group.group}
              </h4>
              <p className="font-display text-2xl tracking-wide">{group.roles.join(', ')}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
