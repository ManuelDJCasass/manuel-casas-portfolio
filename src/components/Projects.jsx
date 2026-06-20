import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'ENOE Data Warehouse & Power BI Dashboard',
    category: 'Data Analytics & Business Intelligence',
    description:
      'Designed a data workflow to process ENOE datasets, transform information through ETL processes, and build Power BI dashboards to analyze employment indicators, unemployment, informality, and trends across different time periods.',
    tools: ['SQL', 'ETL', 'Data Warehouse', 'Power BI', 'Data Modeling'],
    image: '/images/enoe-dashboard.png',
    repository: '#',
    demo: '#',
  },
  {
    title: 'Operational Data Monitoring System – Water Treatment Plant',
    category: 'Data Visualization & Web Reporting',
    description:
      'Developed a web-based solution to capture, store, monitor, and visualize operational data from a water treatment plant, including data structuring, dashboard creation, and performance comparison.',
    tools: ['SQL', 'Dashboards', 'Data Capture', 'Web Reporting'],
    image: '/images/water-treatment-dashboard.png',
    repository: '#',
    demo: '#',
  },
  {
    title: 'Spring Boot REST API Project',
    category: 'Backend Development',
    description:
      'Built a backend API using Java, Spring Boot, Maven, and MySQL, including database modeling, REST endpoints, testing with Postman, and API documentation.',
    tools: ['Java', 'Spring Boot', 'Maven', 'MySQL', 'REST API'],
    image: '/images/spring-api.png',
    repository: '#',
    demo: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section__eyebrow">Projects</p>
        <h2>Selected technical projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects