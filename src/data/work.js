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
          { src: '/portfolio/assets/case-studies/escape-room-anim/box-01.jpg', caption: 'Game box · physical product' },
          { src: '/portfolio/assets/case-studies/escape-room-anim/card-01.jpg', caption: 'Card art · in-game prompts' },
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
  theme: 'naibu',
  caseStudy: {
    coverImage: '/portfolio/assets/case-studies/naibu/hero.jpg',
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
        media: { src: '/portfolio/assets/case-studies/naibu/portada.png', caption: 'Naibu · title artwork' },
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
          { src: '/portfolio/assets/case-studies/naibu/uhri-character.png', caption: 'Uhri · character reference' },
          { src: '/portfolio/assets/case-studies/naibu/fobos.png',          caption: 'Fobos · antagonist' },
          { src: '/portfolio/assets/case-studies/naibu/wendigo.png',        caption: 'Wendigo · antagonist' },
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
        media: { src: '/portfolio/assets/case-studies/naibu/levels.png', caption: 'Level palettes derived from research' },
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
          { src: '/portfolio/assets/case-studies/naibu/uhri-poses.png',         caption: 'Uhri · pose studies' },
          { src: '/portfolio/assets/case-studies/naibu/interactive-assets.png', caption: 'Interactive props · lamps + collectibles' },
          { src: '/portfolio/assets/case-studies/naibu/icon.png',               caption: 'In-game icon' },
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
        media: { src: '/portfolio/assets/case-studies/naibu/uhri-spritesheet.png', caption: 'Uhri animation sprite sheet' },
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
        media: { src: '/portfolio/assets/case-studies/naibu/fobos-storyboard.png', caption: 'Fobos · appearance storyboard' },
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
        media: { src: '/portfolio/assets/case-studies/naibu/cronogram.png', caption: 'The original 6-month cronogram' },
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
  title: 'Second Blooming',
  subtitle: 'Interactive Installation · Bunjil Place',
  description:
    "A meditation on the digital afterlife of organic forms — a physical flower meets its reactive holographic twin, breathing in response to your presence.",
  cta: 'View Case Study',
  meta: 'TOUCHDESIGNER · BIOTRON · HOLOGRAPHIC DOME',
  duration: '03:00',
  bgImage: '/portfolio/assets/case-studies/blooming/apd-poster.jpg',
  overlay: 'default',
  theme: 'blooming',
  caseStudy: {
    coverImage: '/portfolio/assets/case-studies/blooming/apd-poster.jpg',
    youtubeUrl: 'https://youtu.be/4vzbM2uL0tM',
    heroVideo: '/portfolio/assets/case-studies/blooming/blooming-final.mp4',
    heroPoster: '/portfolio/assets/case-studies/blooming/apd-poster.jpg',
    eyebrow: 'INTERACTIVE INSTALLATION',
    placeLine: 'EXHIBITED AT BUNJIL PLACE',
    intro: {
      pull: 'tangible',
      pullAlt: 'ephemeral',
      body:
        "Second Blooming is a meditation on the digital afterlife of organic forms. By capturing the essence of a physical flower and translating it into a reactive particle system, we create a dialogue between the tangible and the ephemeral.",
    },
    // Three alternating chapters — text + looping muted video as the "gif" visual.
    chapters: [
      {
        nav: 'ABOUT',
        eyebrow: 'THE VISION',
        title: 'Physical Soul, Digital Spirit',
        body:
          "Second Blooming is an interactive installation that explores the bridge between organic life and digital existence. A single flower stands as the anchor for a narrative digital twin, rendered in thousands of reactive neon particles.",
        media: { video: '/portfolio/assets/case-studies/blooming/blooming-x.mp4', poster: '/portfolio/assets/case-studies/blooming/apd-poster.jpg' },
        flip: false,
      },
      {
        nav: 'DIGITAL TWIN',
        eyebrow: 'THE TWIN',
        title: 'A Window Into the Void',
        body:
          "Encased within a custom-designed dome, the digital vein appears as a floating hologram. This dome acts as the medium where light and mathematics converge to recreate the flower's geometry in a shimmering, ethereal form.",
        media: { video: '/portfolio/assets/case-studies/blooming/play-force.mp4', poster: '/portfolio/assets/case-studies/blooming/interactive-trailer-poster.jpg' },
        flip: true,
      },
      {
        nav: 'INTERACTION',
        eyebrow: 'INTERACTION + PRESENCE',
        title: 'The Dissolving Presence',
        body:
          "The installation challenges the audience's proximity. As you get closer to the physical flower, its digital twin begins to dissolve. This reactive behaviour symbolises the fragile balance between observing and disrupting a natural state.",
        media: { video: '/portfolio/assets/case-studies/blooming/blooming-final.mp4', poster: '/portfolio/assets/case-studies/blooming/apd-poster.jpg' },
        flip: false,
      },
    ],
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
    // Gallery grid — the rest of the videos shown as looping muted "gifs".
    gallery: [
      { video: '/portfolio/assets/case-studies/blooming/reel.mp4',          poster: '/portfolio/assets/case-studies/blooming/apd-poster.jpg',                 caption: 'Full reel · final cut' },
      { video: '/portfolio/assets/case-studies/blooming/blooming-x.mp4',    poster: '/portfolio/assets/case-studies/blooming/apd-poster.jpg',                 caption: 'Particle response · approach state' },
      { video: '/portfolio/assets/case-studies/blooming/play-force.mp4',    poster: '/portfolio/assets/case-studies/blooming/interactive-trailer-poster.jpg', caption: 'Play + forces study' },
      { video: '/portfolio/assets/case-studies/blooming/blooming-final.mp4',poster: '/portfolio/assets/case-studies/blooming/apd-poster.jpg',                 caption: 'Final dome composition' },
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
      title: 'MAGI Floral Animations',
      meta: 'Bunjil Place Outdoor Screen · 2 Patrick Northeast Drive, Narre Warren · Jul 1–31 · 3pm & 7pm daily',
      blurb:
        "Student animators from RMIT University's Master of Animation, Games and Interactivity responding to the Floribunda exhibition. Second Blooming shows alongside Flare by Cao Xuefan.",
      url: 'https://www.bunjilplace.com.au/magi-floral-animations',
      runs: [
        { venue: 'Bunjil Place · Outdoor Screen',   city: 'Narre Warren, AU', date: 'Jul 2024',  status: 'Featured' },
        { venue: 'RMIT MAGI Expo',                  city: 'Melbourne, AU',     date: 'Nov 2024',  status: 'Selected' },
        { venue: 'Floribunda Response · Group Show',city: 'Melbourne, AU',     date: 'Aug 2024',  status: 'Group show' },
      ],
      press: [
        { source: 'Bunjil Place',     quote: 'A meditative interactive piece that earns its quiet.', author: 'Programming notes' },
        { source: 'RMIT MAGI',        quote: 'A standout response to the Floribunda brief.',         author: 'Faculty review' },
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
      { name: 'Documentary Animation',                                       kind: 'creative',  tag: 'ANIMATION',     tagColor: 'rgba(0,194,212,.9)',  img: 'https://i.ytimg.com/vi/rou_9x4KpxU/maxresdefault.jpg', youtubeId: 'rou_9x4KpxU' },
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
      { name: 'NAIBU',                       caseStudyId: 'naibu',    kind: 'creative', tag: 'GAME DESIGN',          tagColor: 'rgba(156,77,255,.9)', img: '/portfolio/assets/case-studies/naibu/hero.jpg' },
      { name: 'Second Blooming',             caseStudyId: 'blooming', kind: 'creative', tag: 'INTERACTIVE',          tagColor: 'rgba(255,46,118,.9)', video: '/portfolio/assets/case-studies/blooming/blooming-final.mp4', poster: '/portfolio/assets/case-studies/blooming/apd-poster.jpg' },
      { name: 'Break',                                                kind: 'creative', tag: 'VIDEOGAME',    tagColor: 'rgba(0,194,212,.9)',  img: '/portfolio/assets/case-studies/break-game/cover.gif', itchUrl: 'https://taniaolarte.itch.io/break' },
      { name: 'Chasqui',                                              kind: 'creative', tag: 'GAME JAM',     tagColor: 'rgba(255,46,107,.9)', video: '/portfolio/assets/case-studies/chasqui/reel.mp4', poster: '/portfolio/assets/case-studies/chasqui/poster.jpg', itchUrl: 'https://taniaolarte.itch.io/chasqui' },
      // Hidden behind "See more"
      { name: 'Library of Emotions',                                  kind: 'creative', tag: 'PHD PROJECT',  tagColor: 'rgba(173,70,255,.9)', img: '/portfolio/assets/work/library-of-emotions.jpg' },
      { name: 'AR Filters',                                           kind: 'creative', tag: 'AR / FILTERS', tagColor: 'rgba(255,217,61,.9)', tagText: '#222', img: '/portfolio/assets/work/tiktok-ar.jpg' },
      { name: 'Interactive Web Poem',                                 kind: 'creative', tag: 'INTERACTIVE',  tagColor: 'rgba(0,194,212,.9)',  img: '/portfolio/assets/work/interactive-poem.jpg' },
      { name: 'Nocturno · Projection Mapping',                        kind: 'creative', tag: 'INSTALLATION', tagColor: 'rgba(173,70,255,.9)', img: 'https://i.ytimg.com/vi/ruqGxBoCyb0/maxresdefault.jpg', youtubeId: 'ruqGxBoCyb0' },
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
