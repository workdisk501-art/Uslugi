import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { FadeUp } from '../components/animations';

const tasks = [
  {
    id: 1,
    title: 'Хочу видеть прибыль по направлениям',
    short: 'Бизнес работает, а где он зарабатывает — непонятно.',
    details: 'Разрабатываю систему учета по центрам прибыли: каждое направление, продукт или подразделение видно отдельно.',
    tags: ['Производство', 'Услуги', 'Рестораны'],
  },
  {
    id: 2,
    title: 'Нужно собрать себестоимость производства',
    short: 'Выручка есть, но сколько стоит единица продукции — сложно сказать.',
    details: 'Строю модель расчета себестоимости с учетом прямых затрат, накладных расходов и распределения.',
    tags: ['Производство', 'Строительство'],
  },
  {
    id: 3,
    title: 'Хочу отказаться от ручных Excel',
    short: 'Каждый месяц одна и та же работа: скопировать, пересчитать, свести.',
    details: 'Автоматизирую сбор и консолидацию данных. Ручной труд сокращается — отчет формируется сам.',
    tags: ['Любой бизнес'],
  },
  {
    id: 4,
    title: 'Нужен платежный календарь',
    short: 'Деньги есть, но непонятно, хватит ли их через две недели.',
    details: 'Создаю систему планирования и контроля денежных потоков.',
    tags: ['Проектный бизнес', 'Строительство'],
  },
  {
    id: 5,
    title: 'Нужно понять причины отклонений',
    short: 'Показатели не те, но почему — в отчетах не видно.',
    details: 'Строю систему план-факт анализа с детализацией по причинам.',
    tags: ['Производство', 'Услуги'],
  },
  {
    id: 6,
    title: 'Хочу видеть ежедневную управленческую сводку',
    short: 'Утром хочется открыть один экран и понять, как идет бизнес.',
    details: 'Проектирую оперативный дашборд с ключевыми показателями. Обновляется автоматически.',
    tags: ['Любой бизнес'],
  },
];

function TaskCard({ task, onClick }: { task: typeof tasks[0]; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left card rounded-2xl p-7 h-full hover:shadow-card-md hover:-translate-y-0.5 hover:border-indigo-100 transition-all duration-300 group w-full"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-ink font-semibold leading-snug group-hover:text-indigo-700 transition-colors duration-200">
          {task.title}
        </h3>
        <ArrowRight size={16} className="text-ink-ghost group-hover:text-indigo-500 flex-shrink-0 mt-0.5 transition-colors duration-200" />
      </div>
      <p className="text-ink-mid text-sm leading-relaxed mb-4">{task.short}</p>
      <div className="flex flex-wrap gap-1.5">
        {task.tags.map((tag) => (
          <span key={tag} className="text-indigo-600 text-xs bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}

function Modal({ task, onClose }: { task: typeof tasks[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-dark/30 backdrop-blur-sm" />
      <div
        className="relative bg-canvas rounded-3xl p-8 max-w-lg w-full shadow-card-lg border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-surface border border-border text-ink-mid hover:text-ink hover:bg-border transition-colors"
        >
          <X size={14} />
        </button>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {task.tags.map((tag) => (
            <span key={tag} className="text-indigo-600 text-xs bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-ink text-xl font-serif mb-3 leading-snug">{task.title}</h3>
        <p className="text-ink-mid text-sm leading-relaxed mb-3">{task.short}</p>
        <p className="text-ink-mid text-sm leading-relaxed mb-7">{task.details}</p>
        <Link
          to="/contact"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold btn-primary"
        >
          Обсудить задачу
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function TasksPage() {
  const [selected, setSelected] = useState<typeof tasks[0] | null>(null);

  return (
    <div className="bg-canvas pt-16">
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="label-indigo mb-4">Задачи</p>
            <h1 className="text-4xl sm:text-5xl font-serif text-ink max-w-xl leading-tight mb-6">
              Какие задачи решаю
            </h1>
            <p className="text-ink-mid text-lg max-w-lg leading-relaxed">
              Работаю с управленческими вопросами, а не с программами. Инструмент выбирается под задачу.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task, i) => (
              <FadeUp key={task.id} delay={i * 0.07}>
                <TaskCard task={task} onClick={() => setSelected(task)} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-dark">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="text-slate-500 text-sm mb-3">Не нашли свою задачу?</p>
            <h2 className="text-2xl font-serif text-white mb-4">
              Расскажите, что происходит — разберемся вместе
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold btn-primary"
            >
              Обсудить задачу
              <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {selected && <Modal task={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
