import { useEffect, useRef } from 'react';

export default function HeroIllustration() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('[data-animate]');
    paths?.forEach((el, i) => {
      const path = el as SVGPathElement;
      const len = path.getTotalLength?.() ?? 200;
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
      path.style.animation = `draw 1.4s ease ${i * 0.12}s forwards`;
    });
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Ambient glow behind illustration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <svg
        ref={svgRef}
        viewBox="0 0 480 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10"
        aria-hidden="true"
      >
        {/* Card 1 */}
        <rect x="20" y="30" width="200" height="120" rx="14"
          fill="url(#card1bg)" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        <defs>
          <linearGradient id="card1bg" x1="20" y1="30" x2="220" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1A2540" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
          <linearGradient id="card2bg" x1="260" y1="30" x2="460" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1F2D4A" />
            <stop offset="100%" stopColor="#131B2E" />
          </linearGradient>
          <linearGradient id="card3bg" x1="20" y1="190" x2="460" y2="310" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1A2540" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          {/* Top highlight inset */}
          <linearGradient id="topHi" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Card 2 */}
        <rect x="260" y="30" width="200" height="120" rx="14"
          fill="url(#card2bg)" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        {/* Card 3 */}
        <rect x="20" y="190" width="440" height="120" rx="14"
          fill="url(#card3bg)" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />

        {/* Top-edge inner highlights */}
        <rect x="20" y="30" width="200" height="2" rx="1" fill="url(#topHi)" opacity="0.6" />
        <rect x="260" y="30" width="200" height="2" rx="1" fill="url(#topHi)" opacity="0.6" />
        <rect x="20" y="190" width="440" height="2" rx="1" fill="url(#topHi)" opacity="0.6" />

        {/* Card 1 — label */}
        <text x="36" y="59" fill="rgba(148,163,184,0.7)" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="0.08em">ВЫРУЧКА ПО НАПРАВЛЕНИЯМ</text>
        {/* Skeleton bars — muted */}
        <rect x="36" y="68" width="60" height="5" rx="2.5" fill="rgba(248,250,252,0.75)" />
        <rect x="104" y="68" width="40" height="5" rx="2.5" fill="rgba(248,250,252,0.45)" />
        <rect x="152" y="68" width="52" height="5" rx="2.5" fill="rgba(248,250,252,0.60)" />
        <rect x="36" y="80" width="45" height="5" rx="2.5" fill="rgba(6,182,212,0.50)" />
        <rect x="89" y="80" width="70" height="5" rx="2.5" fill="rgba(6,182,212,0.30)" />
        <rect x="167" y="80" width="37" height="5" rx="2.5" fill="rgba(6,182,212,0.40)" />

        {/* Bar chart — cyan accent */}
        <rect x="36"  y="103" width="13" height="27" rx="3" fill="rgba(6,182,212,0.12)" />
        <rect x="55"  y="112" width="13" height="18" rx="3" fill="rgba(6,182,212,0.12)" />
        <rect x="74"  y="97"  width="13" height="33" rx="3" fill="rgba(6,182,212,0.85)" />
        <rect x="93"  y="107" width="13" height="23" rx="3" fill="rgba(6,182,212,0.22)" />
        <rect x="112" y="101" width="13" height="29" rx="3" fill="rgba(6,182,212,0.15)" />
        <rect x="131" y="95"  width="13" height="35" rx="3" fill="rgba(6,182,212,0.50)" />
        <rect x="150" y="109" width="13" height="21" rx="3" fill="rgba(6,182,212,0.12)" />
        <rect x="169" y="100" width="13" height="30" rx="3" fill="rgba(6,182,212,0.30)" />

        {/* Card 2 */}
        <text x="276" y="59" fill="rgba(148,163,184,0.7)" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="0.08em">ДВИЖЕНИЕ ДЕНЕГ</text>
        <text x="276" y="82" fill="#F1F5F9" fontSize="22" fontFamily="Inter,sans-serif" fontWeight="300">+2.4М</text>
        <text x="276" y="97" fill="rgba(148,163,184,0.6)" fontSize="8" fontFamily="Inter,sans-serif">за последние 30 дней</text>

        {/* Sparkline — cyan glow */}
        <polyline
          data-animate
          points="276,130 296,121 316,127 336,109 356,115 376,103 396,111 416,99 436,107"
          stroke="rgba(6,182,212,0.25)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <polyline
          data-animate
          points="276,130 296,121 316,127 336,109 356,115 376,103 396,111 416,99 436,107"
          stroke="#06b6d4"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <polyline
          points="276,130 296,121 316,127 336,109 356,115 376,103 396,111 416,99 436,107 436,140 276,140"
          fill="url(#sparkFill)"
          opacity="1"
        />
        <defs>
          <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(6,182,212,0.15)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0)" />
          </linearGradient>
        </defs>

        {/* Card 3 — table */}
        <text x="36" y="216" fill="rgba(148,163,184,0.7)" fontSize="7.5" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="0.08em">ОПЕРАЦИОННАЯ СВОДКА</text>
        {[0,1,2,3,4].map((i) => (
          <g key={i}>
            {i > 0 && <line x1="36" y1={228 + i * 14} x2="444" y2={228 + i * 14} stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" />}
            <rect x="36" y={231 + i * 14}
              width={[90,75,85,65,80][i]} height="5" rx="2.5"
              fill={i === 0 ? 'rgba(241,245,249,0.80)' : 'rgba(148,163,184,0.35)'}
            />
            <rect x="230" y={231 + i * 14}
              width={[40,55,35,50,42][i]} height="5" rx="2.5"
              fill={i === 0 ? 'rgba(241,245,249,0.80)' : 'rgba(148,163,184,0.25)'}
            />
            <rect x="340" y={231 + i * 14}
              width={[30,45,55,38,50][i]} height="5" rx="2.5"
              fill={i === 0 ? 'rgba(6,182,212,0.80)' : 'rgba(6,182,212,0.25)'}
            />
          </g>
        ))}

        {/* Connectors */}
        <line data-animate x1="220" y1="90" x2="260" y2="90" stroke="rgba(6,182,212,0.30)" strokeWidth="1" strokeDasharray="4 3" />
        <line data-animate x1="120" y1="150" x2="120" y2="190" stroke="rgba(6,182,212,0.25)" strokeWidth="1" strokeDasharray="4 3" />
        <line data-animate x1="360" y1="150" x2="360" y2="190" stroke="rgba(6,182,212,0.25)" strokeWidth="1" strokeDasharray="4 3" />

        <circle cx="120" cy="150" r="3" fill="rgba(6,182,212,0.50)" />
        <circle cx="360" cy="150" r="3" fill="rgba(6,182,212,0.50)" />
        <circle cx="120" cy="190" r="3" fill="rgba(6,182,212,0.70)" />
        <circle cx="360" cy="190" r="3" fill="rgba(6,182,212,0.70)" />
      </svg>

      {/* Floating glow dots */}
      <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse-soft shadow-glow-sm" />
      <div className="absolute bottom-10 left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/40 animate-pulse-soft" style={{ animationDelay: '1.2s' }} />
    </div>
  );
}
