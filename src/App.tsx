import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { Header }  from './components/layout/Header';
import { Footer }  from './components/layout/Footer';
import { Hero }       from './components/sections/Hero';
import { About }      from './components/sections/About';
import { Skills }     from './components/sections/Skills';
import { Projects }   from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact }    from './components/sections/Contact';

import './styles/globals.css';

export default function App() {
  const { theme, toggle } = useTheme();
  useScrollAnimation();

  // Re-run scroll animation observer after tab switches (Skills / Experience)
  useEffect(() => {
    const mo = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) el.classList.add('visible');
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />

      {/* Back to top */}
      <BackToTop />
    </>
  );
}

function BackToTop() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 99,
        width: 44, height: 44, borderRadius: '50%',
        background: 'var(--primary)', color: '#fff',
        border: 'none', cursor: 'pointer', fontSize: '1.1rem',
        boxShadow: '0 4px 20px var(--primary-glow)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      ↑
    </button>
  );
}
