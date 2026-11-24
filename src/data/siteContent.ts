const sectionIds = {
  services: 'servizi',
  projects: 'progetti',
  about: 'chi-sono',
  contact: 'contatti',
} as const;

const contactHref = `#${sectionIds.contact}`;
const projectsHref = `#${sectionIds.projects}`;
const webServiceTags = ['Siti vetrina', 'Booking', 'Pagamenti', 'Area admin'] as const;
const companyDescription = 'Siti web e automazioni per PMI. Integrazioni con gestionali, CRM e programmi che usi già.';
const labels = {
  services: 'Servizi',
  projects: 'Progetti',
  about: 'Chi sono',
  contact: 'Contatti',
  automations: 'Automazioni',
  talk: 'Parliamone',
  submit: 'Invia email',
} as const;

const brand = {
  name: 'NATH.DEV',
  tagline: 'Sviluppo Web, Automazioni & Servizi IT',
  logoUrl: '/logo-nobg.png',
  fontStylesheetUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  fontPreconnectUrls: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
} as const;

const pages = {
  sviluppoWeb: {
    percorso: '/sviluppo-web',
    etichettaMenu: 'Sviluppo web',
    titoloSeo: 'Realizzazione siti web a Padova | NATH.DEV',
    descrizioneSeo: 'Siti web per professionisti e piccole imprese di Padova e provincia. Strategia, testi, design, sviluppo e supporto.',
    hero: {
      titolo: 'Siti web a Padova',
      sottotitolo: 'Un sito che funziona non è una spesa. Lavora per te ogni giorno.',
      testo: "Seguo professionisti e piccole imprese di Padova e provincia. Una persona sola, dall'inizio alla fine.",
      cta: 'Scopri cosa è incluso',
    },
    incluso: {
      titolo: 'Cosa è incluso in ogni sito web',
      testo: 'Creo siti web, sicuri e veloci. Lavoro con professionisti e piccole imprese di Padova e provincia, e da remoto in tutta Italia.',
      voci: [
        { titolo: 'Web copywriting', descrizione: 'Scrivo io i testi del sito, allineati al tuo brand e ottimizzati per Google.' },
        { titolo: 'Design con revisioni', descrizione: 'Nessun template generico: il sito è progettato attorno alla tua identità visiva.' },
        { titolo: 'Ottimizzato per mobile', descrizione: 'Visibile correttamente su ogni dispositivo: smartphone, tablet, computer.' },
        { titolo: 'Veloce e sicuro', descrizione: 'Ottimizzato per caricarsi rapidamente, protetto da SSL.' },
        { titolo: 'Dominio e hosting', descrizione: 'Dominio e hosting configurati, la parte tecnica è inclusa.' },
        { titolo: 'SEO di base', descrizione: 'Farti trovare su Google da chi cerca a Padova e provincia.' },
      ],
    },
    tecnologie: {
      titolo: 'Tecnologie',
      elementi: ['WordPress', 'Elementor', 'SiteGround', 'Site Kit by Google', 'Yoast SEO', 'Wordfence', 'Porkbun'],
    },
    testimonianze: {
      titolo: 'Testimonianze',
      voci: [
        { nome: 'ergerdg', citazione: 'rwegrew' },
        { nome: 'ergre', citazione: 'fhdsiufhsd' },
      ],
    },
  processo: {
      titolo: 'Come lavoro in 6 fasi',
      testo: 'Ogni fase ha un tempo definito. Il tuo coinvolgimento è di circa 4 ore in tutto.',
      fasi: [
        { numero: '01', titolo: 'Scoperta', durata: '30 min', descrizione: 'Ci conosciamo. Ti faccio domande sul tuo business, sui tuoi clienti e sui tuoi obiettivi. Ti spiego come lavoro e cosa ricevi. Poi ti propongo un preventivo.' },
        { numero: '02', titolo: 'Strategia', durata: '2 ore, incluse nel progetto', descrizione: 'Dopo la firma del contratto analizzo concorrenti, storia e brand. Definiamo posizionamento, tono di voce e strategia SEO. Da qui partono tutti i testi e le pagine.' },
        { numero: '03', titolo: 'Sviluppo', durata: '2 round di revisioni', descrizione: 'Raccolgo i materiali grafici e scrivo i testi. Quando l\'homepage è pronta te la mando: la approvi, poi procedo con le altre pagine.' },
        { numero: '04', titolo: 'Pubblicazione', durata: 'Il sito è online', descrizione: 'Rivedi il sito completo e chiedi le ultime modifiche. Configuro dominio, hosting e SSL, poi il sito va online. Ricevi le credenziali e una guida per orientarti.' },
        { numero: '05', titolo: 'Supporto', durata: 'Opzionale', descrizione: 'Aggiornamenti regolari, protezione dagli attacchi esterni, backup automatici. Me ne occupo io, tu non devi sapere nulla di tecnico.' },
      ],
    },

    manutenzione: {
      titolo: 'Manutenzione',
      testo: 'Un sito non aggiornato si rompe. Un plugin vecchio apre una falla, un backup mancante cancella i contenuti, un certificato SSL scaduto blocca il sito su Chrome. La riparazione costa più della manutenzione mensile.',
      piani: [
        { nome: 'Base', prezzo: '€30/mese', alternativa: 'oppure €300/anno · 2 mesi gratuiti', voci: ['Hosting e gestione del dominio', 'Aggiornamenti settimanali di WordPress e plugin', 'Backup giornalieri automatici', 'Monitoraggio uptime 24/7', 'Certificato SSL'] },
        { nome: 'Standard', prezzo: '€60/mese', alternativa: 'oppure €600/anno · 2 mesi gratuiti', voci: ['Tutto il piano Base', '30 min/mese di aggiornamenti contenuti', 'Report mensile sulle performance'] },
        { nome: 'Completo', prezzo: '€80/mese', alternativa: 'oppure €800/anno · 2 mesi gratuiti', voci: ['Tutto il piano Base', '1 ora/mese di aggiornamenti contenuti', 'Report mensile sulle performance', 'Ottimizzazione delle performance', 'Controllo SEO trimestrale'] },
      ],
    },
    altriProgetti: {
      titolo: 'Altri progetti',
      voci: [
        { nome: 'Bija Holistic Growth', descrizione: 'Sito web per insegnante di yoga e ayurveda' },
        { nome: 'Rossella Parenting Coach', descrizione: 'Sito web per consulente genitoriale' },
      ],
    },
  },
} as const;

export const siteContent = {
  language: 'it',
  brand,
  pages,
  seo: {
    title: `${brand.name} — ${brand.tagline}`,
    description: companyDescription,
  },
  assets: {
    heroVideoUrl: '/background-vid.mp4',
    collaborators: [
      { id: 'la-torre', name: 'La Torre', imageUrl: '/latorre.png', alt: 'Logo La Torre' },
      { id: 'freddys-bar', name: "Freddy's Bar", imageUrl: '/freddysbar.png', alt: "Logo Freddy's Bar" },
      { id: 'arena', name: 'Arena', imageUrl: '/arenalogo.png', alt: 'Logo Arena' },
    ],
  },
  sectionIds,
  navigation: {
    label: 'Navigazione principale',
    openMenuLabel: 'Apri il menu di navigazione',
    closeMenuLabel: 'Chiudi il menu di navigazione',
    items: [
      { id: 'services', label: labels.services, href: `#${sectionIds.services}` },
      { id: 'sviluppo-web', label: pages.sviluppoWeb.etichettaMenu, href: pages.sviluppoWeb.percorso },
      { id: 'projects', label: labels.projects, href: projectsHref },
      { id: 'about', label: labels.about, href: `#${sectionIds.about}` },
      { id: 'contact', label: labels.contact, href: contactHref },
    ],
    cta: { label: labels.talk, href: contactHref },
  },
  hero: {
    heading: 'Siti web, automazioni e server per PMI.',
  description: 'Sviluppo web app, siti web e automazioni. Parto dal design, lo costruisco sulle tue esigenze e seguo il progetto fino allo sviluppo e alla gestione. Hai un\'attività e vuoi farti conoscere online? Tu pensi all\'attività, io alla visibilità.',
    primaryAction: { label: labels.talk, href: contactHref },
    secondaryAction: { label: 'Guarda i progetti', href: projectsHref },
  },
  marquee: {
    ariaLabel: 'Clienti e collaborazioni',
  },
  services: {
    title: 'Cosa posso offrirti:',
    hint: 'Clicca sul servizio desiderato per maggiori info.',
    items: [
      {
        id: 'sviluppo-web',
        href: pages.sviluppoWeb.percorso,
        title: 'Sviluppo web',
        subtitle: 'Siti e web app',
        description: 'Realizzo siti per hotel, ristoranti e PMI, con prenotazioni e pagamenti online.',
        imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
        tags: webServiceTags,
        actionLabel: 'Richiedi sviluppo web',
      },
      {
        id: 'integrazioni',
        href: '/integrazioni',
        title: labels.automations,
        subtitle: 'Script e integrazioni',
        description: 'Collego gestionali, email e database con script Python e Node che girano da soli.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        tags: ['API', 'Webhook', 'Report', 'Notifiche'],
        actionLabel: 'Richiedi automazioni',
      },
      {
        id: 'server-reti',
        href: '/server-reti',
        title: 'Server e reti',
        subtitle: 'Linux, backup, monitoraggio',
        description: 'Configuro server Linux con Docker, backup automatici e monitoraggio attivo sui tuoi servizi.',
        imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
        tags: ['Linux', 'Docker', 'Backup', 'Monitoring'],
        actionLabel: 'Richiedi supporto IT',
      },
    ],
  },
  projects: {
    title: 'Progetti online.',
    imagePlaceholder: 'Immagine progetto',
    items: [
      {
        id: 'booking-dashboard',
        title: 'La Torre Residence',
        description: 'Lending page, sistema di prenotazioni dirette, pagamenti online e gestione camere.',
        tags: ['Next.js', 'MongoDB', 'Pagamenti'],
        actionLabel: 'Apri progetto Booking',
        href: "https://latorreresidence.it/",
        imageUrl: '/latorre-mockup.png',
      },
      {
        id: 'pin4canva',
        title: 'Pin4canva',
        description: 'Estensione Chrome per trovare elementi gratuiti per canva e rimuovere il background senza scaricare in memoria.',
        tags: ['Automazione', 'Estensione WEB', 'Canva'],
        actionLabel: 'Apri progetto Sito e menu',
        href: "https://github.com/nath-du/pin4canva",
        imageUrl: '/pinforcanva-mockup.png',
      },

    ],
  },
  about: {
    title: 'Ciao, Sono Nath!',
    mediaPlaceholder: '460 × 440 px',
    paragraphs: [
      'Sono uno sviluppatore web di Padova. Lavoro con attività locali, professionisti e aziende.',
      'Parto da un\'idea disegnata su carta, poi costruisco il design sull\'identità della tua attività. Quando il design ti convince, scrivo il codice del sito e lo metto online.',
    ],

    method: [
      { label: 'Ci conosciamo', description: 'Parliamo della tua attività, di cosa fai e dei risultati che vuoi ottenere.' },
      { label: 'Bozza e design', description: 'Ti mostro come immagino il sito, poi lo costruisco sull\'identità della tua attività.' },
      { label: 'Sviluppo e revisione', description: 'Scrivo il codice, poi lo rivediamo insieme e applico le modifiche che chiedi.' },
      { label: 'Pubblico e ottimizzo', description: 'Metto il sito online e lavoro sulla visibilità su Google per chi cerca nella tua zona.' },
    ],
  },
  contact: {
    title: 'Hai un proggetto in mente? Scrivimi!',
    description: 'Rispondo entro 24 ore con una proposta concreta su tempi e costi.',
    email: 'nathdev10@outlook.com',
    phone: {
      display: '+39 320 936 7311',
      dial: '+393209367311',
    },
    address: 'Padova, Veneto',
    emailLabel: 'Email diretta',
    phoneLabel: 'Telefono / WhatsApp',
    form: {
      name: { id: 'nome', name: 'nome', label: 'Nome o attività', placeholder: 'Gianluca DiMeglio', required: true },
      replyTo: { id: 'recapito', name: 'recapito', label: 'Email o telefono', placeholder: 'esempio@gmail.com', required: true },
      need: {
        id: 'esigenza',
        name: 'esigenza',
        label: 'Di cosa hai bisogno?',
        options: [
          { value: 'web', label: 'Sito web o web app' },
          { value: 'automazione', label: 'Automazione' },
          { value: 'it', label: 'Server e reti' },
          { value: 'mix', label: 'Più cose insieme' },
        ],
      },
      details: { id: 'dettagli', name: 'dettagli', label: 'Messaggio', placeholder: "Due righe sull'obiettivo" },
      submitLabel: labels.submit,
      submitAriaLabel: labels.submit,
      mailSubject: `Richiesta dal sito ${brand.name}`,
    },
  },
  footer: {
    description: companyDescription,
    columns: [
      {
        id: 'services',
        title: labels.services,
        links: [
          { label: pages.sviluppoWeb.etichettaMenu, href: pages.sviluppoWeb.percorso },
          { label: labels.automations, href: `#${sectionIds.services}` },
          { label: 'Manutenzione', href: `#${sectionIds.services}` },
        ],
      },
      {
        id: 'agency',
        title: 'Agenzia',
        links: [
          { label: labels.about, href: `#${sectionIds.about}` },
          { label: labels.projects, href: projectsHref },
          { label: labels.contact, href: contactHref },
        ],
      },
    ],
    contactTitle: labels.contact,
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy-policy.html' },
      { label: 'Cookie Policy', href: '/cookie-policy.html' },
    ],
    copyrightYear: 2026,
    rights: 'Tutti i diritti riservati.',
  },
  socialLinks: [] as Array<{ id: string; label: string; href: string }>,
} as const;

export type SiteContent = typeof siteContent;
