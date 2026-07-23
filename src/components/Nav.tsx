import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/how-i-work', label: 'Как работаю' },
  { path: '/tasks', label: 'Задачи' },
  { path: '/examples', label: 'Примеры' },
  { path: '/about', label: 'Обо мне' },
  { path: '/contact', label: 'Контакт' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-border shadow-[0_1px_16px_rgba(15,23,42,0.06)]'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-ink font-semibold text-sm tracking-tight hover:text-indigo-600 transition-colors duration-200"
        >
          МУ<span className="text-ink-ghost mx-px">·</span>Система
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm transition-all duration-200 ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50 font-medium'
                    : 'text-ink-mid hover:text-ink hover:bg-surface'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl font-medium btn-primary"
        >
          Обсудить задачу
        </NavLink>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-ink-mid hover:text-ink transition-colors"
          aria-label="Меню"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/95 backdrop-blur-xl border-b border-border`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'text-indigo-600 bg-indigo-50 font-medium'
                    : 'text-ink-mid hover:text-ink hover:bg-surface'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="mt-2 btn-primary text-sm px-4 py-2.5 rounded-xl text-center font-medium"
          >
            Обсудить задачу
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
