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
  title: 'Library of Emotions',
  subtitle: 'PhD Research Project',
  badges: ['PHD PROJECT', 'RESEARCH'],
  bgImage: '/assets/work/library-of-emotions.jpg',
  caseStudy: {
    coverImage: '/assets/work/library-of-emotions.jpg',
    gallery: [
      '/assets/case-studies/library-of-emotions/01.jpg',
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
      { name: 'MyWay · Kinetic Typography',                                  kind: 'creative',  tag: 'VIDEO EDIT',    tagColor: 'rgba(255,46,107,.9)', video: '/assets/case-studies/myway/reel.mp4' },
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
    heroes: [bloomingCase, naibuCase],
    shortCards: true,
    gallery: [
      // First 3 visible
      { name: 'NAIBU',                       caseStudyId: 'naibu',    kind: 'creative', tag: 'GAME DESIGN',          tagColor: 'rgba(156,77,255,.9)', img: '/assets/case-studies/naibu/hero.jpg' },
      { name: 'Second Blooming',             caseStudyId: 'blooming', kind: 'creative', tag: 'INTERACTIVE',          tagColor: 'rgba(255,46,118,.9)', video: '/assets/case-studies/blooming/blooming-final.mp4', poster: '/assets/case-studies/blooming/apd-poster.jpg' },
      { name: 'Break',                                                kind: 'creative', tag: 'VIDEOGAME',    tagColor: 'rgba(0,194,212,.9)',  img: '/assets/case-studies/break-game/cover.gif', itchUrl: 'https://taniaolarte.itch.io/break' },
      { name: 'Chasqui',                                              kind: 'creative', tag: 'GAME JAM',     tagColor: 'rgba(255,46,107,.9)', video: '/assets/case-studies/chasqui/reel.mp4', poster: '/assets/case-studies/chasqui/poster.jpg', itchUrl: 'https://taniaolarte.itch.io/chasqui' },
      // Temporarily hidden (also flip Choosen=FALSE in Notion when ready):
      // { name: 'Library of Emotions',          kind: 'creative', tag: 'PHD PROJECT',  tagColor: 'rgba(173,70,255,.9)', img: '/assets/work/library-of-emotions.jpg' },
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
