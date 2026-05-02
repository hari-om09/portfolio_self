import { useState } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { experienceItems, educationItems } from '../../data/experience';
import type { TimelineItem } from '../../data/experience';

type Tab = 'experience' | 'education';

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div key={item.id} className="timeline-item reveal" data-delay={`${i * 100}`}>
          <div className="timeline-dot" />
          <div className="timeline-card">
            <p className="timeline-period">{item.period}</p>
            <h3 className="timeline-role">{item.role}</h3>
            <p className="timeline-org">{item.org}</p>
            <div className="timeline-highlights">
              {item.highlights.map(h => (
                <span key={h} className="timeline-highlight">{h}</span>
              ))}
            </div>
            <div className="timeline-tags">
              {item.tags.map(t => (
                <span key={t} className="timeline-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  const [tab, setTab] = useState<Tab>('experience');

  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <SectionLabel index="04" text="journey" />
        <h2 className="section-heading">
          Experience &amp; <span>Education</span>
        </h2>
        <p className="section-sub">
          My path through competitive programming, product building, and academia.
        </p>

        <div className="exp-tabs reveal">
          <button
            className={`exp-tab${tab === 'experience' ? ' active' : ''}`}
            onClick={() => setTab('experience')}
          >
            Experience
          </button>
          <button
            className={`exp-tab${tab === 'education' ? ' active' : ''}`}
            onClick={() => setTab('education')}
          >
            Education
          </button>
        </div>

        {tab === 'experience'
          ? <Timeline items={experienceItems} />
          : <Timeline items={educationItems} />
        }
      </div>
    </section>
  );
}
