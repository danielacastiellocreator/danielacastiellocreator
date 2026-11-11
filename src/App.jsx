import { useEffect, useState } from 'react'
import './App.css'

const categories = ['All', 'Beauty', 'Tech', 'Design', 'Lifestyle']
const emailAddress = 'danielacastiello.creator@gmail.com'

const videoProjects = [
  {
    category: 'Beauty',
    title: { it: 'Un rituale tutto mio', en: 'A ritual of my own' },
    type: { it: 'Routine · Skincare', en: 'Routine · Skincare' },
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Prodotti skincare disposti su un piano chiaro',
      en: 'Skincare products arranged on a light surface',
    },
  },
  {
    category: 'Beauty',
    title: { it: 'La mia pelle, senza filtri', en: 'My skin, no filter' },
    type: { it: 'Review · Beauty', en: 'Review · Beauty' },
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Prodotto di skincare in una composizione naturale',
      en: 'Skincare product in a natural composition',
    },
  },
  {
    category: 'Tech',
    title: { it: 'Tecnologia, ogni giorno', en: 'Technology, every day' },
    type: { it: 'Demo prodotto · Tech', en: 'Product demo · Tech' },
    image:
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Smartphone e accessori tecnologici su una scrivania',
      en: 'Smartphone and tech accessories on a desk',
    },
  },
  {
    category: 'Tech',
    title: { it: 'Una funzione che semplifica', en: 'A feature that makes life easier' },
    type: { it: 'Tutorial · App', en: 'Tutorial · App' },
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Smartphone con applicazioni sullo schermo',
      en: 'Smartphone displaying apps on screen',
    },
  },
  {
    category: 'Design',
    title: { it: 'Il piacere dei dettagli', en: 'The beauty of details' },
    type: { it: 'Storia di prodotto · Design', en: 'Product story · Design' },
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Oggetti di design e una pianta su un tavolo',
      en: 'Design objects and a plant on a table',
    },
  },
  {
    category: 'Design',
    title: { it: 'Un angolo da riscoprire', en: 'A corner to rediscover' },
    type: { it: 'Home styling · Design', en: 'Home styling · Design' },
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Interno accogliente arredato con colori naturali',
      en: 'Cosy interior styled in natural colours',
    },
  },
  {
    category: 'Lifestyle',
    title: { it: 'Piccole pause, ogni giorno', en: 'Little moments, every day' },
    type: { it: 'Storytelling · Quotidianità', en: 'Storytelling · Everyday life' },
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Caffè e tazza su un tavolo luminoso',
      en: 'Coffee and a cup on a sunlit table',
    },
  },
  {
    category: 'Lifestyle',
    title: { it: 'Un momento tutto per me', en: 'A moment just for me' },
    type: { it: 'Daily routine · Lifestyle', en: 'Daily routine · Lifestyle' },
    image:
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Momento di relax in un ambiente luminoso',
      en: 'A relaxing moment in a bright space',
    },
  },
]

const imageProjects = [
  {
    category: 'Beauty',
    title: { it: 'Essenziale, ogni giorno', en: 'Everyday essentials' },
    type: { it: 'Fotografia prodotto · Beauty', en: 'Product photography · Beauty' },
    image:
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Prodotti beauty in una composizione luminosa',
      en: 'Beauty products in a bright composition',
    },
  },
  {
    category: 'Beauty',
    title: { it: 'Un momento per me', en: 'A moment for myself' },
    type: { it: 'Lifestyle · Skincare', en: 'Lifestyle · Skincare' },
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Selezione di prodotti skincare e make-up',
      en: 'Selection of skincare and make-up products',
    },
  },
  {
    category: 'Tech',
    title: { it: 'Forma e funzione', en: 'Form and function' },
    type: { it: 'Fotografia prodotto · Tech', en: 'Product photography · Tech' },
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Orologio dal design essenziale fotografato da vicino',
      en: 'Close-up of a minimal watch design',
    },
  },
  {
    category: 'Tech',
    title: { it: 'Sulla mia scrivania', en: 'On my desk' },
    type: { it: 'Lifestyle · Tech', en: 'Lifestyle · Tech' },
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Computer portatile su una scrivania luminosa',
      en: 'Laptop on a bright desk',
    },
  },
  {
    category: 'Design',
    title: { it: 'Luce, linee, materiali', en: 'Light, lines, materials' },
    type: { it: 'Interni · Design', en: 'Interior · Design' },
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Soggiorno contemporaneo dalle tonalità neutre',
      en: 'Contemporary living room in neutral tones',
    },
  },
  {
    category: 'Design',
    title: { it: 'Oggetti con carattere', en: 'Objects with character' },
    type: { it: 'Fotografia prodotto · Design', en: 'Product photography · Design' },
    image:
      'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Complementi di arredo dal design essenziale',
      en: 'Minimalist home accessories',
    },
  },
  {
    category: 'Lifestyle',
    title: { it: 'Piccoli piaceri', en: 'Little pleasures' },
    type: { it: 'Lifestyle · Quotidianità', en: 'Lifestyle · Everyday life' },
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Tazze di caffè fotografate dall’alto',
      en: 'Coffee cups photographed from above',
    },
  },
  {
    category: 'Lifestyle',
    title: { it: 'Il bello di sentirsi a casa', en: 'The comfort of home' },
    type: { it: 'Casa · Lifestyle', en: 'Home · Lifestyle' },
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85',
    alt: {
      it: 'Interno accogliente arredato con colori naturali',
      en: 'Cosy interior styled in natural colours',
    },
  },
]

const copy = {
  it: {
    navLabel: 'Navigazione principale',
    portfolio: 'Portfolio',
    pricing: 'Pricing',
    about: 'Chi sono',
    contact: 'Contatti',
    language: 'Lingua',
    homeLabel: 'Daniela, torna all’inizio',
    heroEyebrow: 'UGC CREATOR · ITALIA',
    heroTitle: 'Ciao, sono Daniela.',
    heroTitleEmphasis: 'Design, UX e storytelling.',
    heroDescription: [
      { text: 'Sono ' },
      { text: 'laureata in Design', strong: true },
      { text: ' e UX designer. Oggi lavoro come ' },
      { text: 'sviluppatrice web', strong: true },
      { text: ' in una società di consulenza.' },
    ],
    heroHook: [
      { text: 'Il mio punto di forza? Unire ' },
      { text: 'approccio UX', strong: true },
      { text: ' e ' },
      { text: 'storytelling', strong: true },
      {
        text: ': creo una storia attorno al prodotto, partendo da ciò che conta per le persone.',
      },
    ],
    heroTopics: 'BEAUTY · TECH · DESIGN · LIFESTYLE',
    portraitAlt: 'Ritratto luminoso di una creator',
    workEyebrow: 'UNA SELEZIONE DI IDEE',
    workTitle: 'Contenuti per ogni storia',
    workDescription:
      'Video e immagini pensati per raccontare i brand con stile, personalità e attenzione ai dettagli.',
    videoTitle: 'Video',
    videoDescription: 'Reel, product demo e storie in movimento.',
    imageTitle: 'Immagini',
    imageDescription: 'Scatti di prodotto e lifestyle.',
    filterLabel: 'Filtra per argomento',
    categories: {
      All: 'Tutti',
      Beauty: 'Beauty',
      Tech: 'Tech',
      Design: 'Design',
      Lifestyle: 'Lifestyle',
    },
    demoNote: 'Anteprime di esempio · da sostituire con i tuoi contenuti.',
    formatVideo: 'Video',
    formatImages: 'Immagini',
    aboutEyebrow: 'UN PO’ DI ME',
    aboutTitle: 'Belle immagini,',
    aboutTitleEmphasis: 'parole vere.',
    aboutDescription:
      'Sono Daniela. Mi piace trovare il dettaglio che rende un prodotto parte della vita di tutti i giorni. Progetto e realizzo contenuti UGC semplici, riconoscibili e pronti per i canali social del tuo brand.',
    servicesLabel: 'Temi e contenuti',
    serviceVideo: 'Video',
    servicePhotography: 'Fotografia',
    pricingEyebrow: 'MODI DI COLLABORARE',
    pricingTitle: 'Pricing',
    pricingDescription:
      'Ogni progetto è diverso. Raccontami la tua idea e preparerò una proposta su misura.',
    pricingOptions: [
      {
        title: 'Video UGC',
        description: 'Un video verticale, ideato per raccontare il tuo prodotto.',
        details: ['Concept e riprese', 'Montaggio e sottotitoli'],
        subject: 'Preventivo · Video UGC',
      },
      {
        title: 'Bundle video',
        description: 'Più video e angolazioni creative per la tua campagna.',
        details: ['Concept coordinati', 'Varianti creative'],
        subject: 'Preventivo · Bundle video',
      },
      {
        title: 'Pack immagini',
        description: 'Una selezione di scatti curati per raccontare il tuo brand.',
        details: ['Foto prodotto e lifestyle', 'Formati per i social'],
        subject: 'Preventivo · Pack immagini',
      },
    ],
    pricesOnRequest: 'Prezzi su richiesta',
    contactEyebrow: 'IL PROSSIMO PROGETTO',
    contactTitle: 'Raccontiamo',
    contactTitleEmphasis: 'il tuo brand.',
    contactDescription:
      'Hai un prodotto o un’idea da raccontare? Scrivimi: sarò felice di parlarne con te.',
    socialLabel: 'Seguimi sui social',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    emailLabel: 'Scrivi a Daniela',
    footerText: 'Creator indipendente · Italia',
    footerSocialLabel: 'Contatti social',
  },
  en: {
    navLabel: 'Main navigation',
    portfolio: 'Portfolio',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    language: 'Language',
    homeLabel: 'Daniela, back to top',
    heroEyebrow: 'UGC CREATOR · ITALY',
    heroTitle: 'Hi, I’m Daniela.',
    heroTitleEmphasis: 'Design, UX & storytelling.',
    heroDescription: [
      { text: 'I have a ' },
      { text: 'degree in Design', strong: true },
      { text: ' and work as a UX designer. I currently work as a ' },
      { text: 'web developer', strong: true },
      { text: ' at a consulting firm.' },
    ],
    heroHook: [
      { text: 'My strength? Combining a ' },
      { text: 'UX mindset', strong: true },
      { text: ' with ' },
      { text: 'storytelling', strong: true },
      {
        text: ': I build a story around each product, starting with what matters to people.',
      },
    ],
    heroTopics: 'BEAUTY · TECH · DESIGN · LIFESTYLE',
    portraitAlt: 'Bright portrait of a content creator',
    workEyebrow: 'A SELECTION OF IDEAS',
    workTitle: 'Content for every story',
    workDescription:
      'Videos and imagery made to tell brand stories with style, personality and attention to detail.',
    videoTitle: 'Video',
    videoDescription: 'Reels, product demos and stories in motion.',
    imageTitle: 'Photography',
    imageDescription: 'Product and lifestyle photography.',
    filterLabel: 'Filter by topic',
    categories: {
      All: 'All',
      Beauty: 'Beauty',
      Tech: 'Tech',
      Design: 'Design',
      Lifestyle: 'Lifestyle',
    },
    demoNote: 'Sample previews · replace with your own work.',
    formatVideo: 'Video',
    formatImages: 'Photography',
    aboutEyebrow: 'A LITTLE ABOUT ME',
    aboutTitle: 'Beautiful imagery,',
    aboutTitleEmphasis: 'honest stories.',
    aboutDescription:
      'I’m Daniela. I love finding the detail that makes a product feel part of everyday life. I create simple, recognisable UGC content, ready for your brand’s social channels.',
    servicesLabel: 'Topics and formats',
    serviceVideo: 'Video',
    servicePhotography: 'Photography',
    pricingEyebrow: 'WAYS TO WORK TOGETHER',
    pricingTitle: 'Pricing',
    pricingDescription:
      'Every project is different. Tell me about your idea and I’ll put together a tailored proposal.',
    pricingOptions: [
      {
        title: 'UGC video',
        description: 'A vertical video designed to tell your product story.',
        details: ['Creative concept and filming', 'Editing and captions'],
        subject: 'Enquiry · UGC video',
      },
      {
        title: 'Video bundle',
        description: 'Multiple videos and creative angles for your campaign.',
        details: ['Coordinated concepts', 'Creative variations'],
        subject: 'Enquiry · Video bundle',
      },
      {
        title: 'Photography pack',
        description: 'A curated set of images to tell your brand story.',
        details: ['Product and lifestyle photos', 'Social-ready formats'],
        subject: 'Enquiry · Photography pack',
      },
    ],
    pricesOnRequest: 'Rates on request',
    contactEyebrow: 'YOUR NEXT PROJECT',
    contactTitle: 'Let’s tell',
    contactTitleEmphasis: 'your story.',
    contactDescription:
      'Have a product or an idea to share? Get in touch — I’d love to hear about it.',
    socialLabel: 'Follow me',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    emailLabel: 'Email Daniela',
    footerText: 'Independent creator · Italy',
    footerSocialLabel: 'Social links',
  },
}

function SocialIcon({ name }) {
  if (name === 'Instagram') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.2" />
        <circle cx="12" cy="12" r="4.1" />
        <circle className="social-icon-dot" cx="17.7" cy="6.6" r="1" />
      </svg>
    )
  }

  if (name === 'TikTok') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.2 3.2v11.2a4.4 4.4 0 1 1-3.8-4.35" />
        <path d="M14.2 3.2c.35 2.58 1.85 4.2 4.6 4.55" />
      </svg>
    )
  }

  return (
    <svg className="social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function RichText({ segments }) {
  return segments.map((segment, index) =>
    segment.strong ? (
      <strong key={index}>{segment.text}</strong>
    ) : (
      <span key={index}>{segment.text}</span>
    ),
  )
}

function GallerySection({
  projects,
  activeCategory,
  setActiveCategory,
  language,
  title,
  description,
  formatLabel,
  filterLabel,
  demoNote,
  categoryLabels,
  indexOffset = 0,
}) {
  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="gallery-section" aria-label={title}>
      <div className="gallery-heading">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <span className="gallery-count">
          {String(visibleProjects.length).padStart(2, '0')}
        </span>
      </div>
      <div className="category-tabs" role="group" aria-label={filterLabel}>
        {categories.map((category) => {
          const count =
            category === 'All'
              ? projects.length
              : projects.filter((project) => project.category === category)
                  .length

          return (
            <button
              className="category-tab"
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category]}
              <span>{count}</span>
            </button>
          )
        })}
      </div>
      <p className="portfolio-note">{demoNote}</p>
      <div className="project-grid" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <article className="project-card" key={project.title[language]}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.alt[language]}
                loading="lazy"
              />
              <span className="project-number">
                {String(indexOffset + index + 1).padStart(2, '0')}
              </span>
              <span className="project-category">{categoryLabels[project.category]}</span>
              <span className="project-format">{formatLabel}</span>
            </div>
            <div className="project-meta">
              <div>
                <p className="eyebrow">{project.type[language]}</p>
                <h4>{project.title[language]}</h4>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [language, setLanguage] = useState('it')
  const [videoCategory, setVideoCategory] = useState('All')
  const [imageCategory, setImageCategory] = useState('All')
  const t = copy[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title =
      language === 'it' ? 'Daniela — UGC Creator' : 'Daniela — UGC Creator'
  }, [language])

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={t.homeLabel}>
          DANIELA CASTIELLO
        </a>
        <nav className="main-nav" aria-label={t.navLabel}>
          <a href="#portfolio">{t.portfolio}</a>
          <a href="#pricing">{t.pricing}</a>
          <a href="#about">{t.about}</a>
          <a href="#contact">{t.contact} <span aria-hidden="true">↗</span></a>
          <div className="language-switch" role="group" aria-label={t.language}>
            <button
              type="button"
              lang="it"
              aria-pressed={language === 'it'}
              onClick={() => setLanguage('it')}
            >
              IT
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              lang="en"
              aria-pressed={language === 'en'}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>
              {t.heroTitle}
              <br />
              <em>{t.heroTitleEmphasis}</em>
            </h1>
            <p className="hero-description">
              <RichText segments={t.heroDescription} />
            </p>
            <p className="hero-hook">
              <RichText segments={t.heroHook} />
            </p>
          </div>

          <div className="hero-visual">
            <img
              src="/images/daniela-castiello.jpg"
              alt={t.portraitAlt}
              fetchPriority="high"
            />
            <p className="hero-note">{t.heroTopics}</p>
          </div>
        </section>

        <section className="work-section section-wrap" id="portfolio">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.workEyebrow}</p>
              <h2>{t.workTitle}<span>.</span></h2>
            </div>
            <p>{t.workDescription}</p>
          </div>

          <GallerySection
            projects={videoProjects}
            activeCategory={videoCategory}
            setActiveCategory={setVideoCategory}
            language={language}
            title={t.videoTitle}
            description={t.videoDescription}
            formatLabel={t.formatVideo}
            filterLabel={t.filterLabel}
            demoNote={t.demoNote}
            categoryLabels={t.categories}
          />

          <GallerySection
            projects={imageProjects}
            activeCategory={imageCategory}
            setActiveCategory={setImageCategory}
            language={language}
            title={t.imageTitle}
            description={t.imageDescription}
            formatLabel={t.formatImages}
            filterLabel={t.filterLabel}
            demoNote={t.demoNote}
            categoryLabels={t.categories}
            indexOffset={videoProjects.length}
          />
        </section>

        <section className="about-section" id="about">
          <div className="about-inner section-wrap">
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <div className="about-content">
              <h2>
                {t.aboutTitle}
                <br />
                <em>{t.aboutTitleEmphasis}</em>
              </h2>
              <div className="about-note">
                <p>{t.aboutDescription}</p>
                <div className="service-list" aria-label={t.servicesLabel}>
                  <span>Beauty</span>
                  <span>Tech</span>
                  <span>Design</span>
                  <span>Lifestyle</span>
                  <span>{t.serviceVideo}</span>
                  <span>{t.servicePhotography}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section section-wrap" id="pricing">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.pricingEyebrow}</p>
              <h2>{t.pricingTitle}<span>.</span></h2>
            </div>
            <p>{t.pricingDescription}</p>
          </div>

          <div className="pricing-grid">
            {t.pricingOptions.map((option, index) => (
              <article
                className={`pricing-card${index === 1 ? ' pricing-card--featured' : ''}`}
                key={option.title}
              >
                <p className="pricing-number">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3>{option.title}</h3>
                <p className="pricing-description">{option.description}</p>
                <ul>
                  {option.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <a
                  className="pricing-link"
                  href={`mailto:${emailAddress}?subject=${encodeURIComponent(option.subject)}`}
                >
                  {t.pricesOnRequest} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">{t.contactEyebrow}</p>
          <div className="contact-content">
            <h2>
              {t.contactTitle}
              <br />
              <em>{t.contactTitleEmphasis}</em>
            </h2>
            <div className="contact-action">
              <p>{t.contactDescription}</p>
              <a
                className="contact-link"
                href={`mailto:${emailAddress}`}
                aria-label={t.emailLabel}
              >
                <SocialIcon name="Email" />
                {emailAddress}
              </a>
              <div className="social-links" aria-label={t.socialLabel}>
                <a
                  className="social-link"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <SocialIcon name="Instagram" />
                  <span>Instagram</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="social-link"
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                >
                  <SocialIcon name="TikTok" />
                  <span>TikTok</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home" aria-label={t.homeLabel}>
          DANIELA CASTIELLO
        </a>
        <p>{t.footerText} · © {new Date().getFullYear()}</p>
        <div className="footer-socials" aria-label={t.footerSocialLabel}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <SocialIcon name="Instagram" />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <SocialIcon name="TikTok" />
          </a>
          <a href={`mailto:${emailAddress}`} aria-label={t.emailLabel}>
            <SocialIcon name="Email" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
