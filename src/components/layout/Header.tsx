import { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

const NAV = [
  { index: '01', label: 'About',      href: '#about'      },
  { index: '02', label: 'Skills',     href: '#skills'     },
  { index: '03', label: 'Projects',   href: '#projects'   },
  { index: '04', label: 'Experience', href: '#experience' },
  { index: '05', label: 'Contact',    href: '#contact'    },
];

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact'];

interface Props { theme: 'dark' | 'light'; onToggleTheme: () => void; }

export function Header({ theme, onToggleTheme }: Props) {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">

          {/* Logo */}
          <a href="#hero" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="logo-badge">Om</div>
            <span>Hariom Kr</span>
          </a>

          {/* Desktop Nav */}
          <nav className="nav" aria-label="Main navigation">
            {NAV.map(item => (
              <button
                key={item.href}
                className={`nav-link${active === item.href.slice(1) ? ' active' : ''}`}
                onClick={() => handleNav(item.href)}
              >
                <span className="mono">{item.index}.</span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(m => !m)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {NAV.map(item => (
          <button
            key={item.href}
            className="mobile-nav-link"
            onClick={() => handleNav(item.href)}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', marginRight: 8 }}>
              {item.index}.
            </span>
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}
