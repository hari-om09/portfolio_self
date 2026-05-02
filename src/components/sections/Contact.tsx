import { useState, type FormEvent } from 'react';
import { SectionLabel } from '../ui/SectionLabel';

const SOCIALS = [
  { label: 'GitHub',    href: 'https://github.com/hari-om09',                         icon: '⌥' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/hariomkumar918/',          icon: 'in' },
  { label: 'LeetCode',  href: 'https://leetcode.com/u/Om_904/',                       icon: '{ }' },
  { label: 'Instagram', href: 'https://www.instagram.com/slayy_om09/',                icon: '◎' },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://formspree.io/f/xgowgalr', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <SectionLabel index="05" text="get_in_touch" />
        <h2 className="section-heading">
          Let's <span>connect</span>
        </h2>
        <p className="section-sub">
          Open to SWE internships, collaborations, or just a chat about tech.
        </p>

        <div className="contact-grid">

          {/* Left — info */}
          <div>
            <div className="contact-info-cards reveal">
              <div className="contact-info-card">
                <div className="contact-icon">✉</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">hariomkumar2262006@gmail.com</div>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">Patna, India</div>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon">✅</div>
                <div>
                  <div className="contact-info-label">Status</div>
                  <div className="contact-info-value">Open to opportunities</div>
                </div>
              </div>
            </div>

            <p className="contact-socials-title reveal" data-delay="80">Find me on</p>
            <div className="contact-socials reveal" data-delay="120">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" data-delay="60">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-name">Name</label>
                  <input id="cf-name" name="name" type="text" className="form-input" placeholder="Hariom Kr" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-email">Email</label>
                  <input id="cf-email" name="email" type="email" className="form-input" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cf-subject">Subject</label>
                <input id="cf-subject" name="subject" type="text" className="form-input" placeholder="Let's build something together" required />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="cf-message">Message</label>
                <textarea id="cf-message" name="message" className="form-textarea" placeholder="Tell me about your project or opportunity..." required />
              </div>

              {status === 'success' && (
                <p className="form-status success">Message sent! I'll reply within 24 hours.</p>
              )}
              {status === 'error' && (
                <p className="form-status error">Something went wrong. Email me directly instead.</p>
              )}

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
