import { useState } from 'react';
import type { Project } from '../../data/projects';

interface Props { project: Project; }

export function ProjectCard({ project }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`project-card-wrap${flipped ? ' flipped' : ''}`}
      onClick={() => setFlipped(f => !f)}
      onMouseLeave={() => setFlipped(false)}
      role="button"
      tabIndex={0}
      aria-label={`${project.title} — click to see details`}
      onKeyDown={e => e.key === 'Enter' && setFlipped(f => !f)}
    >
      <div className="project-card-inner">

        {/* FRONT */}
        <div
          className="project-card-front"
          style={{ background: project.gradient }}
        >
          <span className="flip-hint">hover / tap ↻</span>
          <div>
            <div className="card-icon">{project.icon}</div>
            <div className="card-title" style={{ color: '#fff' }}>{project.title}</div>
            <div className="card-tags">
              {project.tags.slice(0, 4).map(t => (
                <span key={t} className="card-tag">{t}</span>
              ))}
              {project.tags.length > 4 && (
                <span className="card-tag">+{project.tags.length - 4}</span>
              )}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="project-card-back">
          <div>
            <div className="back-title">{project.title}</div>
            <p className="back-desc">{project.description}</p>
          </div>
          <div className="back-actions" onClick={e => e.stopPropagation()}>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="back-btn back-btn-outline"
              >
                <span>⌥</span> GitHub
              </a>
            ) : (
              <span className="back-btn back-btn-disabled">Private Repo</span>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="back-btn back-btn-primary"
              >
                <span>↗</span> Live
              </a>
            ) : (
              <span className="back-btn back-btn-disabled">Not Deployed</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
