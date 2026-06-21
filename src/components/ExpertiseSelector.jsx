import { useState } from 'react'

const expertiseAreas = [
  {
    id: 'data',
    label: 'Data',
    title: 'Data Analytics',
    icon: 'DA',
    description:
      'I work with structured data to identify patterns, validate information, and transform datasets into useful insights for decision-making.',
    tools: ['Excel', 'SQL', 'Data Cleaning', 'Data Validation', 'Reporting'],
  },
  {
    id: 'bi',
    label: 'BI',
    title: 'Business Intelligence',
    icon: 'BI',
    description:
      'I build dashboards and reports focused on KPI tracking, business insights, visualization, and clear communication of analytical results.',
    tools: ['Power BI', 'Dashboards', 'KPI Tracking', 'Power Query', 'Visualization'],
  },
  {
    id: 'databases',
    label: 'Databases',
    title: 'Databases & ETL',
    icon: 'DB',
    description:
      'I design and work with relational databases, ETL/ELT workflows, data parsing, and validation processes for structured information systems.',
    tools: ['SQL', 'MySQL', 'OLTP', 'ETL/ELT', 'Relational Databases'],
  },
  {
    id: 'software',
    label: 'Software',
    title: 'Software Development',
    icon: 'DEV',
    description:
      'I develop web and backend solutions using modern programming tools, component-based interfaces, REST APIs, and database-connected applications.',
    tools: ['Java', 'Spring Boot', 'React', 'JavaScript', 'REST APIs'],
  },
]

function ExpertiseSelector() {
  const [activeArea, setActiveArea] = useState(expertiseAreas[0])

  return (
    <section id="expertise" className="expertise">
      <div className="container expertise__container">
        <div className="section-header">
          <p className="section__eyebrow">Expertise</p>
          <h2>A technical profile built across data, BI, databases and software.</h2>
          <p>
            My work combines analytical thinking with practical development
            skills to transform information into useful digital solutions.
          </p>
        </div>

        <div className="expertise__layout">
          <div className="expertise__tiles" aria-label="Expertise areas">
            {expertiseAreas.map((area) => (
              <button
                type="button"
                key={area.id}
                className={`expertise-tile ${
                  activeArea.id === area.id ? 'expertise-tile--active' : ''
                }`}
                onClick={() => setActiveArea(area)}
              >
                <span className="expertise-tile__icon">{area.icon}</span>
                <span className="expertise-tile__label">{area.label}</span>
              </button>
            ))}
          </div>

          <article className="expertise-panel">
            <p className="expertise-panel__number">
              0{expertiseAreas.findIndex((area) => area.id === activeArea.id) + 1}
            </p>

            <h3>{activeArea.title}</h3>

            <p>{activeArea.description}</p>

            <div className="expertise-panel__tools">
              {activeArea.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSelector