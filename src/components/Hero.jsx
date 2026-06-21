function Hero() {
  return (
    <section id="home" className="hero hero--editorial">
      <div className="container hero__editorial">
        <div className="hero__meta">
          <p>Applied Mathematics and Computing Student</p>
          
        </div>

        <h1 className="hero__statement">
          <span>Manuel de Jesús</span>
          <span>Casas Morales</span>
        </h1>

        <div className="hero__summary">
          <div className="hero__profile-text">
            <p>
              Data Analytics, Business Intelligence & Software Development.
            </p>

            <p>
              I transform structured data into useful insights and build digital
              solutions using SQL, dashboards, KPI tracking, ETL/ELT processes,
              databases and web technologies.
            </p>
          </div>

          <div className="hero__buttons">
            <a href="#projects" className="button button--primary">
              View Projects
            </a>

            <a href="#expertise" className="button button--secondary">
              Explore Skills
            </a>

            <a href="#contact" className="button button--ghost">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero