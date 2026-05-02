import { TypeWriter } from '../ui/TypeWriter';
import { ThreeDScene } from '../ui/ThreeDScene';

const SOCIALS = [
  { label: 'GitHub',    href: 'https://github.com/hari-om09',                         icon: '⌥' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/hariomkumar918/',          icon: 'in' },
  { label: 'LeetCode',  href: 'https://leetcode.com/u/Om_904/',                       icon: '{ }' },
  { label: 'Email',     href: 'mailto:hariomkumar2262006@gmail.com',                  icon: '✉' },
  { label: 'Instagram', href: 'https://www.instagram.com/slayy_om09/',                icon: '◎' },
];

export function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Ambient background gradient */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(99,102,241,.08) 0%, transparent 70%), radial-gradient(ellipse 60% 60% at 30% 60%, rgba(6,182,212,.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="hero">
        {/* Left — text content */}
        <div className="hero-content">
          <p className="hero-greeting">Hi there, I'm</p>

          <h1 className="hero-name">Hariom Kr</h1>

          <div className="hero-typewriter">
            <TypeWriter />
          </div>

          <p className="hero-bio">
            <strong>CS Undergrad at NIT Patna</strong> (2023–27) · Aspiring SWE with{' '}
            <strong>1+ year</strong> building scalable projects. Passionate about clean code,
            problem-solving, and open source. Co-founded{' '}
            <strong>E-Info.me</strong> — a digital identity platform for developers.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={e => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1f_S7XF6MiDPQoD3BeVSVvuJxJQw_BCwE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download CV ↓
            </a>
          </div>

          <div className="hero-socials">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={s.label}
                title={s.label}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{s.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Three.js canvas */}
        <div className="hero-canvas-wrap" style={{ position: 'relative' }}>
          <ThreeDScene />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" aria-hidden>
        <div className="mouse"><div className="wheel" /></div>
        <span>scroll</span>
      </div>
    </section>
  );
}
