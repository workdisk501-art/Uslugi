import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeUp } from '../components/animations';

const industries = [
  'Производство',
  'Обрабатывающие предприятия',
  'Рестораны и HoReCa',
  'Строительство',
  'Сервисный бизнес',
  'Проектный бизнес',
];

const values = [
  { title: 'Просто', desc: 'Сложные вещи объясняю понятно. Системы строю так, чтобы ими мог пользоваться любой сотрудник, а не только тот, кто создавал.' },
  { title: 'Честно', desc: 'Не обещаю результатов, которых не будет. Говорю прямо, если задача не в моей области.' },
  { title: 'Структурно', desc: 'Работаю системно: сначала понять логику, потом строить. Не автоматизирую хаос — сначала наводим порядок.' },
  { title: 'Вдолгую', desc: 'Создаю системы, которые работают без меня. Цель — не зависимость клиента, а устойчивая система учета.' },
];

function PortraitPlaceholder() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="aspect-[3/4] bg-surface rounded-3xl overflow-hidden relative border border-border shadow-card">
        <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <rect width="300" height="400" fill="#F7F8FC" />
          <ellipse cx="150" cy="155" rx="58" ry="65" fill="#E0E7FF" />
          <ellipse cx="150" cy="300" rx="90" ry="70" fill="#E0E7FF" />
          <rect x="60" y="300" width="180" height="100" fill="#E0E7FF" />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface/70 to-transparent" />
      </div>
      <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl px-4 py-2.5 shadow-card-md border border-border">
        <p className="text-ink text-xs font-semibold">10+ лет опыта</p>
        <p className="text-ink-low text-xs">в управленческом учете</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-canvas pt-16">
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="label-indigo mb-4">Специалист</p>
            <h1 className="text-4xl sm:text-5xl font-serif text-ink max-w-xl leading-tight">
              Обо мне
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeUp><PortraitPlaceholder /></FadeUp>
            <FadeUp delay={0.15}>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-serif text-ink mb-4 leading-snug">
                    Специализируюсь на построении систем управленческого учета
                  </h2>
                  <div className="flex flex-col gap-4 text-ink-mid text-[15px] leading-relaxed">
                    <p>Более 10 лет работаю с управленческим учетом в производственных, торговых и сервисных компаниях.</p>
                    <p>Помогаю собственникам создать систему, которая даёт понятную управленческую картину без лишней сложности.</p>
                    <p>Работаю полностью удалённо. Географических ограничений нет.</p>
                  </div>
                </div>
                <div>
                  <p className="text-ink-low text-xs font-medium uppercase tracking-wider mb-3">Отрасли</p>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((ind) => (
                      <span key={ind} className="text-ink-mid text-sm bg-surface border border-border px-3 py-1.5 rounded-full hover:border-indigo-200 hover:text-indigo-700 transition-all duration-200">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold btn-primary"
                  >
                    Обсудить задачу
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="label-indigo mb-3">Принципы</p>
            <h2 className="text-3xl font-serif text-ink mb-12 max-w-sm leading-snug">Как подхожу к работе</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.08}>
                <div className="card rounded-2xl p-6 h-full hover:shadow-card-md hover:border-indigo-100 transition-all duration-300">
                  <p className="text-ink font-semibold mb-3">{v.title}</p>
                  <p className="text-ink-mid text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
