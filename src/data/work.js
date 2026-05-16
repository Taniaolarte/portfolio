// Source of truth: Notion DB "Projects (Portfolio)"
// Only rows with Choosen = TRUE appear here.
// Rows with Case Study = TRUE become heroes (carousel) AND get the neon star in the gallery.

export const categories = [
  { id: 'cat-motion',  label: '3D AND MOTION',         short: '3D & Motion' },
  { id: 'cat-digital', label: 'DIGITAL ART',           short: 'Digital Art & UX' },
  { id: 'cat-games',   label: 'GAMES AND INTERACTIVE', short: 'Games & Interactive' },
]

export const types = [
  { id: 'all',       label: 'ALL' },
  { id: 'creative',  label: 'CREATIVE' },
  { id: 'corporate', label: 'CORPORATE' },
]

// ──────────────────────────────────────────────────────────
//   CASE STUDIES (heroes + popup content)
// ──────────────────────────────────────────────────────────

const escapeRoomCase = {
  id: 'escape-room-anim',
  layout: 'cinema',
  kind: 'corporate',
  badges: ['ANIMATION', 'CASE STUDY'],
  title: 'Tabletop Game Animation',
  subtitle: 'Client Project · Game Animation',
  description:
    "Animated sequences and in-game motion for a client-commissioned tabletop game — character animation, environmental motion, and transition design.",
  cta: 'View Case Study',
  meta: 'AE · ANIMATION',
  duration: '02:30',
  bgImage: '/portfolio/assets/case-studies/escape-room-anim/poster.jpg',
  bgGradient: 'linear-gradient(135deg,#1a0f3d 0%,#5a4fcf 45%,#382466 100%)',
  overlay: 'dark',
  theme: 'light',
  caseStudy: {
    youtubeUrl: 'https://www.youtube.com/watch?v=gYNbrxm_ZBU&t=3s',
    youtubeStart: 3,
    client: 'Tabletop Game · Client Project',
    year: '2024',
    role: 'Animator · Motion Designer',
    tools: ['After Effects', 'Photoshop', 'Illustrator'],
    tags: ['Animation', 'Character', 'Motion Design', 'Game Art'],
    overview:
      "Animated assets for a tabletop game experience: opening sequence, in-game UI motion, and short character animations used as gameplay prompts. The brief asked for motion that felt cinematic but stayed lightweight enough to loop in-game.",
    credits: [
      { label: 'Year',     value: '2024' },
      { label: 'Client',   value: 'Tabletop Game (Client)' },
      { label: 'Role',     value: 'Animator · Motion Designer' },
      { label: 'Tools',    value: 'After Effects · Photoshop · Illustrator' },
      { label: 'Format',   value: 'Looping WebM' },
    ],
    body:
      "Each scene was scored to the game's pacing — animations needed to read in under two seconds, since players were dipping in and out of the screen between rounds. Looped seamlessly with sub-frame timing so cycles never visibly repeat.",
    chapters: [
      {
        eyebrow: 'Brief',
        title: 'Cinematic but lightweight',
        body:
          "The client needed motion that pulled players into the game's atmosphere within seconds — and short loops for gameplay moments that wouldn't distract from the experience itself.",
      },
      {
        eyebrow: 'Process',
        title: 'Shape rigs + sprite loops',
        body:
          "Storyboarded the opening, animated each character pose in After Effects with shape-layer rigs, then exported lightweight WebM loops for the game's display screens. Final pass scrubbed every loop for sub-frame seams.",
      },
      {
        eyebrow: 'Outcome',
        title: 'Deployed across the experience',
        body:
          "Loops run on infinite cycle without visible repeats. Has been used at every live session since launch.",
      },
    ],
  },
}

const extraCheckpointCase = {
  id: 'extra-checkpoint',
  layout: 'collage',
  kind: 'corporate',
  badge: 'Brand Design · Identity System',
  title: 'XtraCheckpoint',
  client: 'Brand project · 2021',
  description: [
    "Full brand identity for XtraCheckpoint — logo system, illustration set, and a videogame-leaning visual language for a community-driven gaming brand.",
    "The goal was a confident, gameplay-first identity that could carry both an esports tone and a friendly community voice.",
  ],
  tags: [
    { label: 'LOGO',         color: 'purple' },
    { label: 'BRANDING',     color: 'blue'   },
    { label: 'ILLUSTRATION', color: 'orange' },
    { label: 'VIDEOGAMES',   color: 'green'  },
  ],
  cta: 'View Case Study',
  metaTop: 'YEAR : 2021',
  metaSub: 'Brand project',
  bgImage: '/portfolio/assets/case-studies/extra-checkpoint/hero.jpg',
  theme: 'light',
  mockups: [
    { class: 'ph1', label: 'Logo Mark',   img: '/portfolio/assets/case-studies/extra-checkpoint/01.jpg' },
    { class: 'ph2', label: 'App Icon',    img: '/portfolio/assets/case-studies/extra-checkpoint/02.jpg' },
    { class: 'ph3', label: 'Merch',       img: '/portfolio/assets/case-studies/extra-checkpoint/03.jpg' },
    { class: 'lp',  label: 'Brand Sheet', img: '/portfolio/assets/case-studies/extra-checkpoint/04.jpg' },
    { class: 'pt',  label: 'Pattern',     img: '/portfolio/assets/case-studies/extra-checkpoint/05.jpg' },
  ],
  caseStudy: {
    coverImage: '/portfolio/assets/case-studies/extra-checkpoint/hero.jpg',
    behanceProjectId: '131654567',
    gallery: [
      '/portfolio/assets/case-studies/extra-checkpoint/01.jpg',
      '/portfolio/assets/case-studies/extra-checkpoint/02.jpg',
      '/portfolio/assets/case-studies/extra-checkpoint/03.jpg',
      '/portfolio/assets/case-studies/extra-checkpoint/04.jpg',
      '/portfolio/assets/case-studies/extra-checkpoint/05.jpg',
    ],
    client: 'XtraCheckpoint',
    year: '2021',
    role: 'Brand Designer · Illustrator',
    tools: ['Illustrator', 'Photoshop', 'After Effects', 'Procreate'],
    tags: ['Logo', 'Branding', 'Illustration', 'Videogames'],
    overview:
      "A brand identity built around videogame culture: a custom logo mark, a flexible illustration system, and motion-friendly animated assets. The whole system was designed to scale from social posts to event signage.",
    credits: [
      { label: 'Year',   value: '2021' },
      { label: 'Client', value: 'XtraCheckpoint' },
      { label: 'Role',   value: 'Brand Designer · Illustrator' },
      { label: 'Tools',  value: 'Illustrator · Photoshop · AE · Procreate' },
      { label: 'Output', value: 'Logo · Patterns · Illustration · Animation' },
    ],
    awards: [
      { name: 'Behance · Featured Project', year: '2021' },
    ],
    body:
      "The illustration system is the heart of the identity — characters, props, and screen elements all share a vocabulary derived from the logo's pixel geometry. Animated cuts, streaming overlays, and social templates were built on top so the visual rhythm stays consistent everywhere the brand appears.",
    chapters: [
      {
        eyebrow: 'Discovery',
        title: 'A graphic language for gameplay',
        body:
          "Started from a moodboard built around competitive-play vocabulary — checkpoints, savepoints, energy bars — and translated those into a graphic language of hard edges softened by warm colour.",
      },
      {
        eyebrow: 'System',
        title: 'Logo + illustration DNA',
        body:
          "Primary mark + secondary lockup + monogram. A custom illustration library extends the visuals into characters and props that all share one visual DNA, anchored in the logo geometry.",
      },
      {
        eyebrow: 'Outcome',
        title: 'Active across every channel',
        body:
          "Featured on Behance and used across social, streaming overlays, and event collateral. The illustration set remains in active rotation across the brand's content channels.",
      },
    ],
  },
}

const sub40Case = {
  id: 'sub40-brand',
  layout: 'collage',
  kind: 'corporate',
  badge: 'Brand Design · Full Identity',
  title: 'Sub40',
  client: 'Client : Sub40',
  description: [
    "End-to-end visual identity for Sub40 — wordmark, type system, photography direction, packaging, and digital-first brand templates.",
  ],
  tags: [
    { label: 'LOGO',     color: 'purple' },
    { label: 'BRANDING', color: 'blue'   },
    { label: 'PACKAGING',color: 'orange' },
    { label: 'DIGITAL',  color: 'green'  },
  ],
  hideCaseButton: true,
  metaTop: 'CLIENT : SUB40',
  metaSub: 'Full brand identity',
  mockups: [
    { class: 'ph1', label: 'Logo Lockup' },
    { class: 'ph2', label: 'Stationery' },
    { class: 'ph3', label: 'Packaging' },
    { class: 'lp',  label: 'Web Identity' },
    { class: 'pt',  label: 'Pattern' },
  ],
  caseStudy: {
    client: 'Sub40',
    year: '2024',
    role: 'Brand Designer · Art Director',
    tools: ['Illustrator', 'Figma', 'InDesign'],
    tags: ['Logo', 'Branding', 'Packaging', 'Web Identity'],
    overview:
      "Sub40 needed a brand system that could scale from a 32px app glyph to a printed packaging panel without losing personality. The deliverable was an identity manual, a packaging system, and a digital component library.",
    sections: [
      {
        heading: 'Identity',
        body:
          "Custom wordmark anchored by a single bold weight; a complementary geometric monogram for compact contexts. A high-contrast colour scheme paired with a warm secondary range.",
      },
      {
        heading: 'Rollout',
        body:
          "Stationery → packaging → website templates → social kit. Each surface was designed to look like part of the same family without feeling repetitive.",
      },
    ],
  },
}

const naibuCase = {
  id: 'naibu',
  layout: 'cinema',
  kind: 'creative',
  badges: ['GAME DESIGN', 'CASE STUDY', 'UNITY'],
  title: 'NAIBU',
  subtitle: 'Interactive Puzzle Platformer · 2020',
  description:
    "Bachelor thesis 2D puzzle platformer about reconciling with the parts of yourself you try to hide. Earned a Meritorious Thesis (Distinction) with final grade 4.8/5.0.",
  cta: 'View Case Study',
  meta: 'UNITY · C# · ASEPRITE',
  duration: '01:47',
  bgImage: '/portfolio/assets/case-studies/naibu/hero.jpg',
  overlay: 'warm',
  theme: 'light',
  caseStudy: {
    coverImage: '/portfolio/assets/case-studies/naibu/hero.jpg',
    reelUrl: '/portfolio/assets/case-studies/naibu/reel.mp4',
    client: 'Bachelor Thesis · La Sabana University',
    year: '2020',
    role: 'Game Designer · Animator · Programmer',
    tools: ['Unity', 'C#', 'Aseprite', 'Photoshop'],
    tags: ['Game Design', 'Pixel Art', 'Narrative', 'Animation'],
    overview:
      "A 2D puzzle platformer about reconciling with the parts of yourself you try to hide. Each level mirrors a stage of inner conflict; mechanics evolve to reflect the emotional state.",
    credits: [
      { label: 'Year',     value: '2020' },
      { label: 'Client',   value: 'Bachelor Thesis · La Sabana University' },
      { label: 'Role',     value: 'Game Designer · Animator · Programmer' },
      { label: 'Tools',    value: 'Unity · C# · Aseprite · Photoshop' },
      { label: 'Duration', value: '6 months' },
    ],
    awards: [
      { name: 'Meritorious Thesis (Distinction)', year: '2020' },
      { name: 'Final Grade 4.8 / 5.0',            year: '2020' },
      { name: 'MAGI Expo · Selected',             year: '2024' },
      { name: 'Future Forte · Art Showcase',      year: '2025' },
      { name: 'Bunjil Place · Exhibition',        year: '2025' },
    ],
    chapters: [
      {
        eyebrow: 'Concept',
        title: 'Premise',
        body:
          "A child navigates a dreamlike landscape where each level mirrors a stage of inner conflict — from rigid platforming to dual-character cooperation. Each emotional state has its own visual language, palette, and movement rules.",
      },
      {
        eyebrow: 'Process',
        title: 'Design Process',
        body:
          "Paper-prototyped 20+ mechanics, narrowed to 6 that mapped to emotional beats. Pixel-art frames were hand-animated in Aseprite, then implemented as Unity sprite-based state machines. Each puzzle was iterated through 3–5 playtest cycles before being signed off.",
        media: [
          { src: '/portfolio/assets/case-studies/naibu/01.jpg', caption: 'Opening — denial' },
          { src: '/portfolio/assets/case-studies/naibu/02.jpg', caption: 'Mid-game — anger' },
          { src: '/portfolio/assets/case-studies/naibu/03.jpg', caption: 'Late — acceptance' },
        ],
      },
      {
        eyebrow: 'Visual',
        title: 'Colour Strategy',
        body:
          "Each level uses a constrained 6-colour palette that shifts with the emotional state — cool blues for denial, fiery oranges for anger, soft pinks for acceptance. The transitions between levels intentionally avoid hard cuts; palettes blend into each other across the playable space.",
      },
      {
        eyebrow: 'Outcome',
        title: 'Exhibition & Reception',
        body:
          "After the thesis defence, NAIBU was expanded for installation contexts and shown at three exhibitions. Reception focused on how the mechanical changes communicate emotional states without dialogue.",
      },
    ],
    sections: [],
  },
}

const bloomingCase = {
  id: 'blooming',
  layout: 'cinema',
  kind: 'creative',
  badges: ['INTERACTIVE INSTALLATION', 'CASE STUDY'],
  title: 'Blooming',
  subtitle: 'Interactive Installation · Museum Exhibition',
  description:
    "An interactive flower installation that responds to viewer proximity and motion — exhibited in a museum setting as part of an art showcase.",
  cta: 'View Case Study',
  meta: 'TOUCHDESIGNER · SENSORS',
  duration: '03:00',
  bgImage: '/portfolio/assets/case-studies/blooming/apd-poster.jpg',
  overlay: 'default',
  theme: 'light',
  caseStudy: {
    coverImage: '/portfolio/assets/case-studies/blooming/apd-poster.jpg',
    reelUrl: '/portfolio/assets/case-studies/blooming/blooming-final.mp4',
    client: 'Museum Exhibition',
    year: '2024',
    role: 'Interactive Designer · Creative Technologist',
    tools: ['TouchDesigner', 'Arduino', 'Custom Sensors'],
    tags: ['Interactive Art', 'Generative', 'Installation', 'Real-time'],
    overview:
      "Blooming is a responsive installation: a field of generative flowers blooms or wilts depending on how visitors move through the room. The piece explores attention, care, and presence as a shared experience.",
    credits: [
      { label: 'Year',     value: '2024' },
      { label: 'Client',   value: 'Museum Exhibition' },
      { label: 'Role',     value: 'Interactive Designer · Creative Technologist' },
      { label: 'Tools',    value: 'TouchDesigner · Arduino · Custom Sensors' },
      { label: 'Duration', value: '1 month installation' },
    ],
    awards: [
      { name: 'Museum Exhibition · Featured Installation', year: '2024' },
      { name: 'Above-average dwell time for the quarter',  year: '2024' },
    ],
    body:
      "The piece sits at the intersection of generative design and physical sensing. Visitors don't have to do anything explicit — the room reads their proximity and motion, and the flowers respond at the speed of breath.",
    chapters: [
      {
        eyebrow: 'Concept',
        title: 'Art that needs you',
        body:
          "What happens to art when no one is looking? Blooming flips that question — the work needs the audience to come alive, but rewards stillness rather than crowding.",
      },
      {
        eyebrow: 'Build',
        title: 'Sensors + TouchDesigner',
        body:
          "Visitor motion is read via custom IR/ultrasonic sensors and pushed to TouchDesigner. A generative particle system grows or recedes based on density and average movement speed.",
        media: [
          { src: '/portfolio/assets/case-studies/blooming/blooming-x.mp4', caption: 'Early prototype loop' },
          { src: '/portfolio/assets/case-studies/blooming/play-force.mp4', caption: 'Holographic flower variant' },
          { src: '/portfolio/assets/case-studies/blooming/reel.mp4', caption: 'Installation in the room' },
        ],
      },
      {
        eyebrow: 'Outcome',
        title: 'Quiet attention',
        body:
          "Exhibited for a month in a museum setting. Average dwell time was significantly above the gallery average for that quarter.",
      },
    ],
  },
}

// ──────────────────────────────────────────────────────────
//   POPUP-ONLY CASE STUDIES (no carousel, just clickable popups)
// ──────────────────────────────────────────────────────────

const pubflightCase = {
  id: 'pubflift-ad',
  title: 'Pubflift · Ad Tech',
  subtitle: 'Ad Animation · 2023',
  badges: ['AD ANIMATION'],
  bgImage: '/portfolio/assets/work/pubflift-ad.jpg',
  caseStudy: {
    coverImage: '/portfolio/assets/work/pubflift-ad.jpg',
    reelUrl: '/portfolio/assets/case-studies/pubflift-ad/reel.mp4',
    client: 'Pubflift',
    year: '2023',
    role: 'Motion Designer',
    tools: ['After Effects', 'Illustrator'],
    tags: ['Ad Animation', 'Motion Design', 'Brand'],
    overview:
      "Short-form animated ads for Pubflift, built to communicate complex ad-tech value props in seconds. Looping, modular, and easy to localise.",
  },
}

const socialMediaCase = {
  id: 'social-media-videos',
  title: 'Social Media Videos',
  subtitle: 'Short-form Video · Client Work',
  badges: ['VIDEO EDIT', 'SOCIAL'],
  bgGradient: 'linear-gradient(149deg,#bf1f59,#e5598c 36%,#801440 71%)',
  caseStudy: {
    reelUrl: '/portfolio/assets/case-studies/victor-mourad/reel2.mp4',
    client: 'Various',
    year: '2023–24',
    role: 'Editor · Motion Designer',
    tools: ['Premiere Pro', 'After Effects'],
    tags: ['Video Edit', 'Social', 'Short-form', 'Motion'],
    overview:
      "Short-form video edits for social platforms — fast cuts, kinetic type, and motion design layered into client footage to land the message inside the first three seconds.",
  },
}

const lucidLogoCase = {
  id: 'lucid-logo-anim',
  title: 'Logo Animations',
  subtitle: 'Motion Design · Brand',
  badges: ['MOTION DESIGN', 'BRAND'],
  bgImage: '/portfolio/assets/work/lucid-logo-anim.jpg',
  caseStudy: {
    coverImage: '/portfolio/assets/work/lucid-logo-anim.jpg',
    figmaEmbedUrl: 'https://embed.figma.com/proto/y2JZWoymudyLSPZyHTXzrX/Lucid-Creatives?node-id=87-219&starting-point-node-id=87%3A219&scaling=min-zoom&content-scaling=fixed&embed-host=share',
    client: 'Lucid Creatives',
    year: '2023',
    role: 'Motion Designer · Brand Designer',
    tools: ['After Effects', 'Figma', 'Illustrator'],
    tags: ['Motion Design', 'Logo', 'Brand', 'Prototype'],
    overview:
      "Animated logo and brand prototype for Lucid Creatives. Includes the motion logo treatment plus a Figma interactive prototype showing the full brand website experience.",
  },
}

const hypeEduCase = {
  id: 'hype-edu-anim',
  title: 'Hype Educational Animations',
  subtitle: 'Animation · Educational',
  badges: ['ANIMATION', 'EDUCATION'],
  bgImage: '/portfolio/assets/work/hype-edu-anim.jpg',
  caseStudy: {
    coverImage: '/portfolio/assets/work/hype-edu-anim.jpg',
    reelUrl: '/portfolio/assets/case-studies/hype-edu-anim/reel.mp4',
    gallery: [
      '/portfolio/assets/case-studies/hype-edu-anim/01.jpg',
      '/portfolio/assets/case-studies/hype-edu-anim/02.jpg',
      '/portfolio/assets/case-studies/hype-edu-anim/03.jpg',
      '/portfolio/assets/case-studies/hype-edu-anim/04.jpg',
      '/portfolio/assets/case-studies/hype-edu-anim/05.jpg',
      '/portfolio/assets/case-studies/hype-edu-anim/06.jpg',
    ],
    client: 'Hype',
    year: '2023',
    role: 'Motion Designer · Illustrator',
    tools: ['After Effects', 'Illustrator'],
    tags: ['Animation', 'Education', 'Explainer'],
    overview:
      "A series of educational animations created to make complex topics easy to follow — bright colour, clear motion, and accessible pacing for learners.",
  },
}

const videoEditionCase = {
  id: 'video-edition',
  title: 'Video Edition',
  subtitle: 'Video Editing · Client Work',
  badges: ['VIDEO EDIT'],
  bgImage: '/portfolio/assets/work/lucid-construction.jpg',
  caseStudy: {
    coverImage: '/portfolio/assets/work/lucid-construction.jpg',
    reelUrl: '/portfolio/assets/case-studies/lucid-construction/reel.mp4',
    client: 'Various',
    year: '2023',
    role: 'Video Editor',
    tools: ['Premiere Pro', 'After Effects'],
    tags: ['Video Edit', 'Post-production'],
    overview:
      "A reel of video edits for client work — corporate, construction, and brand-led content. Focused on tight cuts, clear pacing, and on-brand colour grading.",
  },
}

const amazonicasCase = {
  id: 'amazonicas-logo',
  title: 'Amazonicas Logo',
  subtitle: 'Logo Design · 2023',
  badges: ['LOGO'],
  bgImage: '/portfolio/assets/work/amazonicas-logo.jpg',
  caseStudy: {
    coverImage: '/portfolio/assets/work/amazonicas-logo.jpg',
    reelUrl: '/portfolio/assets/case-studies/amazonicas-logo/reel.mp4',
    gallery: [
      '/portfolio/assets/case-studies/amazonicas-logo/01.jpg',
    ],
    client: 'Amazonicas',
    year: '2023',
    role: 'Logo Designer',
    tools: ['Illustrator'],
    tags: ['Logo', 'Branding'],
    overview:
      "A vibrant logo design for Amazonicas — warm tropical palette, custom mark, and a flexible system for digital and print.",
  },
}

const interactivePoemCase = {
  id: 'interactive-poem',
  title: 'Interactive Web Poem',
  subtitle: 'Interactive · Web',
  badges: ['INTERACTIVE'],
  bgImage: '/portfolio/assets/work/interactive-poem.jpg',
  caseStudy: {
    coverImage: '/portfolio/assets/work/interactive-poem.jpg',
    reelUrl: '/portfolio/assets/case-studies/interactive-poem/reel.mp4',
    gallery: [
      '/portfolio/assets/case-studies/interactive-poem/01.jpg',
      '/portfolio/assets/case-studies/interactive-poem/02.jpg',
      '/portfolio/assets/case-studies/interactive-poem/03.jpg',
      '/portfolio/assets/case-studies/interactive-poem/04.jpg',
    ],
    client: 'Personal project',
    year: '2023',
    role: 'Interactive Designer · Developer',
    tools: ['p5.js', 'JavaScript', 'WebGL'],
    tags: ['Interactive', 'Web', 'Generative', 'Poetry'],
    overview:
      "A poem rendered as an interactive web piece — the reader's cursor disturbs the text, words bloom and rearrange, and meaning is revealed by exploration.",
  },
}

const suprafreshCase = {
  id: 'suprafresh',
  title: 'SupaFresh Market',
  subtitle: 'E-commerce Website · 2024',
  badges: ['WEB DESIGN', 'E-COMMERCE'],
  bgImage: '/portfolio/assets/case-studies/suprafresh/hero.jpg',
  caseStudy: {
    coverImage: '/portfolio/assets/case-studies/suprafresh/hero.jpg',
    liveUrl: 'https://supafreshmarket.com.au/',
    gallery: [
      '/portfolio/assets/case-studies/suprafresh/01.jpg',
      '/portfolio/assets/case-studies/suprafresh/02.jpg',
      '/portfolio/assets/case-studies/suprafresh/03.jpg',
    ],
    client: 'Supa Fresh Market',
    year: '2024',
    role: 'Web Designer · Developer',
    tools: ['Web Design', 'E-commerce', 'UI/UX'],
    tags: ['Web Design', 'E-commerce', 'Brand', 'Local Business'],
    overview:
      "An e-commerce site for Supa Fresh Market — a grocery and Halal butcher in Caroline Springs. Designed for fast browsing, clear product categories, and a VIP loyalty program (Supa Saver VIP Club). Built and shipped live at supafreshmarket.com.au.",
  },
}

const libraryEmotionsCase = {
  id: 'library-of-emotions',
  title: 'Library of Emotions',
  subtitle: 'PhD Research Project',
  badges: ['PHD PROJECT', 'RESEARCH'],
  bgImage: '/portfolio/assets/work/library-of-emotions.jpg',
  caseStudy: {
    coverImage: '/portfolio/assets/work/library-of-emotions.jpg',
    gallery: [
      '/portfolio/assets/case-studies/library-of-emotions/01.jpg',
    ],
    client: 'PhD Research',
    year: '2024',
    role: 'Researcher · Interactive Designer',
    tools: ['Research', 'Interactive Design', 'Prototyping'],
    tags: ['Research', 'Emotional Awareness', 'Interactive', 'PhD'],
    overview:
      "A research project exploring how interactive media can support emotional literacy. Investigates interfaces, narrative structures, and design patterns that help users recognise, name, and reflect on emotional states.",
  },
}

const arFiltersCase = {
  id: 'ar-filters',
  title: 'AR Filters',
  subtitle: 'AR · Social Filters',
  badges: ['AR', 'FILTERS'],
  bgImage: '/portfolio/assets/work/tiktok-ar.jpg',
  caseStudy: {
    coverImage: '/portfolio/assets/work/tiktok-ar.jpg',
    reelUrl: '/portfolio/assets/case-studies/tiktok-ar/reel.mp4',
    gallery: [
      '/portfolio/assets/case-studies/tiktok-ar/01.jpg',
      '/portfolio/assets/case-studies/tiktok-ar/02.jpg',
      '/portfolio/assets/case-studies/tiktok-ar/03.jpg',
    ],
    client: 'Various',
    year: '2023',
    role: 'AR Designer · Creator',
    tools: ['Spark AR', 'Lens Studio', 'Illustrator'],
    tags: ['AR', 'Filters', 'Face Tracking', 'Social'],
    overview:
      "A set of AR filters designed for social platforms — playful face effects, branded try-ons, and ambient room overlays. Each filter was tuned for fast capture and easy resharing.",
  },
}

// ──────────────────────────────────────────────────────────
//   NON-CASE-STUDY CINEMA HEROES (carousel-only, no CTA)
// ──────────────────────────────────────────────────────────

const pubflightHero = {
  id: 'pubflift-hero',
  layout: 'cinema',
  kind: 'corporate',
  badges: ['AD ANIMATION'],
  title: 'Pubflift · Ad Tech',
  subtitle: 'Client Project · Short-form Ad Animation',
  description:
    "Short-form animated ads designed to communicate complex ad-tech value props in seconds. Looping, modular, and easy to localise.",
  meta: 'AE · MOTION',
  duration: '00:30',
  bgImage: '/portfolio/assets/work/pubflift-ad.jpg',
  overlay: 'dark',
  hideCaseButton: true,
  caseStudy: { reelUrl: '/portfolio/assets/case-studies/pubflift-ad/reel.mp4' },
}

const mywayHero = {
  id: 'myway-hero',
  layout: 'cinema',
  kind: 'creative',
  badges: ['VIDEO EDIT', 'KINETIC TYPE'],
  title: 'MyWay',
  subtitle: 'Kinetic Typography Edit',
  description:
    "A kinetic-typography lyric edit synced to Calvin Harris' 'My Way' — every beat triggers a type-driven scene change.",
  meta: 'PR · AE',
  duration: '03:38',
  bgImage: '/portfolio/assets/case-studies/myway/poster.jpg',
  overlay: 'dark',
  hideCaseButton: true,
  caseStudy: { reelUrl: '/portfolio/assets/case-studies/myway/reel.mp4' },
}

// ──────────────────────────────────────────────────────────
//   WORK (categories → heroes + gallery)
// ──────────────────────────────────────────────────────────

export const work = {
  // ── 3D & Motion ──────────────────────────────
  'cat-motion': {
    header: { label: '3D + Motion Design', title: 'Animation & VFX' },
    heroes: [escapeRoomCase, pubflightHero, mywayHero],
    shortCards: true,
    gallery: [
      // First 3 visible by default
      { name: 'Tabletop Game Animation',    caseStudyId: 'escape-room-anim', kind: 'corporate', tag: 'ANIMATION',     tagColor: 'rgba(156,77,255,.9)', img: '/portfolio/assets/case-studies/escape-room-anim/poster.jpg' },
      { name: 'Pubflift · Ad Tech',                                          kind: 'corporate', tag: 'AD ANIMATION',  tagColor: 'rgba(0,194,212,.9)',  video: '/portfolio/assets/case-studies/pubflift-ad/reel.mp4' },
      { name: 'MyWay · Kinetic Typography',                                  kind: 'creative',  tag: 'VIDEO EDIT',    tagColor: 'rgba(255,46,107,.9)', video: '/portfolio/assets/case-studies/myway/reel.mp4' },
      // Hidden behind "See more"
      { name: 'Logo Animations',                                             kind: 'corporate', tag: 'MOTION DESIGN', tagColor: 'rgba(255,46,107,.9)', img: '/portfolio/assets/work/lucid-logo-anim.jpg' },
      { name: 'Hype Educational Animations',                                 kind: 'creative',  tag: 'ANIMATION',     tagColor: 'rgba(0,194,212,.9)',  img: '/portfolio/assets/work/hype-edu-anim.jpg' },
      { name: 'Video Edition',                                               kind: 'corporate', tag: 'VIDEO EDIT',    tagColor: 'rgba(156,77,255,.9)', img: '/portfolio/assets/work/lucid-construction.jpg' },
      { name: 'Social Media Videos',                                         kind: 'corporate', tag: 'VIDEO EDIT',    tagColor: 'rgba(255,46,107,.9)', video: '/portfolio/assets/case-studies/victor-mourad/reel2.mp4' },
    ],
  },

  // ── Digital Art & UX ────────────────────────
  'cat-digital': {
    header: { label: 'Digital Art · UX/UI', title: 'Design & Branding' },
    heroes: [extraCheckpointCase, sub40Case],
    shortCards: true,
    gallery: [
      // First 3 visible
      { name: 'XtraCheckpoint',              caseStudyId: 'extra-checkpoint', kind: 'corporate', tag: 'BRAND DESIGN', tagColor: 'rgba(255,46,107,.9)', img: '/portfolio/assets/work/extra-checkpoint.jpg' },
      { name: 'SupaFresh Market',                                             kind: 'corporate', tag: 'WEB DESIGN',   tagColor: 'rgba(0,194,212,.9)',  img: '/portfolio/assets/case-studies/suprafresh/hero.jpg', liveUrl: 'https://supafreshmarket.com.au/' },
      { name: 'Amazonicas Logo',                                              kind: 'corporate', tag: 'LOGO',         tagColor: 'rgba(255,217,61,.9)', tagText: '#222', img: '/portfolio/assets/work/amazonicas-logo.jpg' },
      // Hidden behind "See more"
      { name: 'Digital Agency Website',                                       kind: 'corporate', tag: 'WEB DESIGN',   tagColor: 'rgba(156,77,255,.9)', img: '/portfolio/assets/work/digital-agency.jpg' },
    ],
  },

  // ── Games & Interactive ─────────────────────
  'cat-games': {
    header: { label: 'Games · Interactive', title: 'Game Design & Experiences' },
    heroes: [bloomingCase, naibuCase],
    shortCards: true,
    gallery: [
      // First 3 visible
      { name: 'NAIBU',                       caseStudyId: 'naibu',   kind: 'creative', tag: 'GAME DESIGN',  tagColor: 'rgba(156,77,255,.9)', img: '/portfolio/assets/case-studies/naibu/hero.jpg' },
      { name: 'Break',                                                kind: 'creative', tag: 'VIDEOGAME',    tagColor: 'rgba(0,194,212,.9)',  img: '/portfolio/assets/case-studies/break-game/cover.gif', itchUrl: 'https://taniaolarte.itch.io/break' },
      { name: 'Chasqui',                                              kind: 'creative', tag: 'GAME JAM',     tagColor: 'rgba(255,46,107,.9)', video: '/portfolio/assets/case-studies/chasqui/reel.mp4', poster: '/portfolio/assets/case-studies/chasqui/poster.jpg', itchUrl: 'https://taniaolarte.itch.io/chasqui' },
      // Hidden behind "See more"
      { name: 'Library of Emotions',                                  kind: 'creative', tag: 'PHD PROJECT',  tagColor: 'rgba(173,70,255,.9)', img: '/portfolio/assets/work/library-of-emotions.jpg' },
      { name: 'AR Filters',                                           kind: 'creative', tag: 'AR / FILTERS', tagColor: 'rgba(255,217,61,.9)', tagText: '#222', img: '/portfolio/assets/work/tiktok-ar.jpg' },
      { name: 'Interactive Web Poem',                                 kind: 'creative', tag: 'INTERACTIVE',  tagColor: 'rgba(0,194,212,.9)',  img: '/portfolio/assets/work/interactive-poem.jpg' },
    ],
  },
}

// Popup-only case studies — currently none (only the 4 main case studies show modals).
const popupOnlyCases = []

// Flat map from caseStudyId → hero object, so gallery clicks can find the right case.
export const caseStudyIndex = [
  ...Object.values(work).flatMap((c) => c.heroes),
  ...popupOnlyCases,
].reduce((acc, h) => {
  acc[h.id] = h
  return acc
}, {})
