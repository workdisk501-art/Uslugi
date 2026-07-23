import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="text-ink font-semibold text-sm mb-2">
              МУ<span className="text-ink-ghost mx-px">·</span>Система
            </div>
            <p className="text-ink-mid text-sm max-w-xs leading-relaxed">
              Управленческий учет, который помогает принимать решения.
            </p>
          </div>

          <nav className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-ink-low text-xs font-medium uppercase tracking-wider mb-1">Навигация</span>
              {[
                { path: '/', label: 'Главная' },
                { path: '/how-i-work', label: 'Как работаю' },
                { path: '/tasks', label: 'Задачи' },
              ].map(({ path, label }) => (
                <NavLink key={path} to={path} className="text-ink-mid text-sm hover:text-indigo-600 transition-colors">
                  {label}
                </NavLink>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-ink-low text-xs font-medium uppercase tracking-wider mb-1">Ещё</span>
              {[
                { path: '/examples', label: 'Примеры' },
                { path: '/about', label: 'Обо мне' },
                { path: '/contact', label: 'Контакт' },
              ].map(({ path, label }) => (
                <NavLink key={path} to={path} className="text-ink-mid text-sm hover:text-indigo-600 transition-colors">
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ink-low text-xs">© 2024. Все права защищены.</p>
          <a href="mailto:hello@example.com" className="text-ink-low text-xs hover:text-indigo-600 transition-colors">
            hello@example.com
          </a>
        </div>
      </div>
    </footer>
  );
}
