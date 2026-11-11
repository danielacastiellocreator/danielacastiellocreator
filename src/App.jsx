import './App.css'

const projects = [
  {
    number: '01',
    category: 'BEAUTY · VIDEO UGC',
    title: 'Rituali che fanno bene',
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1100&q=85',
    alt: 'Prodotti skincare disposti su un piano chiaro',
    className: 'project-image--beauty',
  },
  {
    number: '02',
    category: 'TRAVEL · STORYTELLING',
    title: 'Una fuga tutta da vivere',
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1100&q=85',
    alt: 'Costa mediterranea vista dall’alto',
    className: 'project-image--travel',
  },
  {
    number: '03',
    category: 'LIFESTYLE · REEL',
    title: 'Piccole cose, grande energia',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1100&q=85',
    alt: 'Sneaker rossa su sfondo rosso',
    className: 'project-image--lifestyle',
  },
]

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Daniela, torna all’inizio">
          daniela<span>®</span>
        </a>
        <nav className="main-nav" aria-label="Navigazione principale">
          <a href="#portfolio">Portfolio</a>
          <a href="#about">Chi sono</a>
          <a className="nav-contact" href="#contact">
            Parliamone <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> UGC CREATOR · ITALIA</p>
            <h1>
              Storie vere,
              <br />
              <span>contenuti</span>
              <br />
              che restano.
            </h1>
            <p className="hero-description">
              Creo video e immagini autentiche che avvicinano i brand alle
              persone. Con curiosità, cura e un pizzico di spontaneità.
            </p>
            <a className="button button-dark" href="#portfolio">
              Scopri i miei lavori <span aria-hidden="true">↓</span>
            </a>
            <p className="hero-note">CONTENUTI · REEL · STORYTELLING</p>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=90"
                alt="Ritratto luminoso di una creator"
                fetchPriority="high"
              />
            </div>
            <div className="photo-caption">
              <span>PIACERE, SONO DANIELA</span>
              <span aria-hidden="true">✳</span>
            </div>
            <div className="hero-sticker" aria-label="Creatività fatta con cura">
              <span>CREATIVITÀ</span>
              <span className="sticker-star" aria-hidden="true">✳</span>
              <span>FATTA CON CURA</span>
            </div>
          </div>
        </section>

        <section className="work-section section-wrap" id="portfolio">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / UNA SELEZIONE</p>
              <h2>Il mio portfolio<span>.</span></h2>
            </div>
            <p>
              Idee e contenuti pensati per fermare lo scroll e lasciare il
              segno.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-image ${project.className}`}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="project-meta">
                  <div>
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="meta-star" aria-hidden="true">✳</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner section-wrap">
            <p className="eyebrow">02 / DIETRO LE STORIE</p>
            <div className="about-content">
              <h2>
                Credo nei contenuti
                <br />
                che <em>sembrano</em> una conversazione.
              </h2>
              <div className="about-note">
                <p>
                  Sono Daniela, UGC creator con una passione per le immagini
                  curate e le storie quotidiane. Aiuto i brand a raccontarsi
                  con contenuti naturali, riconoscibili e pronti per i social.
                </p>
                <a className="text-link" href="#contact">
                  Ti racconto come lavoro <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="values-row" aria-label="I miei valori">
              <span>IDEAZIONE</span>
              <span>PRODUZIONE</span>
              <span>EDITING</span>
              <span>CONSEGNA PRONTA PER I SOCIAL</span>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">03 / IL PROSSIMO PROGETTO?</p>
          <div className="contact-content">
            <h2>
              Facciamo
              <br />
              <em>qualcosa</em> di bello.
            </h2>
            <div className="contact-action">
              <p>Hai un’idea in mente? Mi piacerebbe saperne di più.</p>
              <a className="button button-dark" href="mailto:hello@example.com">
                Scrivimi una mail <span aria-hidden="true">↗</span>
              </a>
              <a
                className="social-link"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home">
          daniela<span>®</span>
        </a>
        <p>Fatto con cura, in Italia · © {new Date().getFullYear()} Daniela</p>
        <a href="#home">Torna su ↑</a>
      </footer>
    </>
  )
}

export default App
