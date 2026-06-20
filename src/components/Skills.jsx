const skillGroups = [
  {
    title: 'Data Analytics & Business Intelligence',
    skills: [
      'Power BI',
      'Excel',
      'Dashboards',
      'KPI Tracking',
      'Reporting',
      'Business Insights',
      'Data Visualization',
    ],
  },
  {
    title: 'Databases & Data Processing',
    skills: [
      'SQL',
      'OLTP',
      'ETL/ELT',
      'Data Cleaning',
      'Data Validation',
      'Data Parsing',
      'Relational Databases',
    ],
  },
  {
    title: 'Software Development',
    skills: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'React',
      'HTML',
      'PHP',
      'Swift',
      'REST APIs',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'GitHub',
      'Postman',
      'Swagger',
      'Maven',
      'VS Code',
      'Power Query',
      'MySQL',
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section__eyebrow">Skills</p>
        <h2>Core technical skills</h2>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skills__card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills