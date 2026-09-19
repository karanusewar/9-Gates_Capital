import { motion } from 'motion/react';
import { useRef } from 'react';
import { services } from '../lib/data';

interface ServiceItemData {
  id: string;
  title: string;
  description: string;
}

function ServiceItem({
  service,
  index,
}: {
  key?: string | number;
  service: ServiceItemData;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group border-t border-light/20 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 relative overflow-hidden transition-colors duration-500 hover:bg-light"
    >
      <div className="md:col-span-2 flex flex-col font-mono text-light/40 md:text-base group-hover:text-accent transition-colors duration-500">
        <span className="text-sm">{service.id}</span>
      </div>

      <div className="md:col-span-10 flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-16">
        <h3 className="font-display text-2xl md:text-4xl tracking-wide group-hover:text-dark transition-colors duration-500 uppercase leading-snug">
          {service.title}
        </h3>

        <p className="font-sans text-light/60 max-w-sm md:text-lg leading-relaxed group-hover:text-dark/80 transition-colors duration-500">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-24 md:py-48 px-6 2xl:px-12 w-full scroll-mt-20"
    >
      <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-6xl tracking-wide leading-snug uppercase"
        >
          Our <br /> Services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md"
        >
          <h3 className="font-display text-xl md:text-2xl mb-4 text-light/90">
            Driving Growth Through Capital & Strategy
          </h3>
          <p className="font-sans text-sm md:text-base tracking-wide text-light/60 leading-loose">
            Specialized funding solutions and advisory services tailored to your business stage and
            sector.
          </p>
        </motion.div>
      </div>

      <div className="w-full">
        {services.map((service, index) => (
          <ServiceItem key={service.id} service={service} index={index} />
        ))}
        {/* Final border */}
        <div className="border-t border-light/20" />
      </div>
    </section>
  );
}
