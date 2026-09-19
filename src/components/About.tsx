import { motion } from 'motion/react';

const aboutFeatures = [
  {
    id: '01',
    title: 'Capital Access',
    description:
      'Direct access to institutional investors, family offices, HNIs and strategic networks globally.',
  },
  {
    id: '02',
    title: 'Strategic Advisory',
    description:
      'End-to-end support from pitch preparation to financial structuring and investor relations.',
  },
  {
    id: '03',
    title: 'Long-Term Partnership',
    description:
      'We build sustainable relationships focused on scalable, long-term growth opportunities.',
  },
  {
    id: '04',
    title: 'India-Global Bridge',
    description:
      'Connecting Indian businesses with global capital and bringing international opportunities to India.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 2xl:px-12 w-full bg-light text-dark relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans text-sm tracking-widest text-dark/50 uppercase mb-4">
              About Us
            </h2>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8">
              Global Capital. <br /> Strategic Partnerships.
            </h3>
            <p className="font-display text-xl md:text-2xl text-accent mb-8 italic font-light tracking-wide">
              "Bridging the gap between capital and opportunity — building a trusted ecosystem for
              long-term business growth."
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-sans tracking-widest uppercase font-semibold text-dark hover:text-accent transition-colors"
            >
              Explore Partnership <span className="ml-2">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="font-sans text-lg sm:text-xl text-dark/70 font-light tracking-wide leading-relaxed mb-6">
              <strong className="font-medium text-dark">9Gates</strong> is an integrated capital
              advisory and funding platform dedicated to supporting visionary businesses and
              scalable projects worldwide.
            </p>
            <p className="font-sans text-lg sm:text-xl text-dark/70 font-light tracking-wide leading-relaxed">
              We work with founders, enterprises, investors, financial institutions, and strategic
              partners to facilitate growth capital, project finance, debt funding, and investment
              opportunities across multiple industries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16 border-t border-dark/10">
          {aboutFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="font-mono text-dark/30 text-lg mb-4 block">{feature.id}</span>
              <h4 className="font-display text-xl mb-3 font-medium">{feature.title}</h4>
              <p className="font-sans text-sm text-dark/60 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
