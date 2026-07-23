import { useState, FormEvent } from 'react';
import { Send, MessageCircle, Mail, ChevronDown } from 'lucide-react';
import { FadeUp } from '../components/animations';

const faqs = [
  { q: 'Можно начать с одной задачи?', a: 'Да. Часто работа начинается с конкретной задачи — например, настроить отчёт по прибыли или автоматизировать один отчёт. По мере работы видно, что нужно дальше.' },
  { q: 'Работаете полностью удалённо?', a: 'Да, работаю полностью удалённо. Для работы нужен доступ к данным и регулярные звонки. Географических ограничений нет.' },
  { q: 'Работаете с существующими таблицами?', a: 'Да. Начинаю с анализа того, что уже есть. Часто это Excel или Google Sheets, иногда 1С, iiko или другие системы.' },
  { q: 'Какие программы используете?', a: 'Чаще всего Google Sheets и Excel. Если нужно, работаю с 1С, Power BI, Looker Studio. Выбор инструмента зависит от задачи.' },
  { q: 'Сколько обычно длится работа?', a: 'Зависит от объёма задачи. Небольшой проект — от нескольких недель. Построение системы учёта — от двух до шести месяцев.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
      >
        <span className="text-ink text-sm font-medium group-hover:text-indigo-700 transition-colors duration-200">{q}</span>
        <ChevronDown
          size={16}
          className={`text-ink-low flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-indigo-600' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-ink-mid text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

type FormStatus = 'idle' | 'sending' | 'sent';

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({ name: '', company: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  };

  return (
    <div className="bg-canvas pt-16">
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="label-indigo mb-4">Контакт</p>
            <h1 className="text-4xl sm:text-5xl font-serif text-ink max-w-xl leading-tight mb-6">
              Обсудим вашу задачу
            </h1>
            <p className="text-ink-mid text-lg max-w-lg leading-relaxed">
              Если хотите понять, почему система учёта перестала успевать за ростом бизнеса — давайте обсудим.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <FadeUp>
                {status === 'sent' ? (
                  <div className="bg-indigo-50 rounded-3xl p-10 text-center border border-indigo-100">
                    <div className="w-12 h-12 bg-indigo-100 border border-indigo-200 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Send size={18} className="text-indigo-600" />
                    </div>
                    <h3 className="text-ink font-serif text-xl mb-2">Сообщение отправлено</h3>
                    <p className="text-ink-mid text-sm">Отвечу в течение одного рабочего дня.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-ink-mid text-xs font-medium mb-1.5">Ваше имя</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Иван"
                          className="w-full bg-white border border-border rounded-xl px-4 py-3 text-ink text-sm placeholder-ink-ghost
                            focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-ink-mid text-xs font-medium mb-1.5">Компания</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="ООО Ромашка"
                          className="w-full bg-white border border-border rounded-xl px-4 py-3 text-ink text-sm placeholder-ink-ghost
                            focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-ink-mid text-xs font-medium mb-1.5">Ваша задача или вопрос</label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Опишите, что сейчас не устраивает в управленческом учёте..."
                        rows={5}
                        className="w-full bg-white border border-border rounded-xl px-4 py-3 text-ink text-sm placeholder-ink-ghost
                          focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold btn-primary disabled:opacity-50 self-start"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>Отправить сообщение <Send size={14} /></>
                      )}
                    </button>
                  </form>
                )}
              </FadeUp>
            </div>

            <div className="md:col-span-2">
              <FadeUp delay={0.15}>
                <div className="flex flex-col gap-4">
                  <p className="text-ink-low text-xs font-medium uppercase tracking-wider">Написать напрямую</p>
                  {[
                    { href: 'https://t.me/example', Icon: MessageCircle, label: 'Telegram', sub: '@example' },
                    { href: 'mailto:hello@example.com', Icon: Mail, label: 'Email', sub: 'hello@example.com' },
                  ].map(({ href, Icon, label, sub }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 card rounded-2xl hover:shadow-card-md hover:border-indigo-100 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                        <Icon size={18} className="text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-ink text-sm font-medium">{label}</p>
                        <p className="text-ink-low text-xs">{sub}</p>
                      </div>
                    </a>
                  ))}
                  <div className="mt-2 card-surface rounded-2xl p-5">
                    <p className="text-ink text-sm font-medium mb-1">Время ответа</p>
                    <p className="text-ink-mid text-xs leading-relaxed">Отвечаю в течение одного рабочего дня. Чаще быстрее.</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="label-indigo mb-3">Вопросы</p>
            <h2 className="text-3xl font-serif text-ink mb-10">Часто спрашивают</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="card rounded-2xl px-6">
              {faqs.map((faq) => <FaqItem key={faq.q} {...faq} />)}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
