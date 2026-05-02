import { SectionLabel } from '../ui/SectionLabel';

const STATS = [
  { value: '8.23', label: 'CGPA at NIT Patna' },
  { value: '300+', label: 'DSA Problems Solved' },
  { value: '1yr+', label: 'Building Projects' },
  { value: '3yr+', label: 'Coding Experience' },
];

export function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <div className="about-grid">

          {/* Left — photo + stats */}
          <div>
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="about-photo-wrap">
                <div className="about-photo-ring" />
                <div className="about-photo-ring-inner" />
                <img
                  src="/about.jpeg"
                  alt="Hariom Kr"
                  className="about-photo"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="about-stats reveal" data-delay="100">
              {STATS.map(s => (
                <div key={s.label} className="stat-card">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div className="about-text">
            <SectionLabel index="01" text="about_me" />
            <h2 className="section-heading">
              Crafting code that <span>matters</span>
            </h2>

            <p className="reveal" data-delay="50">
              I'm a passionate Computer Science student at{' '}
              <strong>NIT Patna (2023–27)</strong>, with a deep love for building
              scalable systems and solving complex problems. Currently maintaining a CGPA of{' '}
              <strong>8.23</strong>.
            </p>

            <p className="reveal" data-delay="100">
              My journey started with competitive programming on <strong>LeetCode</strong>,{' '}
              <strong>Codeforces</strong>, and <strong>CodeChef</strong>. That foundation of
              algorithmic thinking led me naturally into full-stack development, where I
              co-founded <strong>E-Info.me</strong> — a digital identity platform built for
              developers and professionals.
            </p>

            <p className="reveal" data-delay="150">
              I'm proficient in <strong>Node.js, React</strong>, and a broad backend stack
              including <strong>Docker, GraphQL, Redis,</strong> and <strong>AWS</strong>. Always
              eager to contribute to open source, build something meaningful, and share
              what I learn through technical writing.
            </p>

            <div className="about-actions reveal" data-delay="200">
              <a
                href="https://drive.google.com/file/d/1f_S7XF6MiDPQoD3BeVSVvuJxJQw_BCwE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Resume ↗
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
