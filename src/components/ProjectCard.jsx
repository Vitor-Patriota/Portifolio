import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-meta">
          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech">{t}</span>
            ))}
          </div>

          <div className="project-links">
            {project.demo && (
              <a href={project.demo} className="link" target="_blank" rel="noreferrer">Demo</a>
            )}
            {project.repo && (
              <a href={project.repo} className="link" target="_blank" rel="noreferrer">Repositório</a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
