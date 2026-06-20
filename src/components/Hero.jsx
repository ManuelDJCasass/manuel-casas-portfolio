function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__content">
        <p className="hero__eyebrow">Portfolio</p>

        <h1>Hi, I’m Manuel Casas Morales.</h1>

        <h2>
          Applied Mathematics and Computing Student | Data Analytics, Business
          Intelligence & Software Development
        </h2>

        <p className="hero__description">
          I work with structured data, dashboards, KPI tracking, SQL queries,
          ETL/ELT processes, and web technologies to transform information into
          useful insights and build efficient digital solutions.
        </p>

        <div className="hero__buttons">
          <a href="#projects" className="button button--primary">
            View Projects
          </a>
          <a href="/manuel-casas-cv.pdf" className="button button--secondary">
            Download CV
          </a>
          <a href="#contact" className="button button--ghost">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero