function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a href="#home" className="navbar__logo">
          Manuel Casas
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar