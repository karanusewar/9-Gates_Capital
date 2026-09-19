import { motion } from 'motion/react';
import { useRef } from 'react';

const companies = [
  {
    name: 'CIVITAS LEARNING',
    style: 'font-sans tracking-[0.2em] font-light uppercase text-xl',
    icon: 'dot-circle',
  },
  {
    name: 'class',
    style: 'font-sans font-bold tracking-tight text-5xl lowercase',
    icon: 'squares',
  },
  {
    name: 'CLEARCO',
    style:
      'font-sans tracking-widest font-normal text-2xl uppercase border-b-2 border-dotted border-gray-400 pb-1',
  },
  { name: 'Casap', style: 'font-sans font-bold text-4xl tracking-tight', icon: 'leaf' },
  { name: 'Chainalysis', style: 'font-sans font-bold text-3xl tracking-tight', icon: 'chain' },
  { name: 'zoominfo | CHORUS', style: 'font-sans font-bold text-2xl' },
  { name: 'blend', style: 'font-sans font-medium text-5xl lowercase' },
  { name: 'bolt', style: 'font-sans italic font-black text-6xl lowercase tracking-tighter' },
  { name: 'box', style: 'font-sans font-bold text-5xl lowercase', icon: 'box' },
  { name: 'betterworks', style: 'font-sans font-light text-3xl tracking-tight lowercase' },
  { name: 'bill', style: 'font-sans font-black text-6xl lowercase' },
  { name: 'Bland®', style: 'font-sans font-bold text-5xl tracking-tighter' },
  {
    name: 'ASAPP',
    style: 'font-sans font-black text-3xl uppercase tracking-widest',
    icon: 'triangle',
  },
  { name: 'Assembled', style: 'font-sans font-bold tracking-tight text-3xl', icon: 'puzzle' },
  {
    name: 'BEDROCK',
    style: 'font-sans font-medium text-4xl uppercase tracking-widest',
    icon: 'bedrock',
  },
  { name: 'adaption', style: 'font-sans font-semibold text-4xl lowercase', icon: 'dots' },
  { name: 'Adaptive', style: 'font-serif font-medium text-5xl' },
  { name: 'Arcee AI', style: 'font-serif font-light text-4xl', icon: 'slash' },
];

export default function Testimonial() {
  const containerRef = useRef(null);

  const getIcon = (type?: string) => {
    switch (type) {
      case 'dot-circle':
        return (
          <div className="w-10 h-10 rounded-full border-4 border-dotted border-gray-900 mr-4" />
        );
      case 'squares':
        return (
          <div className="grid grid-cols-2 gap-1 mr-3 w-10">
            <div className="w-5 h-5 bg-gray-900 rounded-sm"></div>
            <div className="w-5 h-5 bg-gray-900 rounded-sm opacity-0"></div>
            <div className="w-5 h-5 bg-gray-900 rounded-sm"></div>
            <div className="w-5 h-5 bg-gray-900 rounded-sm"></div>
          </div>
        );
      case 'leaf':
        return (
          <div className="w-8 h-8 bg-gray-900 rounded-tl-full rounded-br-full mr-3 transform -rotate-12" />
        );
      case 'chain':
        return (
          <div className="flex items-center justify-center mr-3 relative w-8 h-8">
            <div className="absolute w-6 h-6 border-4 border-gray-900 rounded-full left-0 top-0"></div>
            <div className="absolute w-6 h-6 border-4 border-gray-900 rounded-full right-0 bottom-0"></div>
          </div>
        );
      case 'box':
        return null;
      case 'triangle':
        return (
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-gray-900 border-r-[15px] border-r-transparent mr-4" />
        );
      case 'puzzle':
        return <div className="w-6 h-6 bg-gray-900 rounded-sm mr-3 translate-y-1" />;
      case 'bedrock':
        return (
          <div className="flex flex-col gap-1 mr-4">
            <div className="w-8 h-2 bg-gray-900"></div>
            <div className="w-6 h-2 bg-gray-900 self-center"></div>
          </div>
        );
      case 'dots':
        return (
          <div className="grid grid-cols-3 gap-1 mr-3 w-8">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
          </div>
        );
      case 'slash':
        return (
          <div className="flex mr-3">
            <div className="w-2 h-10 bg-gray-900 transform rotate-45"></div>
            <div className="w-2 h-10 bg-gray-900 transform rotate-45 -ml-1"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 bg-[#F6F5F2] text-gray-900 z-10"
      ref={containerRef}
    >
      <div className="px-6 2xl:px-12 mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-6xl tracking-tight leading-snug">
              PARTNERING WITH <br /> VISIONARIES
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md"
          >
            <p className="font-sans text-lg text-gray-600 font-light tracking-wide leading-relaxed">
              We empower industry-defining companies across emerging markets and technology sectors.
              Explore the teams transforming their categories into global leaders.
            </p>
          </motion.div>
        </div>

        <div className="relative overflow-hidden w-full flex">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F6F5F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#F6F5F2] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 40 }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="pr-6 shrink-0">
                <div className="bg-[#F0EFEA] hover:bg-[#EAE8E2] transition-colors rounded-xl w-64 md:w-80 h-48 md:h-64 flex items-center justify-center p-8 group cursor-pointer h-full">
                  <div className="flex items-center text-gray-900 transition-transform duration-300 group-hover:scale-105 shrink-0 whitespace-nowrap">
                    {getIcon(company.icon)}
                    <span className={company.style}>{company.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
