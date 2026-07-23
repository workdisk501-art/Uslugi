import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeUp } from '../components/animations';

const stages = [
  {
    n: '01',
    title: 'Погружение',
    goal: 'Понять бизнес и его управленческие вопросы',
    what: 'Изучаю, как устроен бизнес, какие решения принимает собственник и что мешает их принимать быстро. Провожу интервью с командой.',
    result: 'Четкое понимание задачи и ожидаемого результата.',
  },
  {
    n: '02',
    title: 'Проверка логики данных',
    goal: 'Разобраться с тем, что уже есть',
    what: 'Анализирую текущие таблицы, системы, отчеты. Нахожу дубли, противоречия, пробелы.',
    result: 'Диагностика текущего состояния с конкретными выводами.',
  },
  {
    n: '03',
    title: 'Проектирование структуры',
    goal: 'Создать архитектуру системы учета',
    what: 'Разрабатываю план счетов, модель данных, логику отчетности. Всё — под конкретные управленческие вопросы.',
    result: 'Документ со структурой системы, согласованный с командой.',
  },
  {
    n: '04',
    title: 'Автоматизация',
    goal: 'Сделать систему рабочей',
    what: 'Настраиваю сбор данных, формулы, связи между источниками. Автоматизирую расчеты и формирование отчетов.',
    result: 'Работающая система, которая не требует ручного труда каждый раз.',
  },
  {
    n: '05',
    title: 'Развитие системы',
    goal: 'Поддержка роста и изменений',
    what: 'По мере роста бизнеса добавляю новые аналитики, направления, показатели. Обучаю команду.',
    result: 'Система, которая растет вместе с бизнесом.',
  },
];

export default function HowIWorkPage() {
  return (
    <div className="bg-canvas pt-16">
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="label-indigo mb-4">Процесс</p>
            <h1 className="text-4xl sm:text-5xl font-serif text-ink max-w-xl leading-tight mb-6">
              Как проходит работа
            </h1>
            <p className="text-ink-mid text-lg max-w-lg leading-relaxed">
              Каждый проект начинается с понимания бизнеса, а не с выбора инструментов. Инструмент — последнее.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            <div className="flex flex-col gap-0">
              {stages.map((stage, i) => (
                <FadeUp key={stage.n} delay={i * 0.1}>
                  <div className="relative pl-16 pb-14 last:pb-0 group">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center z-10
                      group-hover:border-indigo-300 group-hover:bg-indigo-50 transition-all duration-300">
                      <span className="text-ink-mid text-xs font-semibold group-hover:text-indigo-600 transition-colors duration-300">
                        {stage.n}
                      </span>
                    </div>
                    <div className="card rounded-2xl p-7 hover:shadow-card-md hover:border-indigo-100 transition-all duration-300">
                      <h3 className="text-ink font-semibold text-lg mb-5">{stage.title}</h3>
                      <div className="grid sm:grid-cols-3 gap-5">
                        <div>
                          <p className="label-indigo mb-2">Цель</p>
                          <p className="text-ink-mid text-sm leading-relaxed">{stage.goal}</p>
                        </div>
                        <div>
                          <p className="label-indigo mb-2">Что происходит</p>
                          <p className="text-ink-mid text-sm leading-relaxed">{stage.what}</p>
                        </div>
                        <div>
                          <p className="label-indigo mb-2">Результат</p>
                          <p className="text-ink-mid text-sm leading-relaxed">{stage.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-dark">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-2xl font-serif text-white mb-4">
              Хотите обсудить, подходит ли такой формат для вашей задачи?
            </h2>
            <p className="text-slate-400 text-sm mb-7 leading-relaxed">
              Первый разговор — это не продажа. Это понимание, есть ли смысл работать вместе.
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
