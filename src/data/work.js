// Source of truth: Notion DB "Projects (Portfolio)"
// Only rows with Choosen = TRUE appear here.
// Rows with Case Study = TRUE become heroes (carousel) AND get the neon star in the gallery.

export const categories = [
  { id: 'cat-motion',  label: 'Animation & VFX',       short: '3D & Motion' },
  { id: 'cat-digital', label: 'Design & Digital Art',  short: 'Digital Art & UX' },
  { id: 'cat-games',   label: 'Games & Interactive',   short: 'Games & Interactive' },
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
  bgImage: '/assets/case-studies/escape-room-anim/poster.jpg',
  bgGradient: 'linear-gradient(135deg,#1a0f3d 0%,#5a4fcf 45%,#382466 100%)',
  overlay: 'dark',
  theme: 'tabletop',
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
        media: [
          { src: '/assets/case-studies/escape-room-anim/box-01.jpg', caption: 'Game box · physical product' },
          { src: '/assets/case-studies/escape-room-anim/card-01.jpg', caption: 'Card art · in-game prompts' },
        ],
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

// ──────────────────────────────────────────────────────────
//   THE VAULT — escape room eye animation (small case study)
// ──────────────────────────────────────────────────────────
const vaultEyeCase = {
  id: 'the-vault-eye',
  layout: 'cinema',
  kind: 'corporate',
  badges: ['ANIMATION', 'ESCAPE ROOM'],
  title: 'THE VAULT · Eye Animation',
  subtitle: 'Escape Room Loop · The Vault Canberra',
  description:
    "A looping eye animation made for The Vault | Escape Rooms Canberra — a short, unblinking watcher built to live inside one of the rooms.",
  cta: 'Open the Vault',
  meta: 'AE · LOOP',
  duration: '00:12',
  bgImage: '/assets/case-studies/the-vault/polaroid-03.png',
  overlay: 'dark',
  theme: 'vault',
  caseStudy: {
    eyeVideo: '/assets/case-studies/tiktok-ar/Eye.mp4',
    client: 'The Vault | Escape Rooms · Canberra',
    year: '2024',
    role: 'Animator',
    tools: ['After Effects', 'Illustrator'],
    tags: ['Animation', 'Loop', 'Escape Room'],
    brief: {
      eyebrow: 'THE BRIEF',
      title: 'A watcher for the room',
      body:
        "The Vault wanted a short looping animation to live on a screen inside one of their escape rooms — something silent, slightly off, that players would notice but couldn't quite read. The answer was an eye: open, blinking, scanning. Looping seamlessly so it never gives the trick away.",
    },
    venue: {
      eyebrow: 'THE CLIENT',
      label: 'Escape Rooms Canberra',
      body:
        "The Vault is one of three rooms run by Escape Rooms Canberra — the same creators I later partnered with on the WHAT ON EARTH! tabletop game animation.",
      links: [
        { label: 'The Vault · room page',    url: 'https://www.escaperoomscanberra.com/the-vault' },
        { label: 'Escape Rooms Canberra',    url: 'https://www.escaperoomscanberra.com' },
      ],
    },
    process: [
      { num: '01', label: 'STUDY',  text: "Reference: surveillance lenses, antique porcelain dolls, anatomy plates. Wanted the eye to feel both mechanical and uncomfortably alive." },
      { num: '02', label: 'BUILD',  text: "Layered shape rigs in After Effects — iris, sclera, lid, lashes — each on its own controller so the blink and scan could be timed independently." },
      { num: '03', label: 'LOOP',   text: "Scrubbed the cycle frame-by-frame so the seam disappears. Players walk past it for an hour and it never visibly repeats." },
    ],
    polaroidsHead: {
      title: 'In the room',
      caption: "Polaroids from inside The Vault — the eye on the wall, players in front of it.",
    },
    // Drop photos into /assets/case-studies/the-vault/ to populate.
    polaroids: [
      { src: '/assets/case-studies/the-vault/polaroid-01.jpg', caption: 'The Vault Bar · Canberra' },
      { src: '/assets/case-studies/the-vault/polaroid-02.png', caption: 'Escape room puzzle', objectPosition: '50% 0%' },
      { src: '/assets/case-studies/the-vault/polaroid-03.png', caption: 'Me with my animation' },
      { src: '/assets/case-studies/the-vault/polaroid-05.png', caption: 'The Vault' },
    ],
    bigger: {
      eyebrow: 'AFTER THE VAULT',
      title: 'I later worked on a bigger project',
      body:
        "This eye loop opened the door to a full animated brief — a tabletop game with 120+ redesigned assets and 24 looping sequences, animated in a Cuphead-meets-Fallout retro style.",
      cta: 'See the Tabletop case study →',
      linkCaseId: 'escape-room-anim',
    },
    credits: [
      { label: 'Year',   value: '2024' },
      { label: 'Client', value: 'The Vault | Escape Rooms Canberra' },
      { label: 'Role',   value: 'Animator' },
      { label: 'Tools',  value: 'After Effects · Illustrator' },
      { label: 'Format', value: 'Looping in-room screen' },
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
  bgImage: '/assets/case-studies/extra-checkpoint/hero.jpg',
  theme: 'xtracheckpoint',
  mockups: [
    { class: 'ph1', label: 'Logo Mark',   img: '/assets/case-studies/extra-checkpoint/01.jpg' },
    { class: 'ph2', label: 'App Icon',    img: '/assets/case-studies/extra-checkpoint/02.jpg' },
    { class: 'ph3', label: 'Merch',       img: '/assets/case-studies/extra-checkpoint/03.jpg' },
    { class: 'lp',  label: 'Brand Sheet', img: '/assets/case-studies/extra-checkpoint/04.jpg' },
    { class: 'pt',  label: 'Pattern',     img: '/assets/case-studies/extra-checkpoint/05.jpg' },
  ],
  caseStudy: {
    coverImage: '/assets/case-studies/extra-checkpoint/cover.jpg',
    heroGif:    '/assets/case-studies/extra-checkpoint/intro.gif',
    behanceUrl: 'https://www.behance.net/gallery/131654567/XtraCheckpointCreacion-de-Marca',
    behanceProjectId: '131654567',

    // HERO
    eyebrow: 'BRAND IDENTITY · 2021',
    title:   'XtraCheckpoint',
    tagline: 'HELLO GAMER!',
    intro:
      "An illustrated gaming-journalism brand. XtraCheckpoint serves easy-to-digest news, investigations, and features for gamers — translated visually through a custom illustration system that turns every article into a moment of play.",

    // TEAM — the "Tripulantes" crew from the brand book
    team: [
      { name: 'Frank Reyes',       role: 'Social Communicator & Journalist', bio: '3 years of experience in videogame and digital journalism.' },
      { name: 'Tania Olarte',      role: 'Multimedia Communicator',          bio: 'Focus on interactive products, diploma in entrepreneurship and innovation in digital businesses.' },
      { name: 'Estefania Castaño', role: 'Professional Illustrator',         bio: 'Illustrated for UN Women GameJam, ExpoGame Chile and Bogotá Siggraph.' },
    ],

    // BRAND PILLARS
    pillars: [
      { num: '01', label: 'INFORMATIVE', body: 'Journalism that earns the reader\'s trust — research first, then make it readable.' },
      { num: '02', label: 'PLAYFUL',     body: 'Every article looks like the games it covers — bold, illustrated, alive.' },
      { num: '03', label: 'COMMUNITY',   body: 'Built for a Spanish-speaking gaming audience that wants to belong somewhere.' },
      { num: '04', label: 'ILLUSTRATED', body: 'Custom illustrations carry the message where words can\'t.' },
    ],

    // LOGO SYSTEM
    logo: {
      title: 'Imagotype',
      body:
        "A pixel-grid mark inspired by save points and energy bars — three rows of three squares, the centre column lit in the brand purple. The wordmark sits below in a hand-drawn display weight, keeping the system warm even at small sizes.",
      image: '/assets/case-studies/extra-checkpoint/logo.jpg',
      rules: [
        { label: 'Clear space',   note: 'One full grid-square padding on every side.' },
        { label: 'Minimum size',  note: 'Imagotype: 100 px wide. Below that, drop the wordmark and keep the grid mark only.' },
        { label: 'Backgrounds',   note: 'Works on dark (default), light, and over photography with the white-stroke variant.' },
      ],
      variations: [
        { label: 'Primary · purple on dark',  swatch: '#623A9F' },
        { label: 'Inverted · black on light', swatch: '#04031F' },
        { label: 'Mono · cyan accent',        swatch: '#1A6A8F' },
        { label: 'Outline · clear-space study', swatch: 'transparent' },
      ],
    },

    // PALETTE
    palette: {
      primary: [
        { hex: '#04031F', name: 'Deep Space',   note: 'Default background.' },
        { hex: '#050A30', name: 'Cosmic Navy',  note: 'Surface · panels.' },
        { hex: '#FAF2E9', name: 'Page Cream',   note: 'Long-form text background.' },
        { hex: '#623A9F', name: 'Brand Purple', note: 'Primary brand colour.' },
      ],
      complementary: [
        { hex: '#CB6CE6', name: 'Light Purple', note: 'Highlights · CTAs.' },
        { hex: '#ED5949', name: 'Coral',         note: 'Accent · alert states.' },
        { hex: '#1A6A8F', name: 'Deep Teal',     note: 'Editorial · secondary.' },
        { hex: '#FFD968', name: 'Game Yellow',   note: 'Stickers · pings.' },
      ],
    },

    // TYPOGRAPHY
    typography: [
      { family: 'Gagalin',           role: 'Display · headlines',     sample: 'HOLA GAMER!', weights: 'Regular' },
      { family: 'Palaquin Bold',     role: 'Subheads · category tags', sample: 'XTRACHECKPOINT', weights: 'Bold' },
      { family: 'Palaquin Regular',  role: 'Body · articles',          sample: 'A medium for gamers, by gamers.', weights: 'Thin · Regular · Semibold · Extralight' },
    ],

    // APPLICATIONS / BRAND IN USE
    applications: [
      { title: 'Tags & merch',     body: 'Pin badges, hang tags, and stamp — the mark survives at any scale.', image: '/assets/case-studies/extra-checkpoint/01.jpg' },
      { title: 'Packaging',         body: 'Cosmic packaging system for limited-run drops.',                      image: '/assets/case-studies/extra-checkpoint/02.jpg' },
      { title: 'Editorial content', body: 'The newsletter — illustrated stories, structured for short attention.', image: '/assets/case-studies/extra-checkpoint/03.jpg' },
      { title: 'Social channels',   body: 'A consistent grid across Instagram, Twitter, Discord and Facebook.',   image: '/assets/case-studies/extra-checkpoint/social.jpg' },
      { title: 'Brand sheet',       body: 'Full system reference for partners.',                                  image: '/assets/case-studies/extra-checkpoint/brand-system.jpg' },
    ],

    // MOODBOARD — illustration directions that informed the system
    moodboard: {
      body: 'Bold female-led illustration, retro-arcade panel composition, and onomatopoeia — the visual world we wanted the journalism to live inside.',
      directions: [
        'Bold character illustration · flat colour, strong outlines',
        'Onomatopoeia · POW! ZAP! ITATATATA!',
        'Retro-arcade panels · vertical poster compositions',
        'Cosmic backdrops · stars, planets, deep purples',
        'Editorial dignity · enough whitespace to read 800 words',
      ],
    },

    // PROCESS
    process: [
      { num: '01', eyebrow: 'DISCOVERY',  title: 'Reading the audience',      body: "Mapped what Spanish-speaking gamers actually consume — short-form video, illustrated articles, podcasts. Listed what the existing publications got wrong (walls of text, no personality)." },
      { num: '02', eyebrow: 'STRATEGY',   title: 'Positioning',                body: 'Defined four pillars: informative, playful, community, illustrated. Wrote a tone-of-voice doc that staff illustrators could check copy against.' },
      { num: '03', eyebrow: 'LOGO',       title: 'The grid mark',              body: 'Iterated on the 3×3 pixel grid until the central column read as a save-point glyph at any scale. Paired with a hand-drawn wordmark to soften the geometry.' },
      { num: '04', eyebrow: 'SYSTEM',     title: 'Colour + type',              body: 'Picked four primary colours that hold up on screen and four complementary colours for accent moments. Two typefaces — Gagalin for display, Palaquin for everything else.' },
      { num: '05', eyebrow: 'APPLICATIONS', title: 'Rollout templates',         body: 'Built Instagram grids, Facebook covers, newsletter templates, podcast cover art, and a stamp/merch pack. Every surface was templated for a non-designer to operate.' },
      { num: '06', eyebrow: 'HANDOFF',    title: 'Brand book + behance',       body: 'Delivered a complete brand book with logo rules, palette specs, typography hierarchy, and asset library. Project featured on Behance.' },
    ],

    // OUTCOME
    awards: [
      { name: 'Featured on Behance',                      year: '2021' },
      { name: 'In active rotation across content channels', year: '2021–present' },
      { name: 'Complete brand book delivered',            year: '2021' },
    ],

    credits: [
      { label: 'Year',   value: '2021' },
      { label: 'Client', value: 'XtraCheckpoint' },
      { label: 'Role',   value: 'Brand Designer · Illustrator' },
      { label: 'Tools',  value: 'Illustrator · Photoshop · After Effects · Procreate' },
      { label: 'Output', value: 'Logo · Brand book · Illustration set · Social templates · Merch · Newsletter' },
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
  bgImage: '/assets/case-studies/naibu/hero.jpg',
  overlay: 'warm',
  theme: 'naibu',
  caseStudy: {
    coverImage: '/assets/case-studies/naibu/hero.jpg',
    youtubeUrl: 'https://youtu.be/oJUyfrc1kpc',
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
    // Production-plan-driven structure — each phase mirrors a category from
    // the original 6-month cronogram (concept → narrative → research → design
    // → art → animation → documentation → programming → delivery).
    phases: [
      {
        id: 'concept',
        num: '01',
        category: 'CONCEPT',
        title: 'Idea, folklore, identity',
        body:
          "The seed: a 2D platformer about reconciling with hidden parts of the self. Initial research mined Andean and Mapuche folklore for figures that could carry psychological weight — the Wendigo and Fobos emerged as the antagonist set, each embodying a stage of internal conflict.",
        items: [
          'Concept research · folklore & mythology',
          'Rule-set for the world (gravity, time, self)',
          'Character selection · protagonist + antagonists',
          'Visual style direction · pixel art + warm/cool duality',
        ],
        media: { src: '/assets/case-studies/naibu/portada.png', caption: 'Naibu · title artwork' },
      },
      {
        id: 'narrative',
        num: '02',
        category: 'NARRATIVE',
        title: 'Uhri, antagonists, and the thread',
        body:
          "Uhri — a child protagonist whose silhouette shifts with the emotional state of each level. The narrative method is environmental: no dialogue, only mechanics, palette, and music. Each antagonist (Fobos, Wendigo) marks a chapter on the inner thread.",
        items: [
          'Narrative method · environmental storytelling',
          'Protagonist (Uhri) · arc + visual evolution',
          'Antagonists (Fobos, Wendigo) · meaning + behaviour',
          'World rules · how memory and emotion shape space',
          'Beats · the points where mechanics shift',
        ],
        media: [
          { src: '/assets/case-studies/naibu/uhri-character.png', caption: 'Uhri · character reference' },
          { src: '/assets/case-studies/naibu/fobos.png',          caption: 'Fobos · antagonist' },
          { src: '/assets/case-studies/naibu/wendigo.png',        caption: 'Wendigo · antagonist' },
        ],
      },
      {
        id: 'research',
        num: '03',
        category: 'RESEARCH & REFERENCES',
        title: 'What the genre had already solved',
        body:
          "Studied INSIDE, LIMBO, Gris and Celeste for how mood, motion, and mechanics co-author meaning. Catalogued enemy archetypes, traversal vocabularies, and pacing strategies — and decided what to deliberately not borrow.",
        items: [
          'Videogame references · mood + mechanics',
          'Character & antagonist reference boards',
          'Universe / setting reference',
          'Mechanics study · what the genre allows',
          'Strategy · how to differentiate',
        ],
        media: { src: '/assets/case-studies/naibu/levels.png', caption: 'Level palettes derived from research' },
      },
      {
        id: 'design',
        num: '04',
        category: 'DESIGN',
        title: 'Characters, levels, interface',
        body:
          "Designed the protagonist's pose set, then the antagonists, then the universe — each constrained to the level's 6-colour palette. Levels were paper-prototyped first to validate the puzzle-emotion mapping before any pixel went down. UI kept minimal so the world stays foregrounded.",
        items: [
          'Protagonist design · poses + silhouette',
          'Antagonist design · readability at small scale',
          'Universe design · biomes per emotional state',
          'Level design · puzzle ↔ emotion mapping',
          'UI design · minimal HUD',
        ],
        media: [
          { src: '/assets/case-studies/naibu/uhri-poses.png',         caption: 'Uhri · pose studies' },
          { src: '/assets/case-studies/naibu/interactive-assets.png', caption: 'Interactive props · lamps + collectibles' },
          { src: '/assets/case-studies/naibu/icon.png',               caption: 'In-game icon' },
        ],
      },
      {
        id: 'art',
        num: '05',
        category: 'ART',
        title: 'Pixel work + asset pipeline',
        body:
          "Hand-pixelled in Aseprite at native resolution, no upscaling. Each level uses a constrained 6-colour palette that shifts with the emotional state — cool blues for denial, fiery oranges for anger, soft pinks for acceptance.",
        items: [
          'Protagonist sprite art',
          'Antagonist sprite art',
          'Environment art · per biome',
          'UI art',
          'Level 1 finished art pass',
          'Props · lamps, collectibles, set dressing',
        ],
        media: { src: '/assets/case-studies/naibu/uhri-spritesheet.png', caption: 'Uhri animation sprite sheet' },
      },
      {
        id: 'animation',
        num: '06',
        category: 'ANIMATION',
        title: 'Motion as emotion',
        body:
          "12+ hand-animated cycles, each tuned to the level's emotional weight — Uhri's walk slows under grief, the antagonists' reveals were storyboarded frame by frame so each appearance lands.",
        items: [
          'Protagonist · idle / walk / jump / interact',
          'Antagonist · attack + reveal cycles',
          'Enemy variants · 2 patterns',
          'Prop animation · ambient world motion',
          'UI animation · transitions + feedback',
        ],
        media: { src: '/assets/case-studies/naibu/fobos-storyboard.png', caption: 'Fobos · appearance storyboard' },
      },
      {
        id: 'documentation',
        num: '07',
        category: 'DOCUMENTATION & APPROVALS',
        title: 'The thesis behind the game',
        body:
          "A 168-page thesis grounding the design in psychology, narrative theory, and game-feel research. Each design decision had to be defensible against the framework. The document went through three approval rounds with the university committee.",
        items: [
          'Contextual research',
          'Theoretical framework',
          'Project purpose & objectives',
          'Detailed project description',
          'Committee approvals · 3 rounds',
        ],
      },
      {
        id: 'programming',
        num: '08',
        category: 'PROGRAMMING (UNITY)',
        title: 'Mechanics in C#',
        body:
          "Built in Unity from scratch — sprite-based state machines for character motion, custom puzzle controllers, palette-shift transitions between levels. Sound was layered last, scoring transitions rather than continuous BGM, so silence carries meaning too.",
        items: [
          'Unity implementation · scenes + scripts',
          'Mechanic programming · movement, puzzles',
          'UI implementation',
          'Sound design · score the transitions, not the rooms',
        ],
      },
      {
        id: 'delivery',
        num: '09',
        category: 'DELIVERABLES & ITERATION',
        title: 'Vertical slice, defence, exhibition',
        body:
          "Shipped a vertical slice covering 3 emotional stages (denial → anger → acceptance). Defended the thesis with a live playthrough, earned a Meritorious distinction (4.8/5.0). Since then re-shown at MAGI Expo (2024), Future Forte (2025), and Bunjil Place (2025).",
        items: [
          'General structuring · build packaging',
          'Deliverables · build + thesis + presentation',
          'Iteration rounds · playtests + refinements',
        ],
      },
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
          { src: '/assets/case-studies/naibu/01.jpg', caption: 'Opening — denial' },
          { src: '/assets/case-studies/naibu/02.jpg', caption: 'Mid-game — anger' },
          { src: '/assets/case-studies/naibu/03.jpg', caption: 'Late — acceptance' },
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
  title: 'Second Blooming',
  subtitle: 'Interactive Installation · Bunjil Place',
  description:
    "A meditation on the digital afterlife of organic forms — a physical flower meets its reactive holographic twin, breathing in response to your presence.",
  cta: 'View Case Study',
  meta: 'TOUCHDESIGNER · BIOTRON · HOLOGRAPHIC DOME',
  duration: '03:00',
  bgImage: '/assets/case-studies/blooming/apd-poster.jpg',
  overlay: 'default',
  theme: 'blooming',
  caseStudy: {
    coverImage: '/assets/case-studies/blooming/apd-poster.jpg',
    youtubeUrl: 'https://youtu.be/4vzbM2uL0tM',
    heroVideo: '/assets/case-studies/blooming/BloomingInteractionMain.mp4',
    heroPoster: '/assets/case-studies/blooming/apd-poster.jpg',
    eyebrow: 'INTERACTIVE INSTALLATION · CASE STUDY',
    placeLine: 'SCAN → BIOTRON → TOUCHDESIGNER → DOME → BUNJIL PLACE',
    intro: {
      body:
        "A six-stage build: 3D-scan a real flower, plug it into a Playtronica Biotron, drive a TouchDesigner particle system off the biosignal stream, render the twin through a holographic dome, score it with Santino Castagna, and ship the whole thing to an outdoor screen. This is the working log of how it came together.",
    },
    chapters: [],
    features: [
      { label: 'PARTICLE ENGINE',   body: "Built in TouchDesigner — thousands of reactive particles emitted from the 3D-scanned flower geometry, rendered in real time." },
      { label: 'BIOSIGNAL SENSING', body: "The Playtronica Biotron reads touch, light, water, and conductivity from the physical flower, streaming MIDI into the system." },
      { label: 'HOLOGRAPHIC DOME',  body: "A holographic dome paired with an iPad creates the floating digital twin — light and geometry converging into an ethereal form." },
      { label: 'REACTIVE SYNC',     body: "Every biosignal channel maps to a particle parameter — density, dispersion, glow, decay — so the physical flower drives its digital counterpart, frame by frame." },
    ],
    // Step-by-step process — how the bloom went from idea to installed.
    process: [
      {
        num: '01',
        eyebrow: 'CONCEPT',
        title: 'A real flower meets its twin',
        body:
          "We started with a single question: what would it look like if a flower had a digital ghost — something that could breathe, dissolve, and respond? The brief came from RMIT MAGI's Floribunda response: respond to the exhibition with a poetic interactive piece.",
      },
      {
        num: '02',
        eyebrow: 'SCAN',
        title: 'Photogrammetry & 3D capture',
        body:
          "Multi-angle photogrammetry passes turned a physical bloom into a high-density point cloud — the seed dataset for every digital twin. We tested fresh flowers, dried flowers, and partially-wilted flowers to see how decay translated to particles.",
      },
      {
        num: '03',
        eyebrow: 'SIGNAL',
        title: 'Playtronica Biotron biosignal mapping',
        body:
          "The Playtronica Biotron reads natural inputs — touch, light, water, electrical conductivity — and emits them as MIDI. Each input channel was assigned a parameter in TouchDesigner: density, dispersion, glow, decay.",
      },
      {
        num: '04',
        eyebrow: 'SYSTEM',
        title: 'TouchDesigner particle pipeline',
        body:
          "Built the reactive system in TouchDesigner: 3D-scan geometry → particle emitters → biosignal modulators → render. Every frame, audience proximity rewrites the modulators, which feed the emitters, which redraw the flower.",
        media: {
          video: '/assets/case-studies/blooming/Play_Force_Experiments_web.mp4',
          poster: '/assets/case-studies/blooming/interactive-trailer-poster.jpg',
          caption: 'Play + force experiments · R&D session',
        },
      },
      {
        num: '05',
        eyebrow: 'DISPLAY',
        title: 'Holographic dome → iPad → projection',
        body:
          "Prototyped on a small holographic pyramid, then scaled to an iPad-fed dome, then onto the Bunjil Place outdoor screen. Each medium needed different particle counts and gamma curves.",
      },
      {
        num: '06',
        eyebrow: 'SOUND',
        title: 'Santino\'s reactive score',
        body:
          "Santino Castagna composed a score that listens to the particle state — when the bloom dissolves, the score thins; when it re-forms, harmonics return. The audio is layered, not continuous, so silence remains part of the piece.",
      },
      {
        num: '07',
        eyebrow: 'TUNING',
        title: 'Proximity falloff & dissolve curves',
        body:
          "Tuned the dissolve so the bloom rewarded slow approach and punished crowding. Dozens of in-room walkthroughs to find the falloff that read as breath, not glitch — and to make stillness, not movement, the trigger that re-forms the flower.",
      },
      {
        num: '08',
        eyebrow: 'INSTALL',
        title: 'Outdoor screen deployment',
        body:
          "Re-graded the patch for Bunjil Place's outdoor screen against ambient daylight, scaled the particle counts for the bigger canvas, and locked the loop to a 3-minute cycle so it could slot into the 3pm and 7pm daily screenings.",
        media: {
          video: '/assets/case-studies/blooming/reel.mp4',
          poster: '/assets/case-studies/blooming/apd-poster.jpg',
          caption: 'Trailer · full reel',
        },
      },
    ],
    // Exploration sketches / R&D — the messier middle of the project.
    exploration: {
      eyebrow: 'EXPLORATION',
      title: 'Failed bloom, useful bloom',
      body:
        "Not every iteration made the cut. We tested abstract glyph-flowers, audio-driven blooms, and a version where the flower only revealed when you stood still. The version we kept is the one where the flower needs you — but rewards stillness over crowding.",
      items: [
        { label: 'Glyph variation',  note: 'Replaced organic geometry with abstract glyphs — felt cold, dropped.' },
        { label: 'Audio-driven',     note: 'Bloom reacted to room volume — too noisy in a gallery, dropped.' },
        { label: 'Stillness-only',   note: 'Bloom revealed only after 8s of stillness — kept the spirit, softened the threshold.' },
        { label: '2D scan blend',    note: 'Doris layered 2D scans over the 3D point cloud — kept, became signature.' },
        { label: 'Touch-direct',     note: 'Direct touch on the physical flower → strong response — kept for live demos.' },
      ],
    },
    // Tool stack — what's actually under the hood.
    tools: [
      { name: 'TouchDesigner',     role: 'Particle system + reactive render. Where the digital twin lives.', group: 'Software' },
      { name: 'Playtronica Biotron', role: 'Biosignal sensor — touch, light, water, conductivity. MIDI out.', group: 'Hardware', url: 'https://shop.playtronica.com/products/biotron' },
      { name: 'Photogrammetry',    role: 'Multi-angle flower scans → particle source geometry.',             group: 'Pipeline' },
      { name: 'Holographic Dome / iPad', role: 'Physical display — prototype dome, then iPad-fed install.',  group: 'Output' },
    ],
    // Gallery moved into the process steps; section hidden when empty.
    gallery: [],
    // The flowers — four blooms from the linear cut. Flower 01 is the final
    // dome composition (animation version); 02–04 are extracted from the
    // YouTube source at the timestamps the artist called out.
    flowersHead: {
      title: 'The flowers',
      caption: "Four blooms ran through the linear cut — same engine, different geometry, different decay.",
    },
    flowers: [
      { video: '/assets/case-studies/blooming/blooming-final.mp4', poster: '/assets/case-studies/blooming/apd-poster.jpg', caption: 'Flower 01 · animation version · final dome composition' },
      { video: '/assets/case-studies/blooming/flower-02.mp4',     poster: '/assets/case-studies/blooming/apd-poster.jpg', caption: 'Flower 02 · 0:07 → 0:50' },
      { video: '/assets/case-studies/blooming/flower-03.mp4',     poster: '/assets/case-studies/blooming/apd-poster.jpg', caption: 'Flower 03 · 0:56 → 1:15' },
      { video: '/assets/case-studies/blooming/flower-04.mp4',     poster: '/assets/case-studies/blooming/apd-poster.jpg', caption: 'Flower 04 · 1:19 → 1:50' },
    ],
    // Big call-out video at the bottom.
    experience: {
      youtubeId: '4vzbM2uL0tM',
      label: 'EXPERIENCE THE BLOOM',
      sub: 'WATCH FULL EXHIBITION FILM',
    },
    credits: [
      { label: 'Year',     value: '2024' },
      { label: 'Concept & Direction', value: 'Doris Huang × Tania Olarte' },
      { label: 'Sound',    value: 'Santino Castagna' },
      { label: 'Role',     value: 'Interactive Designer · Creative Technologist' },
      { label: 'Tools',    value: 'TouchDesigner · Biotron · Playtronica · iPad' },
      { label: 'Exhibited',value: 'Bunjil Place Outdoor Screen · Jul 1–31' },
    ],
    awards: [
      { name: 'RMIT MAGI · Floribunda Response', year: '2024' },
      { name: 'Bunjil Place · Featured Installation', year: '2024' },
    ],
    closing: {
      title: 'SECOND BLOOMING',
      tagline: 'A dialogue between the ephemeral nature of life and the infinite persistence of digital code.',
    },
    exhibition: {
      outcomeEyebrow: 'OUTCOME',
      outcomeTitle: 'From scan to outdoor screen',
      vision:
        "The original ask was poetic: a flower with a digital ghost, something that could breathe and dissolve and respond. The outcome was concrete — Second Blooming was selected for the MAGI Floral Animations response to Bunjil Place's Floribunda exhibition and played daily on the outdoor screen for the run.",
      outcomeVideo: '/assets/case-studies/blooming/blooming-x.mp4',
      outcomePoster: '/assets/case-studies/blooming/apd-poster.jpg',
      // Instax-style polaroid wall from opening night at Bunjil Place.
      instax: [
        { src: '/assets/case-studies/blooming/1752551433716.jpeg', caption: 'Bunjil · opening night' },
        { src: '/assets/case-studies/blooming/1752551434746.jpeg', caption: 'Audience · 7pm screening' },
        { src: '/assets/case-studies/blooming/1752551435933.jpeg', caption: 'Bloom on the big screen' },
        { src: '/assets/case-studies/blooming/1752551434626.jpeg', caption: 'Outdoor screen · dusk' },
      ],
      tag: 'Featured · Bunjil Place',
      title: 'MAGI Floral Animations · Bunjil Place',
      meta: 'Bunjil Place Outdoor Screen · 2 Patrick Northeast Drive, Narre Warren · Jul 1–31, 2024 · 3pm & 7pm daily',
      blurb:
        "Student animators from RMIT University's Master of Animation, Games and Interactivity responding to the Floribunda exhibition. Second Blooming showed alongside Flare by Cao Xuefan.",
      url: 'https://www.bunjilplace.com.au/magi-floral-animations',
      runs: [
        { venue: 'Bunjil Place · Outdoor Screen', city: 'Narre Warren, AU', date: 'Jul 2024', status: 'Featured' },
      ],
      upcoming: [
        { venue: 'SIGGRAPH Asia · Art Gallery', city: 'TBA', date: '2026', status: 'In submission' },
      ],
    },
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
  bgImage: '/assets/work/pubflift-ad.jpg',
  caseStudy: {
    coverImage: '/assets/work/pubflift-ad.jpg',
    reelUrl: '/assets/case-studies/pubflift-ad/reel.mp4',
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
    reelUrl: '/assets/case-studies/victor-mourad/reel2.mp4',
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
  bgImage: '/assets/work/lucid-logo-anim.jpg',
  caseStudy: {
    coverImage: '/assets/work/lucid-logo-anim.jpg',
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
  bgImage: '/assets/work/hype-edu-anim.jpg',
  caseStudy: {
    coverImage: '/assets/work/hype-edu-anim.jpg',
    reelUrl: '/assets/case-studies/hype-edu-anim/reel.mp4',
    gallery: [
      '/assets/case-studies/hype-edu-anim/01.jpg',
      '/assets/case-studies/hype-edu-anim/02.jpg',
      '/assets/case-studies/hype-edu-anim/03.jpg',
      '/assets/case-studies/hype-edu-anim/04.jpg',
      '/assets/case-studies/hype-edu-anim/05.jpg',
      '/assets/case-studies/hype-edu-anim/06.jpg',
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
  bgImage: '/assets/work/lucid-construction.jpg',
  caseStudy: {
    coverImage: '/assets/work/lucid-construction.jpg',
    reelUrl: '/assets/case-studies/lucid-construction/reel.mp4',
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
  bgImage: '/assets/work/amazonicas-logo.jpg',
  caseStudy: {
    coverImage: '/assets/work/amazonicas-logo.jpg',
    reelUrl: '/assets/case-studies/amazonicas-logo/reel.mp4',
    gallery: [
      '/assets/case-studies/amazonicas-logo/01.jpg',
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
  bgImage: '/assets/work/interactive-poem.jpg',
  caseStudy: {
    coverImage: '/assets/work/interactive-poem.jpg',
    reelUrl: '/assets/case-studies/interactive-poem/reel.mp4',
    gallery: [
      '/assets/case-studies/interactive-poem/01.jpg',
      '/assets/case-studies/interactive-poem/02.jpg',
      '/assets/case-studies/interactive-poem/03.jpg',
      '/assets/case-studies/interactive-poem/04.jpg',
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
  bgImage: '/assets/case-studies/suprafresh/hero.jpg',
  caseStudy: {
    coverImage: '/assets/case-studies/suprafresh/hero.jpg',
    liveUrl: 'https://supafreshmarket.com.au/',
    gallery: [
      '/assets/case-studies/suprafresh/01.jpg',
      '/assets/case-studies/suprafresh/02.jpg',
      '/assets/case-studies/suprafresh/03.jpg',
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
  layout: 'cinema',
  kind: 'creative',
  badges: ['MAGI MASTER’S PROJECT', 'CASE STUDY', 'MOBILE GAME'],
  title: 'Library of Emotions',
  subtitle: 'Master of Animation, Games & Interactivity · RMIT · 2025 — ongoing',
  description:
    "A mobile wellness game set inside a magical paper library. Choose a feeling, embody it through a small ritual — fold, breathe, tear, unstitch — and the library grows. Started in MAGI Studio 3, rebuilt as a live app, and now travelling through six conferences.",
  cta: 'View Case Study',
  meta: 'UNITY → EXPO · REACT NATIVE',
  duration: '03:12',
  bgImage: '/assets/case-studies/library-of-emotions/cover.jpg',
  overlay: 'dark',
  theme: 'library',
  caseStudy: {
    coverImage: '/assets/case-studies/library-of-emotions/cover.jpg',
    liveUrl: 'https://libraryofemotions.netlify.app/onboarding',
    client: 'Master of Animation, Games & Interactivity (MAGI) · RMIT University',
    year: '2025 — ongoing',
    role: 'Game Designer · Developer · Illustrator',
    tools: ['Unity', 'C#', 'Expo', 'React Native', 'Procreate', 'Photoshop'],
    tags: ['Mobile Game', 'Emotional Literacy', 'Mental Health Literacy', 'Reflective Play', 'MAGI'],
    overview:
      "A mobile wellness game set inside a magical paper library. Players choose an emotional state and physically embody it through phone sensors — folding, shaking, breathing, tilting — and every session adds a coloured book to the shelf. Emotional naming is the entry point into play, not a separate logging task.",

    eyebrow: 'MASTER’S PROJECT · MAGI STUDIO 3 · RMIT UNIVERSITY',
    placeLine: 'MELBOURNE · MAGI STUDIO 3 · 2025 — ONGOING · LIVE AT LIBRARYOFEMOTIONS.NETLIFY.APP',
    inquiry:
      "In what ways can game design foster mental health literacy by transforming tools such as mood tracking, reflection and mindfulness into symbolic, interactive mechanics that help players recognise emotions, build vocabulary and develop empathy?",

    // The Core Book — the game's mascot, exactly as drawn in the app.
    // Lines are the current onboarding script (content/coreBook.ts, V5.2.1).
    coreBook: {
      image: '/assets/case-studies/library-of-emotions/corebook-character.png',
      name: 'The Core Book',
      lines: [
        'Welcome, traveler.',
        'I am the Core Book, and I have been assigned to this Library planet.',
        'My mission is to fill these shelves with everything there is to know about human emotions.',
        'The truth is, I do not understand them very well yet. But I believe you can help me.',
        'I have the data, but I need your human perspective to bring it to life.',
        'Visit me each day, share your thoughts and feelings through small quests, and together we will grow this library page by page.',
      ],
      screens: [
        { src: '/assets/case-studies/library-of-emotions/app-welcome.jpg',      caption: 'Onboarding · tap through the Core Book’s intro' },
        { src: '/assets/case-studies/library-of-emotions/app-first-choice.jpg', caption: 'Day one · “How do you feel today?”' },
        { src: '/assets/case-studies/library-of-emotions/app-hub-day1.jpg',     caption: 'The hub · Happy and Sad unlock first' },
      ],
    },

    // The six core emotions and their rituals, as implemented. Copy is lifted
    // from the app's content layer so the case study never drifts from the game.
    emotions: [
      {
        id: 'happy',
        label: 'Happy',
        colour: '#f2d33a',
        ink: '#2a2200',
        stamp: '/assets/case-studies/library-of-emotions/stamp-joy.png',
        sensor: 'Touch · drag',
        technique: 'Gratitude journaling',
        mechanic: 'Gratitude Origami',
        tagline: 'Joy deserves to be witnessed.',
        body:
          "Write a small thought of gratitude — “a small thing that made you smile…” — then tap to fold the paper, crease by crease, until it pops into a star. The star flies to the Jar of Gratitude, where every one you have ever folded lives.",
        subs: ['Content', 'Excited', 'Grateful', 'Playful', 'Proud', 'Hopeful', 'In awe'],
        screens: [
          { src: '/assets/case-studies/library-of-emotions/app-happy-write.jpg', caption: 'Write it down, then fold it into a star to keep' },
          { src: '/assets/case-studies/library-of-emotions/screen-happy-note.jpg', caption: 'Unity prototype · the note mid-fold' },
        ],
      },
      {
        id: 'relaxed',
        label: 'Relaxed',
        colour: '#9be28e',
        ink: '#0d2b0a',
        stamp: '/assets/case-studies/library-of-emotions/stamp-calm.png',
        sensor: 'Vibration · slow drag',
        technique: 'Mindfulness',
        mechanic: 'Mindful Unstitching',
        tagline: 'Stillness is its own kind of wisdom.',
        body:
          "Tap to zoom into a knitted blanket, choose one thread and follow it slowly until the knot comes loose. There is no hurry here. “A thread pulled loose. The library remembers this softness.”",
        subs: ['Calm', 'Peaceful', 'Rested', 'Serene', 'At ease', 'Still', 'Safe in my body'],
        screens: [
          { src: '/assets/case-studies/library-of-emotions/relaxed-blanket.jpg', caption: 'The knitted blanket' },
          { src: '/assets/case-studies/library-of-emotions/relaxed-threads.jpg', caption: 'Zoomed in · follow one thread' },
          { src: '/assets/case-studies/library-of-emotions/screen-love-yarn.jpg', caption: 'Unity prototype · the yarn' },
        ],
      },
      {
        id: 'love',
        label: 'Love & Trust',
        colour: '#9a4dff',
        ink: '#ffffff',
        stamp: '/assets/case-studies/library-of-emotions/stamp-love.png',
        sensor: 'Tilt · gyroscope',
        technique: 'Connection & self-compassion',
        mechanic: 'Paper Plane',
        tagline: 'What you feel is real and it matters.',
        body:
          "Write a message to someone, or to yourself. Draw a little spell to ride inside it. Fold it into a plane, tilt the phone and let it fly. “Someone may need exactly those words.”",
        subs: ['Tender', 'Connected', 'Caring', 'Warm', 'Affectionate'],
        screens: [
          { src: '/assets/case-studies/library-of-emotions/screen-happy-plane.jpg', caption: 'The plane, released into the stars' },
        ],
      },
      {
        id: 'sad',
        label: 'Sad',
        colour: '#5ee3d8',
        ink: '#032a28',
        stamp: '/assets/case-studies/library-of-emotions/stamp-sadness.png',
        sensor: 'Shake · accelerometer',
        technique: 'Expressive writing',
        mechanic: 'Expressive Writing & Release',
        tagline: 'Sadness is not weakness. It is a sign you care.',
        body:
          "Write what is hurting, freely, at least a few lines. When you are ready, drag to tear the page, shake the phone to crumple it, then shake or tap again to burn it away. “The fire does not erase the feeling. It only helps carry part of its weight.”",
        subs: ['Lonely', 'Hurt', 'Disappointed', 'Heavy', 'Regretful', 'Grieving', 'Tender'],
        screens: [
          { src: '/assets/case-studies/library-of-emotions/app-sad-write.jpg',    caption: 'Write what hurt today' },
          { src: '/assets/case-studies/library-of-emotions/screen-angry-shred.jpg', caption: 'Drag to shred the paper' },
          { src: '/assets/case-studies/library-of-emotions/screen-angry-pieces.jpg', caption: 'What is left' },
        ],
      },
      {
        id: 'angry',
        label: 'Angry',
        colour: '#e23b3b',
        ink: '#ffffff',
        stamp: '/assets/case-studies/library-of-emotions/stamp-anger.png',
        sensor: 'Microphone · breath',
        technique: '4-7-8 breathing',
        mechanic: 'Breathing Lanterns',
        tagline: 'Anger is information. Let it speak without burning you.',
        body:
          "Breathe in for four to fill the lantern with light, hold for seven while it glows, breathe out for eight and let it float away. Four cycles, about eighty-four seconds. “It has lifted. Not gone, but changed.”",
        subs: ['Frustrated', 'Irritated', 'Jealous', 'Resentful', 'Defensive', 'Outraged', 'Bitter'],
        screens: [
          { src: '/assets/case-studies/library-of-emotions/app-angry-intro.jpg',   caption: '“Breathe with me”' },
          { src: '/assets/case-studies/library-of-emotions/app-angry-breathe.jpg', caption: 'Breathe in · 4s' },
          { src: '/assets/case-studies/library-of-emotions/screen-relaxed-lantern.jpg', caption: 'Unity prototype · the lantern' },
        ],
      },
      {
        id: 'fear',
        label: 'Fear',
        colour: '#e8a04a',
        ink: '#2b1600',
        stamp: '/assets/case-studies/library-of-emotions/stamp-fear.png',
        sensor: 'Camera · AR',
        technique: 'Grounding (5-4-3-2-1)',
        mechanic: '5-4-3-2-1 Bingo',
        tagline: 'Fear is real. You are safe here, right now.',
        body:
          "A sensory treasure hunt: five things you can see, four you can touch, three you can hear, two you can smell, one you can taste. Tap a square, draw what you notice, and the card lights up cell by cell. “The room is clearer now.”",
        subs: ['Anxious', 'Nervous', 'Overwhelmed', 'Insecure', 'Worried'],
        screens: [
          { src: '/assets/case-studies/library-of-emotions/screen-fear-card.jpg',  caption: 'The Fear card opens' },
          { src: '/assets/case-studies/library-of-emotions/screen-fear-bingo.jpg', caption: '5-4-3-2-1 Bingo' },
        ],
      },
    ],

    // Screens from the live Expo build (V5.2.1) and the Unity prototype.
    screens: [
      { src: '/assets/case-studies/library-of-emotions/app-welcome.jpg',       caption: 'Onboarding · the Core Book' },
      { src: '/assets/case-studies/library-of-emotions/app-hub-day1.jpg',      caption: 'Day 1 hub · Happy and Sad open first' },
      { src: '/assets/case-studies/library-of-emotions/app-happy-write.jpg',   caption: 'Happy · Gratitude Origami' },
      { src: '/assets/case-studies/library-of-emotions/app-sad-write.jpg',     caption: 'Sad · Expressive Writing' },
      { src: '/assets/case-studies/library-of-emotions/app-angry-breathe.jpg', caption: 'Angry · Breathing Lanterns' },
      { src: '/assets/case-studies/library-of-emotions/app-rewards.jpg',       caption: 'Rewards · the candle fills with each log' },
      { src: '/assets/case-studies/library-of-emotions/app-shelf.jpg',         caption: 'Your Library · each book is a day' },
      { src: '/assets/case-studies/library-of-emotions/app-stickers.jpg',      caption: 'Sticker sheet · milestones' },
      { src: '/assets/case-studies/library-of-emotions/app-sky.jpg',           caption: 'Constellations · a star per ritual' },
      { src: '/assets/case-studies/library-of-emotions/screen-picker.jpg',     caption: 'Unity prototype · the six stamps' },
      { src: '/assets/case-studies/library-of-emotions/screen-fear-bingo.jpg', caption: 'Unity prototype · Fear bingo' },
      { src: '/assets/case-studies/library-of-emotions/app-support.jpg',       caption: 'Support · always one tap away' },
    ],

    // From prototype to app — how the game is built now.
    app: {
      eyebrow: 'THE APP · V5.2.1',
      title: 'From a Unity studio prototype to a live Expo app',
      body:
        "Studio 3 ended with a Unity prototype of the six rituals. In 2026 the game was rebuilt from scratch as an Expo / React Native app so it could ship to the web, iOS and Android from one codebase, with the whole script in a content layer and the state in small stores. The demo build at libraryofemotions.netlify.app is what reviewers and playtesters hold.",
      sensors: [
        { label: 'Happy',        sensor: 'Touch / drag',    ritual: 'Origami folding' },
        { label: 'Relaxed',      sensor: 'Vibration',       ritual: 'Mindful unstitching' },
        { label: 'Love & Trust', sensor: 'Tilt / gyro',     ritual: 'Paper plane folding' },
        { label: 'Sad',          sensor: 'Shake',           ritual: 'Paper crumpling and burning' },
        { label: 'Angry',        sensor: 'Mic / breath',    ritual: 'Breath detection' },
        { label: 'Fear',         sensor: 'Camera / AR',     ritual: 'Scavenger hunt' },
      ],
      progression: [
        { day: 'Day 1',  body: 'Happy and Sad unlock. First book on the shelf, first wax in the candle.' },
        { day: 'Day 2',  body: 'Angry and Relaxed open. Four feelings.' },
        { day: 'Day 5',  body: 'Love & Trust and Fear. All six core feelings within reach.' },
        { day: 'Day 10', body: 'First sub-emotion tier: Content, Excited, Grateful, Lonely, Hurt…' },
        { day: 'Day 15', body: 'Second tier. A wider palette.' },
        { day: 'Day 30', body: 'Full vocabulary: seven shades per core feeling.' },
      ],
      rewards: [
        { label: 'Candle → wax seal',  body: 'Every log adds wax. Ten rituals fill a candle and seal a chapter; the seal remembers which feelings filled it.' },
        { label: 'Jar of Gratitude',   body: 'Every folded star stays, with the thought that made it.' },
        { label: 'Your Library',       body: 'A Year-in-Pixels shelf: each book is a day, its colour the feeling that filled it. Tap a book to re-read that day.' },
        { label: 'Constellations',     body: 'Each ritual places a star in your sky, coloured by emotion; same-feeling runs are joined by faint lines.' },
        { label: 'Stickers',           body: 'First Day, 5 Days Strike, 10 Days Strike, Full Spectrum: you sat with every feeling at least once.' },
        { label: 'Support, always',    body: 'A support screen with emergency and counselling lines is one tap away on every screen.' },
      ],
      stack: ['Expo 54 · React Native 0.81', 'expo-router · file-based routes', 'Reanimated 4 · gesture-handler', 'expo-haptics · expo-sensors · expo-audio', 'zustand stores · AsyncStorage', 'Web on Netlify · iOS/Android via EAS'],
    },

    loop: [
      { num: '01', title: 'Prompt', body: 'The mascot asks: “How do you feel today?” There is no wrong answer here.' },
      { num: '02', title: 'Emotion choice', body: 'Select from the feelings unlocked so far. Naming is the entry point into play.' },
      { num: '03', title: 'Symbolic interaction', body: 'A phone-sensor ritual embodies the feeling: fold, unstitch, tilt, tear, breathe, notice.' },
      { num: '04', title: 'Reflection', body: 'A line from the Core Book, a book on the shelf, a little wax in the candle.' },
    ],
    loopImage: { src: '/assets/case-studies/library-of-emotions/slide-loop.jpg', caption: 'Core interaction loop · Unity prototype, Studio 3 folio' },

    foldFrames: [
      '/assets/case-studies/library-of-emotions/fold-01.png', '/assets/case-studies/library-of-emotions/fold-02.png', '/assets/case-studies/library-of-emotions/fold-03.png', '/assets/case-studies/library-of-emotions/fold-04.png', '/assets/case-studies/library-of-emotions/fold-05.png',
      '/assets/case-studies/library-of-emotions/fold-06.png', '/assets/case-studies/library-of-emotions/fold-07.png', '/assets/case-studies/library-of-emotions/fold-08.png', '/assets/case-studies/library-of-emotions/fold-09.png', '/assets/case-studies/library-of-emotions/fold-10.png',
    ],

    phases: [
      {
        num: '01',
        category: 'INQUIRY · MAGI STUDIO 3 · 2025',
        title: 'From therapy to literacy',
        body:
          "The project started in the Master of Animation, Games & Interactivity as a wellbeing game and deliberately moved away from a therapeutic framing. The refined question is about literacy: can players learn the language of emotions through repeated symbolic encounters, so that playing becomes a way of learning?",
        items: [
          'Mental health literacy, not treatment',
          'Emotional granularity as the central design concern',
          'Grounded in Russell’s circumplex, Ekman, Plutchik and Barrett’s constructed emotion',
        ],
        media: { src: '/assets/case-studies/library-of-emotions/slide-first-iteration.jpg', caption: 'First inquiry and first iteration · references from SuperBetter to Florence' },
      },
      {
        num: '02',
        category: 'CONTEXT',
        title: 'Games as reflective spaces',
        body:
          "Sits in games for wellbeing and serious games, next to practitioners who use play for reflection rather than competition. Kind Words shows anonymous sharing can build empathy; Florence shows minimal symbolic mechanics can carry complex feeling; Kinder World shows low-effort rituals can support self-reflection.",
        items: ['Kind Words · Popcannibal', 'Florence · Mountains', 'Kinder World · Pixelfairy', 'Games for Health Journal · evidence base'],
      },
      {
        num: '03',
        category: 'METHOD',
        title: 'Identify, translate, prototype, evaluate',
        body:
          "Each mechanic follows a four-step pipeline: identify a wellbeing practice grounded in evidence, translate it into a symbolic mobile interaction, prototype and revise for clarity, tone and fit, then evaluate whether the interaction feels right. One mechanic per core emotion; sub-emotions branch from the same mechanic as tiers unlock.",
        items: ['Mental health tools → symbolic mechanics', 'Emotion granularity · gamification · iteration', 'Mobile-based interaction: tap, hold, drag, shake, tilt, breathe', 'All mechanics reviewed with a psychologist'],
        media: [
          { src: '/assets/case-studies/library-of-emotions/slide-unity-early.jpg', caption: 'Early Unity passes · constellation, shredder, bingo' },
          { src: '/assets/case-studies/library-of-emotions/sticker-sheet.png',     caption: 'Stamp silhouettes · the sticker sheet' },
        ],
      },
      {
        num: '04',
        category: 'PRODUCTION · UNITY · STUDIO 3',
        title: 'The studio prototype',
        body:
          "Built in Unity (C#) with hand-painted assets from Procreate, Photoshop and Illustrator. Eight weeks from reframed inquiry to a polished vertical slice: two mini-games first, four more core mechanics, then the Library system that accumulates stamps, then naming, sub-emotion variants and the feedback loop, then playtests and polish for the MAGI Expo.",
        items: ['Wk 6–7 · reframe + rebuild two rituals', 'Wk 8 · the other four', 'Wk 9 · Library / mural system', 'Wk 10 · naming, sub-emotions, feedback loop', 'Wk 11–12 · playtests, UI polish, sound, intro, credits'],
        media: [
          { src: '/assets/case-studies/library-of-emotions/sky.jpg',          caption: 'Library planet · painted sky backdrop' },
          { src: '/assets/case-studies/library-of-emotions/library-grid.jpg', caption: 'The shelf · slots fill with stamps over time' },
        ],
      },
      {
        num: '05',
        category: 'PRODUCTION · EXPO · 2026',
        title: 'Rebuilt as a shippable app',
        body:
          "Rebuilt from scratch as an Expo / React Native app: the whole script in a content layer, the six rituals as feature folders, state in small stores, haptics and sensors where the phone can embody the feeling. Progression, rewards, archives and a support screen were added build by build, each one a numbered demo the testers could name.",
        items: ['V1 → V5.2.1 demo builds', 'Progression: Day 1 / 2 / 5, sub-emotion tiers at 10 / 15 / 30', 'Candle → wax seal, jar, shelf, constellation, stickers', 'Web on Netlify; iOS and Android through EAS'],
        media: [
          { src: '/assets/case-studies/library-of-emotions/app-shelf.jpg', caption: 'Your Library · the Year-in-Pixels shelf' },
          { src: '/assets/case-studies/library-of-emotions/app-sky.jpg',   caption: 'Constellations · a star per ritual' },
        ],
      },
      {
        num: '06',
        category: 'OUTCOMES',
        title: 'A playable game, a paper, a programme',
        body:
          "A repeat-playable game with six symbolic rituals and a growing library. The design approach was peer-reviewed at FDG ’26 (Copenhagen), and the project now anchors a wider programme: a full paper at IEEE CoG, an LNCS paper and live playtest workshop at ISAGA, posters at JCSG and Meaningful Play, a SIGGRAPH Asia poster submission, and a psychology-oriented study protocol with Daniel Zarate at PsyGames. It is also the pilot case the PhD builds on.",
        items: ['Six rituals + Library system, live on the web', 'FDG ’26 short paper · ACM · open access', 'Pilot / precedent case for the doctoral research'],
        media: { src: '/assets/case-studies/library-of-emotions/quilt.jpg', caption: 'The knitted blanket · the project’s key art' },
      },
    ],

    conferences: [
      { venue: 'FDG ’26',          where: 'Copenhagen',    format: 'Late-breaking work · poster · ACM proceedings', status: 'Published' },
      { venue: 'IEEE CoG 2026',    where: 'IEEE',          format: 'Full paper · oral · IEEE proceedings',          status: 'Accepted · best-paper nomination' },
      { venue: 'JCSG 2026',        where: 'Serious Games', format: 'Poster paper',                                   status: 'Accepted' },
      { venue: 'ISAGA 2026',       where: 'LNCS',          format: 'Scientific paper + Outside-the-Box live playtest workshop', status: 'Accepted' },
      { venue: 'Meaningful Play',  where: '2026',          format: 'Poster',                                         status: 'Accepted' },
      { venue: 'PsyGames 2026',    where: 'with D. Zarate', format: 'Full paper · study protocol on emotional naming', status: 'Accepted with revisions' },
    ],

    paper: {
      eyebrow: 'PEER-REVIEWED · FDG ’26',
      title: 'Designing a Practice-Based Mobile Prototype for Mental Health Literacy through Emotional Granularity and Reflective Play',
      venue: 'Proceedings of the 21st International Conference on the Foundations of Digital Games · ACM · Copenhagen, Denmark · pp. 1–4',
      doi: '10.1145/3815598.3815672',
      doiUrl: 'https://doi.org/10.1145/3815598.3815672',
      researchUrl: '/research/emotional-granularity-reflective-play',
      projectUrl: '/research/library-of-emotions',
      note:
        'The game is intentionally modest: not a validated intervention, not therapy or diagnosis. It demonstrates how emotional awareness may be supported through affective, interactive mobile design without clinical framing.',
    },

    credits: [
      { label: 'Year',        value: '2025 — ongoing' },
      { label: 'Context',     value: 'Master of Animation, Games & Interactivity (MAGI) · Studio 3 · School of Design · RMIT University' },
      { label: 'Role',        value: 'Game Designer · Developer · Illustrator' },
      { label: 'Tools',       value: 'Unity · C# → Expo · React Native · Reanimated · Procreate · Photoshop' },
      { label: 'Supervision', value: 'Sam Hains · Uyen Nguyen · Andy Buchanan · Jadd Zayed' },
      { label: 'Published',   value: 'FDG ’26 · ACM · DOI 10.1145/3815598.3815672' },
    ],

    closing: {
      title: 'The library is never finished.',
      tagline: 'Every visit adds a book. Every book is a word the player did not have before.',
    },
  },
}

const disseminationDigestCase = {
  id: 'dissemination-digest',
  layout: 'cinema',
  kind: 'creative',
  badges: ['WEB APP', 'CASE STUDY', 'RESEARCH TOOL'],
  title: 'Dissemination Digest',
  subtitle: 'Web app · built, shipped and presented · 2026',
  description:
    "A tool I built out of my own PhD dissemination tracker: a three-step form becomes a tailored list of festivals, grants, residencies and conferences, and a logged-in workspace tracks every application after. Presented as a poster at the RMIT SoTL conference.",
  cta: 'View Case Study',
  meta: 'HTML · CLOUDFLARE · NODE',
  duration: '01:30',
  bgImage: '/assets/case-studies/dissemination-digest/poster.svg',
  overlay: 'dark',
  theme: 'digest',
  caseStudy: {
    coverImage: '/assets/case-studies/dissemination-digest/poster.svg',
    liveUrl: 'https://dissemination.eggn.io/',
    client: 'Own tool · eggn.io',
    year: '2026',
    role: 'Designer · Developer · Researcher',
    tools: ['HTML/CSS/JS', 'Cloudflare Pages', 'Node.js', 'Claude API', 'Notion', 'Docker'],
    tags: ['Web App', 'Research Tool', 'Dissemination', 'PhD'],
    overview:
      "Research students and creative practitioners spend a disproportionate amount of time hunting for dissemination opportunities that are scattered, eligibility-locked and always changing. I had already built a Notion system to track mine. Dissemination Digest turns that system into a web app: describe the work once, get a matched list, then track what you apply to.",

    logo: '/assets/case-studies/dissemination-digest/logo.png',
    version: 'V3.4.7',

    origin: {
      eyebrow: 'WHERE IT CAME FROM',
      title: 'It started as my own Notion dissemination tracker',
      body:
        "During the MAGI studios and the first year of the PhD I kept a Dissemination Master Table in Notion: every conference, festival, grant and residency relevant to Library of Emotions, with deadlines, formats, costs and outcomes. Then a cheat sheet of everything I had to learn the hard way — what a poster actually is, what camera-ready means, how AoE deadlines work. Other students kept asking for it. The web app is that database and that cheat sheet, made usable by someone who is not me.",
      items: [
        'Dissemination Master Table · Notion database of venues and calls',
        'Games and Animation Dissemination Hubs · templates other students duplicate',
        'Dissemination Cheat Sheet · the bits that trip everyone up the first time',
      ],
    },

    // Everything that differs between the two personas lives here — the same
    // idea as the product's single MODES object.
    modes: {
      creative: {
        label: 'Creative',
        emoji: '🎨',
        phrase: 'festivals, grants & residencies',
        suffix: 'for your creative project.',
        cards: [
          { tag: 'Festival',  name: 'Ars Electronica',                 meta: 'Linz · digital art · closes Mar 6' },
          { tag: 'Grant',     name: 'Australia Council Creative Fund', meta: 'AU · up to $30k · opens Apr 2' },
          { tag: 'Residency', name: 'Rupert',                          meta: 'Vilnius, Lithuania · 3 months · rolling' },
        ],
        step1: 'What are you making?',
        example: { name: 'Library of Emotions', desc: 'A mobile game where naming a feeling precisely is the mechanic. Six symbolic micro-games, one per core emotion.' },
        chips1Label: 'Disciplines',
        chips1: ['Games', 'Animation', 'XR / VR', 'Sound', 'Film', 'Illustration'],
        chips2Label: 'Submission formats',
        chips2: ['Festivals', 'Residencies', 'Grants', 'Awards', 'Showcases', 'Conferences'],
        stages: ['Student', 'Emerging', 'Mid-career', 'Established', 'Hobbyist'],
        tips: ['Searching for festivals…', 'Looking up grant deadlines…', 'Checking residency eligibility…', 'Filtering by your country…', 'Writing your digest…'],
        subject: '🔍 Dissemination Digest',
        result: [
          { tag: 'Festival',   name: 'Freeplay Independent Games Festival', meta: 'Melbourne · expressive & experimental games · Oct', why: 'Matches: games · Australia · emerging' },
          { tag: 'Conference', name: 'CHI PLAY · Work-in-Progress',         meta: 'International · playable research prototypes',   why: 'Matches: research · mental health · prototype' },
          { tag: 'Grant',      name: 'VicScreen · Digital Games',           meta: 'Victoria · open year-round · up to AU$300k',   why: 'Matches: Victorian resident · pre-production' },
        ],
      },
      startup: {
        label: 'Startup',
        emoji: '🚀',
        phrase: 'accelerators, grants & pitch comps',
        suffix: 'for your startup.',
        cards: [
          { tag: 'Accelerator', name: 'On Deck Founders',                        meta: 'Remote · 10 weeks · apps open' },
          { tag: 'Grant',       name: 'Climate Tech R&D (Breakthrough)',          meta: 'Global · up to $250k · closes May 15' },
          { tag: 'Pitch comp',  name: 'TechCrunch Disrupt Startup Battlefield',  meta: 'SF · $100k prize · rolling' },
        ],
        step1: 'What are you building?',
        example: { name: 'Eggn.io', desc: 'AI for social impact: accessible, multilingual, customisable digital assistants for education, communities and research.' },
        chips1Label: 'Verticals',
        chips1: ['SaaS', 'Hardware', 'Climate', 'Health', 'AI / ML', 'Creator tools'],
        chips2Label: 'Opportunity types',
        chips2: ['Accelerators', 'Pitch comps', 'Demo days', 'Grants', 'Fellowships', 'R&D programs'],
        stages: ['Idea', 'Pre-product', 'Beta', 'Revenue', 'Funded'],
        tips: ['Searching open accelerators…', 'Looking up pitch comps with cash prizes…', 'Checking founder fellowships…', 'Excluding series-A-and-later programs…', 'Writing your digest…'],
        subject: '🚀 Opportunity Digest',
        result: [
          { tag: 'Competition', name: 'World Summit Awards 2026',          meta: 'Global · UN/UNESCO member states · free', why: 'Matches: digital, social, impact · open to international applicants' },
          { tag: 'Accelerator', name: 'HAX (SOSV) · Hard Tech',            meta: 'Newark, NJ · rolling · equity',           why: 'Matches: tech, health · one of your formats' },
          { tag: 'Competition', name: 'She Loves Tech Global 2026',        meta: '70+ countries incl. Australia · free',    why: 'Matches: tech, startup · open to international applicants' },
        ],
      },
    },

    // Two engines. The free snapshot never calls a model.
    tiers: [
      {
        tier: 'FREE · ONE SNAPSHOT',
        engine: 'Curated database · deterministic matching',
        body:
          "The free digest is drawn from the curated opportunity database I maintain — the Notion dissemination tables, exported and normalised into the app’s own catalog. Matching is a scored, deterministic function of the profile: discipline, format, career stage, country eligibility and deadline window. No model call, so it costs nothing, is reproducible, and cannot invent a deadline.",
        points: ['Catalog refreshed by hand from the Notion tables', 'Match % against a fixed ceiling, with the reason spelled out', 'Opportunity ids from category + type + name + url, because urls collide'],
      },
      {
        tier: 'RECURRING TIERS',
        engine: 'Claude + live web search',
        body:
          "For the recurring tiers the same profile becomes a long, parameterised prompt. Claude runs up to ten live web searches, filters by eligibility and date, and writes the digest as HTML — the curated catalog plus whatever is open on the web that week. Delivered on page and by email, weekly to monthly, for six months.",
        points: ['buildPrompt() is parameterised by mode and exported', 'Search capped at ten per digest to cap the bill', 'Password-gated preview before a plan is granted by hand'],
      },
    ],

    // Architecture — one request end to end.
    flow: [
      { id: 'form',   label: '3-step form',        sub: 'single index.html · no build step' },
      { id: 'match',  label: 'Match or prompt',    sub: 'free: scored catalog · paid: buildPrompt()' },
      { id: 'claude', label: 'Claude + web search', sub: 'paid tiers only · ≤10 live searches' },
      { id: 'digest', label: 'HTML digest',         sub: 'filtered by eligibility + date' },
      { id: 'out',    label: 'On page · email',     sub: 'copy rich / HTML / text · print · Resend' },
    ],

    // Build timeline, from the repo history.
    timeline: [
      { date: 'Jul 2026',     title: 'One file, one function',            body: 'A single index.html form and one Cloudflare Pages Function that calls Claude with the web_search tool and emails the result through Resend.' },
      { date: 'Jul 2026',     title: 'Creative ↔ Startup modes',          body: 'Everything that differs between the two personas moved into one MODES object on both ends: labels, chips, stages, loading tips, hero copy and the prompt itself.' },
      { date: 'Aug 2026',     title: 'The workspace',                     body: 'Magic-link accounts, a six-method store interface over JSON files, the applications CRM, the scored opportunity feed, the ICS calendar and the cheat sheet. Node + Express in Docker on Coolify, with a mounted volume.' },
      { date: 'Aug 2026',     title: 'Free tier from the curated catalog', body: 'The anonymous digest stopped calling the model. Deterministic matching against the catalog, password-gated preview of the advanced tier, and a fix for a reasoning leak in the prompt.' },
      { date: 'Aug–Sep 2026', title: 'V3.4.7 · pricing, analytics, polish', body: 'Six-month recurring tiers, optional Umami analytics behind /api/config, friendlier send-failure messages, favicon and version badge in the topbar.' },
      { date: '2026',         title: 'SoTL RMIT · poster',                 body: 'Presented as a poster at the RMIT Scholarship of Teaching and Learning conference, as a response to how research students actually find and track dissemination opportunities.' },
    ],

    stack: [
      { group: 'FRONTEND', name: 'Vanilla HTML · CSS · JS',    role: 'Landing, wizard and result in one file; the workspace in app.html + app.js with a strict no-innerHTML rule.' },
      { group: 'HOSTING',  name: 'Cloudflare Pages',          role: 'The anonymous digest. Free, fast, one-command deploy.' },
      { group: 'BACKEND',  name: 'Pages Function',             role: 'Validation, honeypot, buildPrompt(), the Claude call and Resend email in one JS file.' },
      { group: 'DATA',     name: 'Curated catalog from Notion', role: 'The dissemination tables normalised into the app’s catalog; deterministic scoring for the free tier and the workspace feed.' },
      { group: 'LLM',      name: 'Claude API',                 role: 'claude-sonnet-4-6 with the web_search tool for the recurring tiers only.' },
      { group: 'ACCOUNTS', name: 'Node · Express · Docker',    role: 'The workspace on Coolify. Stateless sessions, bearer token, JSON-file store behind a six-method interface so SQLite is a one-file swap.' },
      { group: 'QUALITY',  name: 'node --test',                role: 'Matcher and API test suites. The dashboard cannot hallucinate a deadline because nothing in it calls a model.' },
    ],

    workspace: {
      eyebrow: 'THE OTHER HALF · LOGGED IN',
      title: 'Projects → Opportunities → Applications → Outcomes',
      body:
        "The one-shot digest stops being useful the moment you actually apply to something. The workspace is where I live during a semester: describe a project once, get a scored feed of opportunities with the reason each one matches, save or dismiss, track every submission with its milestones, and read the cheat sheet when a reviewer asks for a rebuttal.",
      shots: [
        { src: '/assets/case-studies/dissemination-digest/app-dashboard.jpg',     caption: 'Dashboard · what needs you, ordered by how soon it matters' },
        { src: '/assets/case-studies/dissemination-digest/app-projects.jpg',      caption: 'Projects · describe it once, everything hangs off it' },
        { src: '/assets/case-studies/dissemination-digest/app-opportunities.jpg', caption: 'Opportunities · match % with “why it matches”, save / applying / not interested' },
        { src: '/assets/case-studies/dissemination-digest/app-applications.jpg',  caption: 'Applications · every submission, where it is up to, what came of it' },
        { src: '/assets/case-studies/dissemination-digest/app-cheatsheet.jpg',    caption: 'Cheat sheet · the Notion guide, wired in as contextual help' },
      ],
      features: [
        { label: 'Scored feed',        body: 'Deterministic match % against a fixed ceiling so a number means the same thing next month.' },
        { label: 'Dismissals ask why', body: '“Too expensive” and “can’t travel” are filter bugs; “not relevant” is a matching bug. The most useful signal the tool collects.' },
        { label: 'Applications CRM',   body: 'Milestone dates and links per application. Deleting a project never erases an accepted paper.' },
        { label: 'ICS calendar',       body: 'Every tracked deadline, subscribable from any calendar app.' },
        { label: 'Portfolio export',   body: 'Accepted outputs exported as a CV section.' },
        { label: 'Cheat sheet',        body: 'Posters, paper types, AoE deadlines, camera-ready, rebuttals, self-plagiarism, metrics.' },
      ],
      plan: 'Free plan: 1 project · 10 applications · 25 saved. Recurring tiers are unlocked by access password or by hand until a payment integration is worth building.',
    },

    presented: {
      eyebrow: 'PRESENTED',
      title: 'RMIT Scholarship of Teaching and Learning conference · poster',
      body:
        "The tool was presented as a poster at RMIT’s SoTL conference: the problem (how research students find and track dissemination), the Notion system that grew around it, and the web app that makes it reusable by others. It is also the system I run my own PhD dissemination through — the Library of Emotions submissions on this site were tracked in it.",
    },

    decisions: [
      { q: 'The free tier never calls the model',                    a: 'A snapshot from the curated catalog is free to serve, reproducible, and cannot invent a deadline. The model and live search are reserved for the recurring tiers that pay for them.' },
      { q: 'A mode toggle that changes palette, vocabulary and prompt', a: 'A single mental switch should affect everything the user sees. Startup gets dark mode because mode is persona, not preference.' },
      { q: 'No LLM anywhere in the workspace',                       a: 'The dashboard is loaded constantly. Deterministic scoring is free to render, reproducible, and the dismissal reasons are a cleaner signal than any model summary.' },
      { q: 'JSON files behind a six-method store interface',         a: 'The database choice was deliberately deferred. The product ships today and the SQLite swap is a one-file change.' },
      { q: 'Accounts disabled, loudly, on Cloudflare Pages',         a: 'No filesystem there. A clear 503 beats accepting writes that silently evaporate on the next deploy.' },
      { q: 'Bearer token in localStorage, not a cookie',             a: 'The Node server dropped every header but content-type, so cookies worked on Pages and failed on Coolify. Bearer works on both and has no CSRF surface, at the cost of a strict no-innerHTML rule.' },
      { q: 'Deleting a project keeps its applications',              a: 'The tracking record is what people care most about. An accepted paper should never disappear because a project was tidied up.' },
    ],

    credits: [
      { label: 'Year',      value: '2026' },
      { label: 'Role',      value: 'Designer · Developer · Researcher' },
      { label: 'Stack',     value: 'HTML/CSS/JS · Cloudflare Pages · Node/Express · Docker · Claude API' },
      { label: 'Data',      value: 'Curated catalog from my Notion dissemination tables' },
      { label: 'Presented', value: 'RMIT SoTL conference · poster' },
      { label: 'Live',      value: 'dissemination.eggn.io · V3.4.7' },
    ],

    closing: {
      title: 'Describe the work once. Track everything after.',
      tagline: 'The tool I wished I had in first semester, built in the second.',
    },
  },
}

const arFiltersCase = {
  id: 'ar-filters',
  title: 'AR Filters',
  subtitle: 'AR · Social Filters',
  badges: ['AR', 'FILTERS'],
  bgImage: '/assets/work/tiktok-ar.jpg',
  caseStudy: {
    coverImage: '/assets/work/tiktok-ar.jpg',
    reelUrl: '/assets/case-studies/tiktok-ar/reel.mp4',
    gallery: [
      '/assets/case-studies/tiktok-ar/01.jpg',
      '/assets/case-studies/tiktok-ar/02.jpg',
      '/assets/case-studies/tiktok-ar/03.jpg',
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
  bgImage: '/assets/work/pubflift-ad.jpg',
  overlay: 'dark',
  hideCaseButton: true,
  caseStudy: { youtubeUrl: 'https://youtu.be/ZlDXYpzYDKQ' },
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
  bgImage: '/assets/case-studies/myway/poster.jpg',
  overlay: 'dark',
  hideCaseButton: true,
  caseStudy: { reelUrl: '/assets/case-studies/myway/reel.mp4' },
}

// ──────────────────────────────────────────────────────────
//   WORK (categories → heroes + gallery)
// ──────────────────────────────────────────────────────────

export const work = {
  // ── 3D & Motion ──────────────────────────────
  'cat-motion': {
    header: { label: '3D + Motion Design', title: 'Animation & VFX' },
    heroes: [escapeRoomCase, vaultEyeCase, pubflightHero, mywayHero],
    shortCards: true,
    gallery: [
      // First 3 visible by default
      { name: 'Tabletop Game Animation',    caseStudyId: 'escape-room-anim', kind: 'corporate', tag: 'ANIMATION',     tagColor: 'rgba(156,77,255,.9)', img: '/assets/case-studies/escape-room-anim/poster.jpg' },
      { name: 'THE VAULT · Eye',            caseStudyId: 'the-vault-eye',    kind: 'corporate', tag: 'ESCAPE ROOM',   tagColor: 'rgba(212,175,55,.9)', tagText: '#0a0a0a', video: '/assets/case-studies/tiktok-ar/Eye.mp4' },
      { name: 'Pubflift · Ad Tech',                                          kind: 'corporate', tag: 'AD ANIMATION',  tagColor: 'rgba(0,194,212,.9)',  video: '/assets/case-studies/pubflift-ad/reel.mp4' },
      { name: 'MyWay · Kinetic Typography',                                  kind: 'creative',  tag: 'VIDEO EDIT',    tagColor: 'rgba(255,46,107,.9)', video: '/assets/case-studies/myway/reel.mp4', poster: '/assets/case-studies/myway/poster.jpg' },
      // Hidden behind "See more"
      { name: 'Documentary Animation',                                       kind: 'creative',  tag: 'ANIMATION',     tagColor: 'rgba(0,194,212,.9)',  img: 'https://i.ytimg.com/vi/rou_9x4KpxU/maxresdefault.jpg', youtubeId: 'rou_9x4KpxU' },
      // Temporarily hidden (also flip Choosen=FALSE in Notion when ready):
      // { name: 'Logo Animations',           kind: 'corporate', tag: 'MOTION DESIGN', tagColor: 'rgba(255,46,107,.9)', img: '/assets/work/lucid-logo-anim.jpg' },
      // { name: 'Hype Educational Animations', kind: 'creative',  tag: 'ANIMATION',   tagColor: 'rgba(0,194,212,.9)',  img: '/assets/work/hype-edu-anim.jpg' },
      // { name: 'Video Edition',             kind: 'corporate', tag: 'VIDEO EDIT',    tagColor: 'rgba(156,77,255,.9)', img: '/assets/work/lucid-construction.jpg' },
      // { name: 'Social Media Videos',       kind: 'corporate', tag: 'VIDEO EDIT',    tagColor: 'rgba(255,46,107,.9)', video: '/assets/case-studies/victor-mourad/reel2.mp4' },
    ],
  },

  // ── Digital Art & UX ────────────────────────
  'cat-digital': {
    header: { label: 'Digital Art · UX/UI', title: 'Design & Digital Art' },
    heroes: [extraCheckpointCase],
    shortCards: true,
    gallery: [
      // First 3 visible
      { name: 'XtraCheckpoint',              caseStudyId: 'extra-checkpoint', kind: 'corporate', tag: 'BRAND DESIGN', tagColor: 'rgba(255,46,107,.9)', img: '/assets/case-studies/extra-checkpoint/thumbnail.gif' },
      { name: 'Amazonicas Logo',                                              kind: 'corporate', tag: 'LOGO',         tagColor: 'rgba(255,217,61,.9)', tagText: '#222', img: '/assets/work/amazonicas-logo.jpg' },
      // Temporarily hidden (also flip Choosen=FALSE in Notion when ready):
      // { name: 'Digital Agency Website',    kind: 'corporate', tag: 'WEB DESIGN',   tagColor: 'rgba(156,77,255,.9)', img: '/assets/work/digital-agency.jpg' },
      // { name: 'SupaFresh Market',          kind: 'corporate', tag: 'WEB DESIGN',   tagColor: 'rgba(0,194,212,.9)',  img: '/assets/case-studies/suprafresh/hero.jpg', liveUrl: 'https://supafreshmarket.com.au/' },
      // sub40 hero also pulled out of heroes[] above
    ],
  },

  // ── Games & Interactive ─────────────────────
  'cat-games': {
    header: { label: 'Games · Interactive', title: 'Games & Interactive' },
    heroes: [bloomingCase, naibuCase, libraryEmotionsCase, disseminationDigestCase],
    shortCards: true,
    gallery: [
      // First 3 visible
      { name: 'Library of Emotions',         caseStudyId: 'library-of-emotions', kind: 'creative', tag: 'GAME DESIGN', tagColor: 'rgba(173,70,255,.9)', img: '/assets/case-studies/library-of-emotions/cover.jpg' },
      { name: 'Dissemination Digest',        caseStudyId: 'dissemination-digest', kind: 'creative', tag: 'WEB APP',     tagColor: 'rgba(194,65,12,.92)', img: '/assets/case-studies/dissemination-digest/poster.svg' },
      { name: 'Second Blooming',             caseStudyId: 'blooming', kind: 'creative', tag: 'INTERACTIVE',          tagColor: 'rgba(255,46,118,.9)', video: '/assets/case-studies/blooming/blooming-final.mp4', poster: '/assets/case-studies/blooming/apd-poster.jpg' },
      { name: 'NAIBU',                       caseStudyId: 'naibu',    kind: 'creative', tag: 'GAME DESIGN',          tagColor: 'rgba(156,77,255,.9)', img: '/assets/case-studies/naibu/hero.jpg' },
      { name: 'Break',                                                kind: 'creative', tag: 'VIDEOGAME',    tagColor: 'rgba(0,194,212,.9)',  img: '/assets/case-studies/break-game/cover.gif', itchUrl: 'https://taniaolarte.itch.io/break' },
      { name: 'Chasqui',                                              kind: 'creative', tag: 'GAME JAM',     tagColor: 'rgba(255,46,107,.9)', video: '/assets/case-studies/chasqui/reel.mp4', poster: '/assets/case-studies/chasqui/poster.jpg', itchUrl: 'https://taniaolarte.itch.io/chasqui' },
      // Temporarily hidden (also flip Choosen=FALSE in Notion when ready):
      // { name: 'AR Filters',                   kind: 'creative', tag: 'AR / FILTERS', tagColor: 'rgba(255,217,61,.9)', tagText: '#222', img: '/assets/work/tiktok-ar.jpg' },
      // { name: 'Interactive Web Poem',         kind: 'creative', tag: 'INTERACTIVE',  tagColor: 'rgba(0,194,212,.9)',  img: '/assets/work/interactive-poem.jpg' },
      // { name: 'Nocturno · Projection Mapping', kind: 'creative', tag: 'INSTALLATION', tagColor: 'rgba(173,70,255,.9)', img: 'https://i.ytimg.com/vi/ruqGxBoCyb0/maxresdefault.jpg', youtubeId: 'ruqGxBoCyb0' },
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
