const contactLinks = {
  email:
    'mailto:mdjcasasm02@gmail.com?subject=Portfolio%20Contact%20-%20Manuel%20Casas%20Morales',
  linkedin:
    'https://www.linkedin.com/in/manuel-de-jes%C3%BAs-casas-morales-154044218',
  github: 'https://github.com/ManuelDJCasass',
  cv: `${import.meta.env.BASE_URL}CV_Manuel_deJesus_Casas_Morales.pdf`,
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__content">
        <p className="section__eyebrow">Contact</p>

        <h2>Let’s connect</h2>

        <p>
          I am open to internship, trainee, and entry-level opportunities in
          data analytics, business intelligence, databases, and software
          development.
        </p>

        <div className="contact__links">
          <a
            href={contactLinks.email}
            aria-label="Send email to Manuel Casas Morales"
          >
            mdjcasasm02@gmail.com
          </a>

          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Manuel Casas Morales LinkedIn profile"
          >
            LinkedIn
          </a>

          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Manuel Casas Morales GitHub profile"
          >
            GitHub
          </a>

          <a
            href={contactLinks.cv}
            download
            aria-label="Download Manuel Casas Morales CV"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact