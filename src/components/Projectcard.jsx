function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-card__image"
      />

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
          <a href={project.repository} target="_blank" rel="noreferrer">
            Repository
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard