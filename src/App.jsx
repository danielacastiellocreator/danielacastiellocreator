import { useEffect, useState } from 'react'
import './App.css'

const categories = ['All', 'Beauty', 'Tech', 'Design', 'Lifestyle']
const emailAddress = 'danielacastiello.creator@gmail.com'
const trustedBrands = [
  { name: 'Rare Beauty', logo: '/images/rare-beauty.png' },
  // Replace placeholders with { name, logo } as brand logos arrive.
  { name: 'Logo 02', placeholder: true },
  { name: 'Logo 03', placeholder: true },
  { name: 'Logo 04', placeholder: true },
  { name: 'Logo 05', placeholder: true },
  { name: 'Logo 06', placeholder: true },
  { name: 'Logo 07', placeholder: true },
  { name: 'Logo 08', placeholder: true },
  { name: 'Logo 09', placeholder: true },
  { name: 'Logo 10', placeholder: true },
]
// Add reviews as { quote: { it, en }, author, role: { it, en }, brand }.
const clientReviews = []

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
]

const imageProjects = [
  {
    category: 'Beauty',
    title: { it: 'Texture e luce', en: 'Texture and light' },
    type: { it: 'Fotografia prodotto · Beauty', en: 'Product photography · Beauty' },
    image: '/images/beauty-serum-texture.jpeg',
    alt: {
      it: 'Siero alla vitamina C con la sua texture applicata sulla mano',
      en: 'Vitamin C serum with its texture swatched on a hand',
    },
  },
  {
    category: 'Beauty',
    title: { it: 'La routine skincare', en: 'The skincare routine' },
    type: { it: 'Lifestyle · Skincare', en: 'Lifestyle · Skincare' },
    image: '/images/beauty-skincare-routine.jpeg',
    alt: {
      it: 'Prodotti skincare e accessori beauty su una pochette rosa',
      en: 'Skincare products and beauty accessories on a pink pouch',
    },
  },
  {
    category: 'Beauty',
    title: { it: 'Un tocco di luce', en: 'A touch of glow' },
    type: { it: 'Fotografia prodotto · Beauty', en: 'Product photography · Beauty' },
    image: '/images/beauty-rare-beauty-glow.jpeg',
    alt: {
      it: 'Prodotti illuminanti Rare Beauty disposti su un tessuto dorato',
      en: 'Rare Beauty highlighter products arranged on golden fabric',
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
    heroGreeting: 'Ciao, sono',
    heroName: 'Daniela.',
    heroSubtitle: 'UGC CREATOR | Napoli, Italia',
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
    trustedEyebrow: 'BRAND E COLLABORAZIONI',
    trustedTitle: 'Trusted by',
    logoPlaceholder: 'Segnaposto',
    reviewsEyebrow: 'PARLANO LE PERSONE',
    reviewsTitle: 'Reviews',
    aboutEyebrow: 'Perchè scegliermi?',
    aboutTitle: 'Belle immagini,',
    aboutTitleEmphasis: 'parole vere.',
    aboutDescription: [
      [
        { text: 'Il mio percorso nasce dal ' },
        { text: 'Design', strong: true },
        { text: ' e si sviluppa attraverso la ' },
        { text: 'User Experience', strong: true },
        { text: ' e la comunicazione digitale. Dopo una laurea triennale in ' },
        { text: 'Design e Comunicazione', strong: true },
        { text: ' e una magistrale in ' },
        { text: 'Digital Design', strong: true },
        { text: ', entrambe arricchite da un percorso di specializzazione in ' },
        { text: 'UX Design', strong: true },
        { text: ' presso la ' },
        { text: 'Apple Developer Academy', strong: true },
        { text: ' di Napoli, in partnership con l\'Università Federico II e Apple, ho imparato a guardare ogni progetto dalla prospettiva dell\'utente.' },
      ],
      [
        { text: 'Questo approccio è ciò che porto anche nel mondo UGC: non creo semplicemente contenuti, ma esperienze visive e comunicative pensate per catturare l\'attenzione, trasmettere il valore di un brand e creare una connessione autentica con il pubblico.' },
        { text: '\n\nIl mio background da designer mi permette di unire creatività e strategia, con una particolare attenzione ai dettagli, alla qualità visiva e alla chiarezza del messaggio. Ogni contenuto nasce con un obiettivo preciso: ' },
        { text: 'comunicare nel modo giusto', strong: true },
        { text: ', ' },
        { text: 'arrivare al pubblico e valorizzare il prodotto', strong: true },
        { text: '.' },
      ],
    ],
    pricingEyebrow: 'MODI DI COLLABORARE',
    pricingTitle: 'Pricing',
    pricingDescription:
      'Ogni progetto è diverso. Raccontami la tua idea e ti preparo una proposta su misura, pensata per i tuoi contenuti, la tua voce e la tua strategia di comunicazione.',
    pricingOptions: [
      {
        title: 'Video UGC',
        description:
          'Un video verticale pensato per raccontare il tuo prodotto in modo autentico e coinvolgente.',
        details: [
          '1 concept creativo',
          'Script',
          '1 hook + 1 CTA',
          'Riprese + montaggio',
          'Sottotitoli + B-roll',
          '1 revisione',
        ],
        price: 'da €150',
      },
      {
        title: 'Bundle video',
        description:
          'Più contenuti, più angolazioni creative, per costruire una campagna completa.',
        details: [
          '3 video verticali',
          '3 concept/angolazioni creative',
          '1 hook per video',
          'Script',
          'Riprese + montaggio',
          'Sottotitoli + B-roll',
          '1 revisione per video',
        ],
        price: 'da €350',
      },
      {
        title: 'Immagini',
        description:
          'Una selezione di contenuti fotografici curati per raccontare il tuo prodotto e il tuo brand.',
        details: [
          'Foto prodotto + lifestyle',
          'Scatto + editing',
          'Formato ottimizzato per social',
          'Utilizzabile per sito e social',
        ],
        price: 'da €30',
        priceDetails: '1 immagine €30 · 3 immagini €75 · 5 immagini €110',
      },
    ],
    pricingNote:
      'Ogni progetto è diverso. I prezzi indicati sono a partire da e possono variare in base a contenuti, quantità e diritti di utilizzo. Raccontami il tuo progetto e preparerò una proposta su misura.',
    contactEyebrow: 'IL PROSSIMO PROGETTO',
    contactTitle: 'Raccontiamo',
    contactTitleEmphasis: 'il tuo brand.',
    contactDescription:
      'Hai un prodotto o un’idea da raccontare? Scrivimi: sarò felice di parlarne con te.',
    socialLabel: 'Seguimi sui social',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    emailLabel: 'Scrivi a Daniela',
    footerText: 'DANIELA CASTIELLO · Italia',
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
    heroGreeting: 'Hi, I’m',
    heroName: 'Daniela.',
    heroSubtitle: 'UGC CREATOR | Naples, Italy',
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
    trustedEyebrow: 'BRANDS & COLLABORATIONS',
    trustedTitle: 'Trusted by',
    logoPlaceholder: 'Placeholder',
    reviewsEyebrow: 'KIND WORDS',
    reviewsTitle: 'Reviews',
    aboutEyebrow: 'A LITTLE ABOUT ME',
    aboutTitle: 'Beautiful imagery,',
    aboutTitleEmphasis: 'honest stories.',
    aboutDescription: [
      [
        { text: 'My path began in ' },
        { text: 'Design', strong: true },
        { text: ', and developed through ' },
        { text: 'User Experience', strong: true },
        { text: ' and digital communication. After a three-year degree in ' },
        { text: 'Design and Communication', strong: true },
        { text: ' and a master’s in ' },
        { text: 'Digital Design', strong: true },
        { text: ', both enriched by a UX Design specialisation at the ' },
        { text: 'Apple Developer Academy', strong: true },
        { text: ' in Naples, I learned to approach every project from the user’s point of view.' },
      ],
      [
        { text: 'This is the same mindset I bring to UGC: I don’t just create content, I design visual and communicative experiences that capture attention, communicate brand value and build authentic connections with the audience.' },
        { text: '\n\nMy background as a designer allows me to combine creativity and strategy, with a strong focus on detail, visual quality and clarity of message. Every content piece has a clear purpose: ' },
        { text: 'communicate in the right way', strong: true },
        { text: ', ' },
        { text: 'reach the audience and create value', strong: true },
        { text: '.' },
      ],
    ],
    pricingEyebrow: 'WAYS TO WORK TOGETHER',
    pricingTitle: 'Pricing',
    pricingDescription:
      'Every project is different. Tell me about your idea and I’ll prepare a tailored proposal around your content, your voice and your communication strategy.',
    pricingOptions: [
      {
        title: 'UGC video',
        description:
          'A vertical video designed to tell your product story in an authentic and engaging way.',
        details: [
          '1 creative concept',
          'Script',
          '1 hook + 1 CTA',
          'Filming + editing',
          'Captions + B-roll',
          '1 revision',
        ],
        price: 'from €150',
      },
      {
        title: 'Video bundle',
        description:
          'More content and creative angles to build a complete campaign.',
        details: [
          '3 vertical videos',
          '3 creative concepts/angles',
          '1 hook per video',
          'Script',
          'Filming + editing',
          'Captions + B-roll',
          '1 revision per video',
        ],
        price: 'from €350',
      },
      {
        title: 'Images',
        description:
          'A curated selection of photographs to tell your product and brand story.',
        details: [
          'Product + lifestyle photography',
          'Shoot + editing',
          'Social-ready format',
          'For web and social use',
        ],
        price: 'from €30',
        priceDetails: '1 image €30 · 3 images €75 · 5 images €110',
      },
    ],
    pricingNote:
      'Every project is different. Prices are starting rates and may vary depending on content, quantity and usage rights. Tell me about your project and I’ll prepare a tailored proposal.',
    contactEyebrow: 'YOUR NEXT PROJECT',
    contactTitle: 'Let’s tell',
    contactTitleEmphasis: 'your story.',
    contactDescription:
      'Have a product or an idea to share? Get in touch — I’d love to hear about it.',
    socialLabel: 'Follow me',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    emailLabel: 'Email Daniela',
    footerText: 'DANIELA CASTIELLO · Italy',
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

function RichTextParagraphs({ paragraphs }) {
  return (
    <div className="about-copy">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          <RichText segments={paragraph} />
        </p>
      ))}
    </div>
  )
}

function GallerySection({
  projects,
  activeCategory,
  setActiveCategory,
  language,
  title,
  description,
  filterLabel,
  categoryLabels,
}) {
  const visibleCategories = categories.filter(
    (category) =>
      category === 'All' ||
      projects.some((project) => project.category === category),
  )
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
      </div>
      <div className="category-tabs" role="group" aria-label={filterLabel}>
        {visibleCategories.map((category) => (
          <button
            className="category-tab"
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.title[language]}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.alt[language]}
                loading="lazy"
              />
              <span className="project-category">{categoryLabels[project.category]}</span>
            </div>
            <div className="project-meta">
              <div>
                <p className="eyebrow">{project.type[language]}</p>
                <h4>{project.title[language]}</h4>
              </div>
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
            <h1>
              {t.heroGreeting} <span className="hero-name">{t.heroName}</span>
              <br />
              <span className="hero-subtitle">{t.heroSubtitle}</span>
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
              src="/images/daniela-castiello-cutout.png"
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
            filterLabel={t.filterLabel}
            categoryLabels={t.categories}
          />

          <GallerySection
            projects={imageProjects}
            activeCategory={imageCategory}
            setActiveCategory={setImageCategory}
            language={language}
            title={t.imageTitle}
            description={t.imageDescription}
            filterLabel={t.filterLabel}
            categoryLabels={t.categories}
          />
        </section>

        <section className="trusted-section section-wrap" aria-labelledby="trusted-title">
          <div className="trusted-heading">
            <div>
              <p className="eyebrow">{t.trustedEyebrow}</p>
              <h2 id="trusted-title">{t.trustedTitle}<span>.</span></h2>
            </div>
          </div>
          {trustedBrands.length > 0 && (
            <ul className="brand-list">
              {trustedBrands.map((brand) => (
                <li
                  className={brand.placeholder ? 'brand-placeholder' : ''}
                  key={brand.name}
                >
                  {brand.logo ? (
                    <img src={brand.logo} alt={brand.name} loading="lazy" />
                  ) : (
                    <span aria-label={`${t.logoPlaceholder} ${brand.name}`}>
                      {brand.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
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
                {Array.isArray(t.aboutDescription)
                  ? <RichTextParagraphs paragraphs={t.aboutDescription} />
                  : <p>{t.aboutDescription}</p>}
              </div>
            </div>
          </div>
        </section>

        {clientReviews.length > 0 && (
          <section className="reviews-section section-wrap" aria-labelledby="reviews-title">
            <div className="reviews-heading">
              <p className="eyebrow">{t.reviewsEyebrow}</p>
              <h2 id="reviews-title">{t.reviewsTitle}<span>.</span></h2>
            </div>
            <div className="reviews-grid">
              {clientReviews.map((review) => (
                <figure className="review-card" key={`${review.author}-${review.brand}`}>
                  <blockquote>“{review.quote[language]}”</blockquote>
                  <figcaption>
                    <strong>{review.author}</strong>
                    <span>{review.role[language]} · {review.brand}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="pricing-section section-wrap" id="pricing">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.pricingEyebrow}</p>
              <h2>{t.pricingTitle}<span>.</span></h2>
            </div>
            <p>
              {Array.isArray(t.pricingDescription)
                ? <RichText segments={t.pricingDescription} />
                : t.pricingDescription}
            </p>
          </div>

          <div className="pricing-grid">
            {t.pricingOptions.map((option, index) => (
              <article
                className="pricing-card"
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
                <p className="pricing-price">{option.price}</p>
                {option.priceDetails && (
                  <p className="pricing-price-details">
                    <strong>{option.priceDetails}</strong>
                  </p>
                )}
              </article>
            ))}
          </div>
          <p className="pricing-note">{t.pricingNote}</p>
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
                  href="https://www.instagram.com/danielacastiello_/"
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
                  href="https://www.tiktok.com/@danielacastiello_"
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
            href="https://www.instagram.com/danielacastiello_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <SocialIcon name="Instagram" />
          </a>
          <a
            href="https://www.tiktok.com/@danielacastiello_"
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
