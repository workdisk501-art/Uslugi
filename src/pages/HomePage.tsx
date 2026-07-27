import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck, Settings, TrendingUp, Headphones as HeadphonesIcon, LayoutGrid, Calculator, PieChart, UserX, Search, X, CheckCircle2 } from 'lucide-react';
import { FadeUp } from '../components/animations';

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const trustFeatures = [
  { icon: ShieldCheck,    title: 'Понимаю ваш бизнес',        sub: 'Изучаю процессы, чтобы система отражала реальную работу компании' },
  { icon: Settings,       title: 'Определяю ключевые показатели',   sub: 'Каждый отчет отвечает на конкретный вопрос бизнеса' },
  { icon: TrendingUp,     title: 'Учитываю рост компании',  sub: 'Система учета развивается вместе с бизнесом' },
  { icon: HeadphonesIcon, title: 'Сопровождаю внедрение',     sub: 'Система становится частью ежедневной работы сотрудников' },
];

const painCards = [
  { icon: LayoutGrid,  title: 'Компания выросла, а система учёта — нет.',         sub: 'То, что работало на 20 сотрудниках, не работает на 100.' },
  { icon: Calculator,  title: 'Каждый новый вопрос требует ручного расчёта.',      sub: 'Нет готового ответа — значит, кто-то считает вручную.' },
  { icon: PieChart,    title: 'Отчёты есть, но общей картины нет.',                sub: 'Данные раздроблены по таблицам, файлам и системам.' },
  { icon: UserX,       title: 'Цифры зависят от одного сотрудника.',               sub: 'Если он заболел или ушёл — данных нет.' },
  { icon: Search,      title: 'Нужно видеть причины, а не только итоги.',          sub: 'Прибыль упала — но почему? Ответа в отчётах нет.' },
];

const maturityLevels = [
  { level: 1, title: 'Ручной сбор',           desc: 'Данные собираются вручную из разных источников. Много таблиц и несогласованности.' },
  { level: 2, title: 'Отдельные отчёты',       desc: 'Есть отчёты, но каждый новый вопрос считается отдельно. Много ручной работы.' },
  { level: 3, title: 'Единая структура',       desc: 'Появляется единая структура данных и логика учёта. Данные становятся сопоставимыми.' },
  { level: 4, title: 'Управленческие решения', desc: 'Отчёты помогают принимать решения быстро и уверенно. Появляется понимание причин.' },
  { level: 5, title: 'Живая система',          desc: 'Система развивается вместе с ростом бизнеса и адаптируется под новые задачи.' },
];

const beforeItems = [
  'Ручной сбор и перенос данных',
  'Много разных таблиц и марей',
  'Сложно найти причины отклонений',
  'Отчёты запаздывают',
  'Решения принимаются на ощущениях',
];

const afterItems = [
  'Единая система и автоматизация',
  'Актуальные и согласованные данные',
  'Понятные причины и показатели',
  'Отчёты в реальном времени',
  'Решения на основе фактов',
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — MATURITY MAP (dark navy)
// ─────────────────────────────────────────────────────────────────────────────

function MaturityMap() {
  // SVG curve: rising arc from left to right across 5 points
  // viewBox 0 0 900 120 — drawn over the circles row
  const points = [
    { cx: 90,  cy: 95 },
    { cx: 270, cy: 70 },
    { cx: 450, cy: 50 },
    { cx: 630, cy: 32 },
    { cx: 810, cy: 15 },
  ];

  const curvePath = `M ${points[0].cx} ${points[0].cy} C 180 88, 200 65, ${points[1].cx} ${points[1].cy} S 360 46, ${points[2].cx} ${points[2].cy} S 540 28, ${points[3].cx} ${points[3].cy} S 720 12, ${points[4].cx} ${points[4].cy}`;

  return (
    <section style={{ background: '#0F172A', padding: '48px 0 96px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 56px' }}>

        {/* Header */}
        <FadeUp>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6366F1', marginBottom: 20 }}>
            
          </p>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', lineHeight: 1.12, letterSpacing: '-0.025em', color: '#FFFFFF', marginBottom: 16, maxWidth: 600 }}
          >
            Как обычно развивается система управленческого учёта
          </h2>
          <p style={{ fontSize: 20, frontWeight: 500, lineHeight: 1.65, color: '#94A3B8', maxWidth: 520, marginBottom: 72 }}>
            Большинство компаний проходят эти уровни последовательно. 
          </p>
        </FadeUp>

        {/* Trajectory + circles — desktop */}
        <FadeUp delay={0.1} className="hidden md:block">
          <div style={{ position: 'relative', width: '100%', marginBottom: 8 }}>
            {/* SVG trajectory arc */}
            <svg
              viewBox="0 0 900 110"
              preserveAspectRatio="none"
              style={{ width: '100%', height: 110, display: 'block' }}
            >
              {/* Dashed path */}
              <path
                d={curvePath}
                fill="none"
                stroke="#334155"
                strokeWidth="2"
                strokeDasharray="6 4"
                strokeLinecap="round"
              />
              {/* Solid overlay for first segment (levels 1–2 "stuck") */}
              <path
                d={`M ${points[0].cx} ${points[0].cy} C 180 88, 200 65, ${points[1].cx} ${points[1].cy}`}
                fill="none"
                stroke="#475569"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Bright arc from level 3 onward */}
              <path
                d={`M ${points[2].cx} ${points[2].cy} S 540 28, ${points[3].cx} ${points[3].cy} S 720 12, ${points[4].cx} ${points[4].cy}`}
                fill="none"
                stroke="url(#arcGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
              </defs>
              {/* Arrow tip at end */}
              <path
                d={`M ${points[4].cx - 10} ${points[4].cy + 7} L ${points[4].cx + 2} ${points[4].cy} L ${points[4].cx - 10} ${points[4].cy - 7}`}
                fill="none"
                stroke="#B45309"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Dots on path */}
              {points.map((p, i) => {
                const isLast = i === 4;
                const isMid  = i >= 2;
                return (
                  <g key={i}>
                    <circle
                      cx={p.cx} cy={p.cy} r={i === 4 ? 14 : 13}
                      fill={isLast ? '#B45309' : isMid ? '#3730A3' : '#1E293B'}
                      stroke={isLast ? '#FCD9AA' : isMid ? '#6366F1' : '#334155'}
                      strokeWidth="1.5"
                    />
                    <text
                      x={p.cx} y={p.cy + 5}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight="700"
                      fill={isLast ? '#FFF7ED' : isMid ? '#E0E7FF' : '#94A3B8'}
                      fontFamily="Inter, sans-serif"
                    >
                      {i + 1}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Labels row — single description per level, no duplication */}
          <div className="hidden md:grid grid-cols-5 gap-5 mb-16">
            {maturityLevels.map((item, i) => {
              const isLast = i === 4;
              const isMid  = i >= 2;
              return (
                <div key={item.level} style={{ paddingTop: 20 }}>
                  <p style={{
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: isLast ? '#FCD9AA' : isMid ? '#A5B4FC' : '#94A3B8',
                    marginBottom: 10,
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em',
                  }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeUp>

        {/* Mobile stacked */}
        <div className="md:hidden flex flex-col gap-3 mb-10">
          {maturityLevels.map((item, i) => {
            const isLast = i === 4;
            const isMid  = i >= 2;
            return (
              <FadeUp key={item.level} delay={i * 0.07}>
                <div style={{
                  display: 'flex', gap: 14, padding: '14px 16px',
                  background: '#1E293B', borderRadius: 12,
                  border: `1px solid ${isLast ? '#78350F' : isMid ? '#3730A3' : '#1E293B'}`,
                }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                    background: isLast ? '#92400E' : isMid ? '#3730A3' : '#334155',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700,
                    color: isLast ? '#FEF3C7' : isMid ? '#E0E7FF' : '#94A3B8',
                  }}>
                    {item.level}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#E2E8F0', marginBottom: 4 }}>{item.title}</p>
                    <p style={{ fontSize: 12, color: '#64748B', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Callout note */}
       <FadeUp delay={0.4}>
  <p style={{
    fontSize: 13,
    color: '#94A3B8',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 16,
    maxWidth: 560,
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  }}>
    Большинство компаний застревают на уровне 2. Не потому что не хотят, а потому что нет системы.
  </p>
</FadeUp>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — BEFORE / AFTER
// ─────────────────────────────────────────────────────────────────────────────

function BeforeAfter() {
  return (
    <section style={{ background: '#FFFFFF', padding: '112px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 56px' }}>
        <FadeUp>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 }}>
            Что меняется
          </p>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 1fr 220px', gap: 24, alignItems: 'stretch', gridAutoRows: '1fr' }}>

          {/* Col 1 — headline */}
          <FadeUp delay={0.05}>
            <div style={{ paddingTop: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <h2
                className="font-serif"
                style={{ fontSize: 'clamp(1.7rem, 2.4vw, 2.25rem)', lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A', marginBottom: 20 }}
              >
                От ручной работы к управлению бизнесом
              </h2>
              <div style={{ width: 32, height: 3, background: '#4F46E5', borderRadius: 2 }} />
            </div>
          </FadeUp>

          {/* Col 2 — Before */}
          <FadeUp delay={0.1}>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 16, padding: '32px 26px', height: '100%' }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 20 }}>
                До
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {beforeItems.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      background: '#FEF2F2', border: '1px solid #FECACA',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginTop: 1,
                    }}>
                      <X size={10} color="#EF4444" strokeWidth={2.5} />
                    </div>
                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.45 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Col 3 — After */}
          <FadeUp delay={0.18}>
            <div style={{ background: '#F5F7FF', border: '1px solid #C7D2FE', borderRadius: 16, padding: '32px 26px', height: '100%' }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366F1', marginBottom: 20 }}>
                После
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {afterItems.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      background: '#F0FDF4', border: '1px solid #BBF7D0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginTop: 1,
                    }}>
                      <CheckCircle2 size={11} color="#16A34A" strokeWidth={2.2} />
                    </div>
                    <p style={{ fontSize: 13, color: '#1E3A5F', lineHeight: 1.45, fontWeight: 500 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Col 4 — CTA card */}
          <FadeUp delay={0.24}>
            <div style={{
              background: '#FFFBF4', border: '1.5px solid #FCD9AA',
              borderRadius: 16, padding: '32px 22px',
              display: 'flex', flexDirection: 'column', gap: 20, height: '100%',
              justifyContent: 'center',
            }}>
              {/* Arrow up-right graphic */}
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: '#FFF7ED', border: '1px solid #FCD9AA',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <TrendingUp size={20} color="#B45309" strokeWidth={1.6} />
              </div>
              <p
                className="font-serif"
                style={{ fontSize: 17, lineHeight: 1.3, color: '#431407', letterSpacing: '-0.01em' }}
              >
                Система, которая растёт вместе с вашим бизнесом
              </p>
              <Link
                to="/contact"
                style={{
                  fontSize: 13, fontWeight: 600, color: '#B45309',
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  textDecoration: 'none',
                }}
              >
                Обсудить задачу
                <ArrowRight size={12} strokeWidth={2.3} />
              </Link>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 — WHY ME (pain cards as icon grid)
// ─────────────────────────────────────────────────────────────────────────────

function WhyMe() {
  return (
    <section style={{ background: '#F8FAFC', padding: '112px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 56px' }}>
        <FadeUp>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 16 }}>
            Почему собственники приходят ко мне
          </p>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.375rem)', lineHeight: 1.15, letterSpacing: '-0.025em', color: '#0F172A', marginBottom: 52 }}
          >
            Узнаёте себя?
          </h2>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginTop: 0 }}>
          {painCards.map(({ icon: Icon, title, sub }, i) => (
            <FadeUp key={title} delay={i * 0.07}>
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: 18,
                padding: '32px 22px 28px',
                boxShadow: '0 1px 3px rgba(15,23,42,0.05), 0 4px 16px rgba(15,23,42,0.06)',
                display: 'flex', flexDirection: 'column', gap: 16,
                height: '100%',
                transition: 'box-shadow 0.22s ease, transform 0.22s ease',
              }}
                className="hover:-translate-y-1 hover:shadow-lg"
              >
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: '#EEF2FF', border: '1px solid #E0E7FF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={19} color="#4F46E5" strokeWidth={1.5} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: '#0F172A', lineHeight: 1.35, letterSpacing: '-0.01em' }}>
                    {title}
                  </p>
                  <p style={{ fontSize: 12.5, color: '#94A3B8', lineHeight: 1.55 }}>
                    {sub}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 5 — FINAL CTA
// ─────────────────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section style={{ background: '#0F172A', padding: '120px 0' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <FadeUp>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.5rem)', lineHeight: 1.15, letterSpacing: '-0.025em', color: '#FFFFFF', marginBottom: 16 }}
          >
            Готовы разобраться с учётом?
          </h2>
          <p style={{ fontSize: 15, color: '#94A3B8', lineHeight: 1.7, marginBottom: 36 }}>
            Расскажите о вашей задаче — обсудим, есть ли смысл работать вместе.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center btn-primary"
            style={{
              gap: 8, padding: '14px 32px',
              borderRadius: 10, fontSize: 14, fontWeight: 600,
              letterSpacing: '-0.01em',
            }}
          >
            Обсудить вашу задачу
            <ArrowRight size={14} strokeWidth={2.2} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div>

      {/* ══ HERO (unchanged — approved) ══════════════════════════════════════ */}
      <section
        style={{
          background: '#FFFFFF',
          paddingTop: 64,
          borderBottom: '1px solid #EEF2FF',
        }}
      >
        {/* Two-column body */}
        <div
          className="max-w-6xl mx-auto"
          style={{ padding: '40px 18px 0' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '520px 1fr',
              gap: 12,
              alignItems: 'start',
              minWidth: 0,
            }}
          >
            {/* LEFT */}
            <div>
              <FadeUp>
                <h1
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(2.55rem, 3.7vw, 3.3rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    color: '#0F172A',
                    marginBottom: 24,
                  }}
                >
                  Управленческий учёт,{' '}
                  <br />который помогает{' '}
                  <br />
                  <span style={{ color: '#C2410C', fontStyle: 'italic' }}>принимать решения</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p
                  style={{
                    fontSize: 18,
                    frontWeight: 500,
                    lineHeight: 1.6,
                    color: '#1E293B',
                    marginBottom: 40,
                    maxWidth: 420,
                  }}
                >
                  Проектирую и внедряю систему под задачи и процессы вашего бизнеса
                </p>
              </FadeUp>

              <FadeUp delay={0.18}>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center btn-primary"
                    style={{
                      gap: 8,
                      padding: '12px 26px',
                      borderRadius: 8,
                      fontSize: 13.5,
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Обсудить задачу
                    <ArrowRight size={13} strokeWidth={2.3} />
                  </Link>
                  <Link
                    to="/how-i-work"
                    className="inline-flex items-center btn-ghost"
                    style={{
                      gap: 6,
                      padding: '12px 20px',
                      borderRadius: 8,
                      fontSize: 13.5,
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Как проходит работа
                    <ChevronRight size={13} strokeWidth={2} />
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* RIGHT — process diagram */}
            <FadeUp delay={0.12} className="hidden lg:block">
  <img 
    src="/diagram.png" 
    alt="Схема управленческого учёта"
    className="w-full max-w-full h-auto"
  />
</FadeUp>
          </div>
        </div>

        {/* Trust strip */}
        <div
          className="max-w-6xl mx-auto"
          style={{ padding: '32px 18px 40px' }}
        >
          <FadeUp delay={0.28}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                borderTop: '1px solid #EEF2FF',
                paddingTop: 20,
                gap: 24,
              }}
            >
              {trustFeatures.map(({ icon: Icon, title, sub }, i) => (
                <div
                  key={title}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    background: '#F8FAFC',
                    padding: '12px',
                    borderRadius: 12,
                    boxShadow: '0 1px 3 px rgba(0,0,0,0,0.06)',
                    border: '1px solid #F1F5F9',
                  }}
                >
                  <div
                    style={{
                      width: 36, height: 36, borderRadius: 9,
                      background: '#EEF2FF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      
                    }}
                  >
                    <Icon size={16} color="#4F46E5" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#1E293B', lineHeight: 1.3, marginBottom: 5, letterSpacing: '-0.01em' }}>
                      {title}
                    </p>
                    <p style={{ fontSize: 12, color: '#94A3B8', lineHeight: 1.5 }}>
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ SECTION 1 — Maturity map (dark navy) ══════════════════════════ */}
      <MaturityMap />

      {/* ══ SECTION 3 — Before / After ═══════════════════════════════════════ */}
      <BeforeAfter />

      {/* ══ SECTION 4 — Why me ═══════════════════════════════════════════════ */}
      <WhyMe />

      {/* ══ SECTION 5 — Final CTA ════════════════════════════════════════════ */}
      <FinalCTA />

    </div>
  );
}
