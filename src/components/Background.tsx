import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-dark pointer-events-none">
      {/* Finance Grid (Chart Paper style) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--theme-light) 1px, transparent 1px),
            linear-gradient(to bottom, var(--theme-light) 1px, transparent 1px)
          `,
          backgroundSize: '8vw 8vw',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        }}
      />

      {/* Abstract Market Trend Lines */}
      <div className="absolute inset-0 w-full h-full opacity-[0.15]">
        <svg preserveAspectRatio="none" viewBox="0 0 1000 1000" className="w-full h-full">
          <defs>
            <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="var(--theme-accent)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="trendGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="var(--theme-light)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Main rising trend line */}
          <motion.path
            d="M-100,800 C100,780 200,850 300,700 C400,550 500,650 600,600 C700,550 800,400 900,450 C1000,500 1050,300 1100,250"
            fill="none"
            stroke="url(#trendGradient)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 15, ease: 'easeInOut', repeat: Infinity }}
          />

          {/* Secondary trend line */}
          <motion.path
            d="M-100,900 C150,880 250,800 350,750 C450,700 550,850 650,700 C750,550 850,500 950,450 C1050,400 1100,200 1200,150"
            fill="none"
            stroke="url(#trendGradientLight)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 0.4, 0],
            }}
            transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity, delay: 5 }}
          />
        </svg>
      </div>

      {/* Faint Candlestick / Volume Bars at bottom */}
      <VolumeBars />

      {/* Soft central illumination */}
      <div className="absolute top-[-20%] left-[10%] w-[80vw] h-[80vw] bg-light opacity-[0.02] rounded-full blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-accent opacity-[0.03] rounded-full blur-[150px]" />

      {/* Dramatic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--theme-dark)_90%)] opacity-100 pointer-events-none" />

      {/* High-End Matte Noise filter */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

const bars = [...Array(40)].map((_, i) => ({
  height: `${pseudoRandom(i) * 80 + 10}%`,
  duration: 4 + pseudoRandom(i + 100) * 6,
  delay: pseudoRandom(i + 200) * 3,
}));

function VolumeBars() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-between px-[5%] opacity-[0.04] gap-1 md:gap-2 overflow-hidden pointer-events-none">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className="w-full bg-light rounded-t-sm"
          initial={{ height: '5%' }}
          animate={{ height: ['5%', bar.height, '5%'] }}
          transition={{
            duration: bar.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: bar.delay,
          }}
        />
      ))}
    </div>
  );
}
