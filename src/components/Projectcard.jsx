function ProjectCard({ project }) {
  const hasRepository = project.repository && project.repository !== '#'
  const hasDemo = project.demo && project.demo !== '#'

  return (
    <article className="project-card">
      <div className="project-card__visual">
        <span>{project.category}</span>
      </div>

      <div className="project-card__content">
        <p className="project-card__category">{project.category}</p>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card__tags">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <div className="project-card__links">
          {hasRepository ? (
            <a href={project.repository} target="_blank" rel="noreferrer">
              Repository
            </a>
          ) : (
            <span>Repository pending</span>
          )}

          {hasDemo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          ) : (
            <span>Demo pending</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
