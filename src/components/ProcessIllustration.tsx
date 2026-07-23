import {
  Database,
  FileSpreadsheet,
  PenLine,
  ShieldCheck,
  FileBarChart2,
  Lightbulb,
  Users,
} from 'lucide-react';

// ── Colour tokens ─────────────────────────────────────────────────────────────
const C = {
  neutral: {
    bg:     '#FFFFFF',
    border: '#DDE3EE',
    shadow: '0 1px 4px rgba(15,23,42,0.07), 0 4px 12px rgba(15,23,42,0.04)',
    iconBg: '#F8F9FC',
    iconBd: '#E2E8F0',
    icon:   '#64748B',
    label:  '#475569',
  },
  indigo: {
    bg:     '#F4F6FF',
    border: '#BCC5FB',
    shadow: '0 1px 4px rgba(79,70,229,0.08), 0 6px 20px rgba(79,70,229,0.13)',
    iconBg: '#EEF0FF',
    iconBd: '#C7D2FE',
    icon:   '#4F46E5',
    label:  '#1E1B4B',
  },
  copper: {
    bg:     '#FFFBF4',
    border: '#F5C98A',
    shadow: '0 1px 4px rgba(180,83,9,0.07), 0 6px 20px rgba(180,83,9,0.12)',
    iconBg: '#FFF4E6',
    iconBd: '#FCD9AA',
    icon:   '#B45309',
    label:  '#7C2D12',
  },
};

type Variant = keyof typeof C;

// ── Card node — horizontal layout: icon-left + label ─────────────────────────
function Node({
  icon: Icon,
  label,
  variant = 'neutral',
  width = 116,
}: {
  icon: React.ElementType;
  label: string;
  variant?: Variant;
  width?: number;
}) {
  const s = C[variant];
  return (
    <div
      style={{
        width,
        background: s.bg,
        border: `1.5px solid ${s.border}`,
        borderRadius: 12,
        boxShadow: s.shadow,
        padding: '11px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 7,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 9,
          background: s.iconBg,
          border: `1px solid ${s.iconBd}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={15} color={s.icon} strokeWidth={1.6} />
      </div>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: s.label,
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
        }}
      >
        {label}
      </p>
    </div>
  );
}

// ── SVG connectors — solid lines, right-angle elbows, clean arrowheads ────────
// The diagram grid is: col1=116, gap=?, col2=128, gap=?, col3=116, gap=?, col4=116
// We lay out the SVG in a fixed 560×220 viewBox that maps onto the diagram area.
// Card centres (x): col1 = 58, col2 = 218, col3 = 362, col4 = 504
// Rows (y): top=44, mid=110, bot=176
function Connectors() {
  const lp = { fill: 'none' as const, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const indigo  = '#818CF8';
  const copper  = '#F59E0B';

  return (
    <svg
      viewBox="0 0 560 220"
      preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}
    >
      {/* ── 3 inputs → processing hub ── */}
      {/* Vertical trunk in col1 space */}
      <line x1="58" y1="44"  x2="58" y2="176" stroke="#DDE3EE" strokeWidth="1" {...lp} />
      {/* Horizontal branches to col2 midpoint */}
      <path d="M 58 44  H 150 V 110" stroke="#DDE3EE" strokeWidth="1.25" {...lp} />
      <path d="M 58 110 H 150"       stroke="#DDE3EE" strokeWidth="1.25" {...lp} />
      <path d="M 58 176 H 150 V 110" stroke="#DDE3EE" strokeWidth="1.25" {...lp} />
      {/* Arrowhead into processing */}
      <path d="M 188 106 L 194 110 L 188 114" stroke={indigo} strokeWidth="1.5" {...lp} />

      {/* ── Processing → Reports ── */}
      <line x1="282" y1="110" x2="332" y2="110" stroke={indigo} strokeWidth="1.25" {...lp} />
      <path d="M 328 106 L 334 110 L 328 114" stroke={indigo} strokeWidth="1.5" {...lp} />

      {/* ── Reports → 2 results ── */}
      <line x1="478" y1="110" x2="504" y2="110" stroke="#DDE3EE" strokeWidth="1" {...lp} />
      <path d="M 504 110 V 44"   stroke="#FCD9AA" strokeWidth="1.25" {...lp} />
      <path d="M 504 110 V 176"  stroke="#FCD9AA" strokeWidth="1.25" {...lp} />
      <path d="M 500 48  L 504 42  L 508 48"  stroke={copper} strokeWidth="1.5" {...lp} />
      <path d="M 500 172 L 504 178 L 508 172" stroke={copper} strokeWidth="1.5" {...lp} />
    </svg>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function ProcessIllustration() {
  // The diagram sits on pure white — no wrapper card.
  // We use a relative container that establishes the SVG coordinate space.
  return (
    <div style={{ width: '100%', userSelect: 'none' }}>
      {/* Eyebrow label */}
      <p
        style={{
          fontSize: 9.5,
          fontWeight: 700,
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          color: '#A5B4FC',
          marginBottom: 24,
        }}
      >
        
      </p>

      {/* Diagram — 4-column flex with SVG overlay */}
      <div
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '116px 1fr 116px 116px',
          columnGap: 18,
          alignItems: 'center',
          minHeight: 220,
          paddingBottom: 4,
        }}
      >
        <Connectors />

        {/* Col 1 — inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', zIndex: 1 }}>
          <Node icon={Database}        label="Данные из систем" variant="neutral" />
          <Node icon={FileSpreadsheet} label="Файлы и таблицы"  variant="neutral" />
          <Node icon={PenLine}         label="Ручной ввод"       variant="neutral" />
        </div>

        {/* Col 2 — processing hub (centred, taller) */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <Node icon={ShieldCheck} label="Обработка и проверка" variant="indigo" width={128} />
        </div>

        {/* Col 3 — reports */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <Node icon={FileBarChart2} label="Управленческие отчёты" variant="indigo" width={116} />
        </div>

        {/* Col 4 — results */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 88, position: 'relative', zIndex: 1 }}>
          <Node icon={Lightbulb} label="Понимание бизнеса"    variant="copper" />
          <Node icon={Users}     label="Решения собственника" variant="copper" />
        </div>
      </div>

      {/* Bottom note */}
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#B45309', flexShrink: 0 }} />
        <p style={{ fontSize: 16.5, color: '#94A3B8', lineHeight: 1.4 }}>
          Финальный результат — обоснованные решения собственника
        </p>
      </div>
    </div>
  );
}
