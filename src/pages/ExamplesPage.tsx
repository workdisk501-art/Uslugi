import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeUp } from '../components/animations';

const examples = [
  {
    id: 1,
    industry: 'Производство',
    situation: 'Производственная компания работает в двух направлениях. Общий результат положительный, но собственник не понимает, что именно приносит прибыль.',
    problem: 'Все доходы и расходы сводились в одну таблицу. Распределение затрат между направлениями не было — только общий итог.',
    rebuilt: 'Разработана структура учета по центрам прибыли. Прямые расходы привязаны к направлениям. Для косвенных создана методика распределения.',
    result: 'Ежемесячный отчет показывает результат по каждому направлению. Стало видно, что одно направление убыточно на протяжении года.',
    diagram: [
      { label: 'До',    items: ['Выручка общая', 'Расходы общие', 'Прибыль ?'] },
      { label: 'После', items: ['Направление А: +', 'Направление Б: −', 'Решение очевидно'] },
    ],
  },
  {
    id: 2,
    industry: 'Рестораны',
    situation: 'Сеть из трёх ресторанов. На подготовку сводного отчёта уходило 2–3 дня каждый месяц.',
    problem: 'Данные из трёх систем нужно было вручную консолидировать. Каждый раз — один и тот же ручной процесс.',
    rebuilt: 'Создана автоматическая консолидация данных из всех источников. Отчёт формируется по нажатию кнопки.',
    result: 'Время подготовки отчётности сократилось с 3 дней до нескольких часов.',
    diagram: [
      { label: 'Было',  items: ['3 выгрузки', 'Ручная сводка', '2–3 дня работы'] },
      { label: 'Стало', items: ['Авто-консолидация', 'Единый отчёт', 'Несколько часов'] },
    ],
  },
  {
    id: 3,
    industry: 'Строительство',
    situation: 'Проектная компания. Несколько объектов одновременно. Нужно понимать, какой объект в плюсе, какой — нет.',
    problem: 'Учёт вёлся по компании в целом. Экономика каждого проекта была непрозрачной.',
    rebuilt: 'Разработан проектный учёт с привязкой всех затрат к конкретному объекту. Создан план-факт анализ.',
    result: 'По каждому объекту виден финансовый результат. Отклонения от бюджета заметны сразу.',
    diagram: [
      { label: 'До',    items: ['Общие цифры', 'Нет деления по объектам', 'Непонятные отклонения'] },
      { label: 'После', items: ['Объект A, B, C', 'Бюджет / Факт', 'Причины видны сразу'] },
    ],
  },
];

function ExampleDiagram({ diagram }: { diagram: typeof examples[0]['diagram'] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {diagram.map((col, i) => (
        <div
          key={col.label}
          className={`rounded-xl p-4 ${
            i === 1 ? 'process-card-indigo' : 'card-surface'
          }`}
        >
          <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
            i === 1 ? 'label-indigo' : 'text-ink-low'
          }`}>
            {col.label}
          </p>
          <div className="flex flex-col gap-2">
            {col.items.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className={`w-1 h-1 rounded-full flex-shrink-0 ${i === 1 ? 'bg-indigo-400' : 'bg-ink-ghost'}`} />
                <p className={`text-xs ${i === 1 ? 'text-indigo-800' : 'text-ink-mid'}`}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ExamplesPage() {
  return (
    <div className="bg-canvas pt-16">
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="label-indigo mb-4">Практика</p>
            <h1 className="text-4xl sm:text-5xl font-serif text-ink max-w-xl leading-tight mb-6">
              Примеры задач
            </h1>
            <p className="text-ink-mid text-lg max-w-lg leading-relaxed">
              Реальные ситуации из практики. Без приукрашенных цифр — только суть проблемы и что изменилось.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {examples.map((ex, i) => (
            <FadeUp key={ex.id} delay={i * 0.1}>
              <article className="bg-canvas rounded-3xl border border-border shadow-card overflow-hidden hover:shadow-card-md hover:border-indigo-100 transition-all duration-300">
                <div className="px-8 py-5 border-b border-border flex items-center justify-between bg-surface">
                  <span className="label-indigo">{ex.industry}</span>
                  <span className="text-ink-low text-xs">Кейс {String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-6">
                    {[
                      { key: 'Ситуация', val: ex.situation },
                      { key: 'Что мешало управлению', val: ex.problem },
                      { key: 'Что было выстроено', val: ex.rebuilt },
                      { key: 'Как изменилось управление', val: ex.result },
                    ].map(({ key, val }) => (
                      <div key={key}>
                        <p className="text-ink-low text-xs font-medium uppercase tracking-wider mb-2">{key}</p>
                        <p className="text-ink-mid text-sm leading-relaxed">{val}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-ink-low text-xs font-medium uppercase tracking-wider mb-4">Схема изменений</p>
                    <ExampleDiagram diagram={ex.diagram} />
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-dark">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-2xl font-serif text-white mb-4">Похожая ситуация?</h2>
            <p className="text-slate-400 text-sm mb-7 leading-relaxed">
              Расскажите о своем бизнесе — обсудим, что можно сделать.
            </p>
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
    </div>
  );
}
