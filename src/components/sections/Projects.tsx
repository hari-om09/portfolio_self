import { useState } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

type Filter = 'all' | 'web';

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-inner">
        <SectionLabel index="03" text="featured_work" />
        <h2 className="section-heading">
          Things I've <span>built</span>
        </h2>
        <p className="section-sub">
          A selection of projects spanning full-stack apps, APIs, and developer tools.
          Hover (or tap) a card to flip it and see details.
        </p>

        <div className="projects-filter reveal">
          {(['all', 'web'] as Filter[]).map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : 'Web'}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project, i) => (
            <div key={project.id} className="reveal" data-delay={`${i * 80}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
