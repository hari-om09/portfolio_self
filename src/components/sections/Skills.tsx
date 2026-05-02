import { useState } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { skillCategories } from '../../data/skills';

export function Skills() {
  const [activeTab, setActiveTab] = useState('languages');
  const category = skillCategories.find(c => c.id === activeTab)!;

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <SectionLabel index="02" text="tech_stack" />
        <h2 className="section-heading">
          Tools I <span>build with</span>
        </h2>
        <p className="section-sub">
          A broad stack spanning languages, frontend, backend, databases, and cloud infrastructure.
        </p>

        <div className="skills-tabs reveal">
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`skill-tab${activeTab === cat.id ? ' active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid reveal" data-delay="80" key={activeTab}>
          {category.skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-chip"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span>{skill.icon}</span>
              <span className="prompt">&gt;</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
