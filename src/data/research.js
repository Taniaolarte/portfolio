// ─────────────────────────────────────────────────────────────────────────────
//  RESEARCH — single source of truth for /research and every /research/<slug>.
//
//  This file drives four things at once, so edits here propagate everywhere:
//    1. the research landing page (themes + grouped output cards)
//    2. the individual research pages
//    3. the <head> of each prerendered page (title, description, OG, JSON-LD)
//    4. sitemap.xml  (scripts/prerender.mjs walks `outputs`)
//
//  ── Adding a new output ────────────────────────────────────────────────────
//  Append an object to `outputs`. Only `slug`, `title`, `type`, `year`,
//  `status`, `category` and `summary` are required — everything else is
//  optional and simply doesn't render when missing. An output with a `page`
//  block gets its own permanent URL; one without stays a card on the landing.
//
//  ── draft: true ────────────────────────────────────────────────────────────
//  Entries flagged `draft` are NOT rendered, NOT prerendered and NOT in the
//  sitemap. Use it for work that is under review, unconfirmed or not yet
//  public. Flip the flag (and fill in venue/status/DOI) when it's confirmed —
//  nothing else needs to change.
// ─────────────────────────────────────────────────────────────────────────────

export const researchSite = {
  origin: 'https://taniaolarte.com',
  base: '/research',
}

// ── Author identity ──────────────────────────────────────────────────────────
// `orcid` powers the ORCID link and the Person → sameAs / identifier fields in
// the structured data. Leave it '' until the record is public; the link and the
// schema field are omitted rather than rendered empty.
export const author = {
  name: 'Tania Catherine Olarte Ávila',
  givenName: 'Tania Catherine',
  familyName: 'Olarte Ávila',
  shortName: 'Tania Olarte',
  jobTitle: 'PhD Candidate, Design',
  affiliation: 'RMIT University',
  affiliationUrl: 'https://www.rmit.edu.au/',
  email: 'taniaolarteavila@gmail.com',
  orcid: '0009-0001-3913-3236', // as registered on the FDG '26 paper
  sameAs: [
    'https://www.linkedin.com/in/tania-olarte-avila/',
    'https://behance.net/taniaolarte',
  ],
}

export const orcidUrl = author.orcid ? `https://orcid.org/${author.orcid}` : null

// ── Landing page copy ────────────────────────────────────────────────────────
export const intro = {
  lede:
    'I investigate how interaction, game mechanics and visual metaphor can support emotional reflection, emotional literacy and the communication of mental-health experiences.',
  body:
    'The work sits across game design, human–computer interaction and design research, and is conducted primarily through practice: artefacts, prototypes and playable systems are the instruments of enquiry as well as its outcomes. Individual projects move between mental-health literacy, emotional literacy and interactive narrative, and are framed by research through design — building in order to understand, then reporting what the making made visible.',
  fields: [
    'Game Design',
    'Human–Computer Interaction',
    'Design Research',
    'Mental Health Literacy',
    'Emotional Literacy',
    'Interactive Narrative',
    'Research through Design',
  ],
}

// ── Research themes ──────────────────────────────────────────────────────────
// `id` is referenced by outputs[].themes, which is how the landing page and the
// "Related research" block know what belongs together.
export const themes = [
  {
    id: 'emotional-play',
    num: '01',
    label: 'Emotional Play & Emotional Literacy',
    body:
      'How game mechanics and interactive experiences can support emotional naming, differentiation, reflection and emotional granularity — treating play as a space for noticing feeling states, not only for expressing them.',
  },
  {
    id: 'mental-health',
    num: '02',
    label: 'Games, Mental Health & Representation',
    body:
      'How games communicate, represent and open conversations around emotional and mental-health experiences without necessarily functioning as clinical interventions — and what responsible representation asks of a designer.',
  },
  {
    id: 'metaphor-rtd',
    num: '03',
    label: 'Interaction, Metaphor & Research through Design',
    body:
      'Practice-based enquiry into how interaction, visual metaphor, animation, narrative, environment and game mechanics translate abstract emotional experiences into playable systems that can be examined and argued with.',
  },
]

// ── Output categories (landing page grouping order) ──────────────────────────
export const categories = [
  {
    id: 'peer-reviewed',
    label: 'Peer-Reviewed Publications',
    hint: 'Journal articles and conference papers',
  },
  {
    id: 'projects',
    label: 'Research Projects',
    hint: 'Practice-based enquiry, prototypes and artefacts',
  },
  {
    id: 'posters',
    label: 'Posters & Presentations',
    hint: 'Talks, posters and works-in-progress',
  },
  {
    id: 'programs',
    label: 'Professional & Research Programs',
    hint: 'Fellowships, mentorship and development programs',
  },
  {
    id: 'recognition',
    label: 'Awards, Scholarships & Recognition',
    hint: 'Funded and formally recognised research',
  },
]

// Status vocabulary — the `tone` maps to a CSS modifier on the badge.
export const statuses = {
  published: { label: 'Published', tone: 'live' },
  accepted: { label: 'Accepted', tone: 'live' },
  'in-press': { label: 'In Press', tone: 'live' },
  preprint: { label: 'Preprint', tone: 'open' },
  project: { label: 'Research Project', tone: 'work' },
  updated: { label: 'Updated Edition', tone: 'open' },
  'under-review': { label: 'Under Review', tone: 'work' },
  awarded: { label: 'Awarded', tone: 'live' },
}

// ─────────────────────────────────────────────────────────────────────────────
//  OUTPUTS
// ─────────────────────────────────────────────────────────────────────────────

const naibu = {
  slug: 'naibu-social-anxiety-game-design',
  category: 'projects',
  themes: ['mental-health', 'metaphor-rtd'],
  title:
    'Naibu: Visual Metaphor, Animation and Interaction for Representing Social Anxiety in a 2D Videogame',
  shortTitle: 'Naibu',
  type: 'Undergraduate Thesis · Practice-Based Game Design Research',
  typeShort: 'Thesis / Practice-Based Research',
  year: 2019,
  yearLabel: '2019 · updated edition 2026',
  datePublished: '2019',
  dateModified: '2026',
  venue: 'Universidad de La Sabana',
  venueNote: 'Original institution · Bachelor’s final project',
  status: 'updated',
  authors: [author.name],
  image: '/assets/case-studies/naibu/portada.png',
  imageAlt:
    'Naibu title artwork — a small pixel-art child standing under a pale moon in a dark forest.',
  summary:
    'A practice-based game design project asking how a 2D puzzle-platformer can communicate an experience related to social anxiety through visual metaphor, interactive narrative, world design, character design, animation and mechanics. It is not presented as a clinical intervention; it examines how design decisions translate an emotional concept into an interactive audiovisual experience.',
  keywords: [
    'Game Design',
    'Social Anxiety',
    'Mental Health Representation',
    'Visual Metaphor',
    'Interactive Narrative',
    'Environmental Storytelling',
    '2D Animation',
    'Character Design',
    'Emotional Game Design',
    'Practice-Based Research',
  ],
  links: [
    { kind: 'project', label: 'View the Naibu project', href: '/#work' },
  ],
  metaDescription:
    'Naibu (2019, updated 2026) — practice-based game design research on representing social anxiety in a 2D puzzle-platformer through visual metaphor, animation, environmental storytelling and game mechanics.',

  page: {
    lede:
      'How can a two-dimensional puzzle-platformer communicate an experience related to social anxiety — not by describing it, but by making it playable?',

    abstract: [
      'Naibu is a practice-based game design project that investigates how a two-dimensional puzzle-platform videogame can communicate an experience related to social anxiety through visual metaphor, interactive narrative, world design, character design, animation and game mechanics. The project was developed as an undergraduate thesis at Universidad de La Sabana and completed as a playable vertical slice supported by a full design and pre-production corpus: concept research, narrative structure, character and enemy design, level and palette systems, animation cycles and mechanical prototypes.',
      'The enquiry proceeds through design rather than through evaluation. Rather than measuring an effect on players, the project asks what a designer must decide in order to represent a subjective emotional experience in an interactive form, and traces those decisions across the whole game system. The emotional concept is deliberately distributed: it is carried by the relationship between environment, antagonists, colour, movement, animation timing, narrative structure and the moment-to-moment demands of the mechanics, rather than stated through dialogue or exposition.',
      'The project is explicitly not offered as a clinical intervention, a diagnostic instrument or a therapeutic tool, and it makes no claim to reproduce a universal experience of social anxiety. Its contribution is a documented account of one designerly interpretation and the practice-derived considerations that emerged from producing it — most centrally, that metaphor can communicate subjective experience where simulation would over-claim, that simple mechanics acquire emotional meaning contextually, and that conceptual interpretation of a sensitive experience must precede aesthetic refinement.',
      'This updated edition preserves the structure, creative decisions and outcomes of the original 2019 project. Retrospective academic commentary and updated references are clearly identified as such and are not presented as findings of the original work.',
    ],

    glance: [
      {
        id: 'question',
        label: 'Research question',
        body:
          'How can visual metaphor, animation, environment and game mechanics be combined so that a 2D videogame communicates an experience related to social anxiety, without stating it explicitly and without claiming to simulate it?',
      },
      {
        id: 'problem',
        label: 'Problem',
        body:
          'Games that address mental-health experiences frequently fall into two modes: exposition, where a character or text explains the condition, or simulation, where the game claims to reproduce what the condition is like. Both flatten a subjective experience into a single account, and simulation in particular risks presenting one interpretation as universal. There was little practice-facing guidance on the intermediate path — representing an emotional experience through the design of the system itself.',
      },
      {
        id: 'approach',
        label: 'Approach',
        body:
          'Practice-based research through design across a six-month structured production: concept and folklore research; narrative construction; character, enemy and world design; a constrained six-colour palette per emotional stage; hand-animated cycles; paper prototyping of roughly twenty mechanics narrowed to six mapped onto emotional beats; Unity/C# implementation; and iterative playtesting. Design decisions and their rationale were documented throughout, and the reasoning was reconstructed retrospectively into the mapping presented below.',
      },
      {
        id: 'contribution',
        label: 'Contribution',
        body:
          'A documented case of translating an emotional concept into an interactive system, together with a Concept-to-Interaction mapping that makes the translation steps inspectable, and a set of seven practice-derived design considerations for representing sensitive emotional experiences in games. The contribution is designerly knowledge — an artefact plus an account of the reasoning that produced it — not an empirical result.',
      },
      {
        id: 'findings',
        label: 'Findings / Outcomes',
        body:
          'A playable vertical slice covering three emotional stages (denial → anger → acceptance), with a complete art, animation and level corpus. The thesis was awarded a Meritorious distinction (4.8 / 5.0). The work was subsequently selected for MAGI Expo (2024), the Future Forte inaugural showcase (2025) and a month-long exhibition at Bunjil Place (2025). Across exhibition contexts, viewer response concentrated on how mechanical and palette changes carried emotional state without dialogue.',
      },
      {
        id: 'limitations',
        label: 'Limitations',
        body:
          'The project was a design and pre-production project, not an evaluation. It demonstrates no change in symptoms, empathy, knowledge, stigma or behaviour, and it was not developed with clinical consultation. Its representation is one designer’s interpretation, and should be read as a case of emotional representation through game design rather than as evidence about social anxiety.',
      },
    ],

    questions: [
      'How can videogames represent social anxiety through visual metaphor?',
      'How can emotional experiences be translated into game design?',
      'How can environmental storytelling communicate mental-health experiences?',
      'How can animation contribute to emotional communication in videogames?',
      'How can game mechanics and narrative work together to represent emotional states?',
      'What are the challenges of representing mental-health experiences in entertainment games?',
      'How can a game address mental-health themes without becoming a clinical intervention?',
    ],
    questionsNote:
      'These are the questions the project is positioned to inform. It answers them as a documented design case, not as empirical evidence.',

    contributions: [
      {
        title: 'Emotional concepts distributed across the game system',
        body:
          'The emotional concept is communicated through relationships between environment, enemies, colour, animation, narrative and interaction rather than through exposition alone. No single element carries the meaning; it emerges from how they hold together.',
      },
      {
        title: 'Metaphor rather than simulation',
        body:
          'Naibu uses visual and interactive metaphor to communicate an interpretation of an emotional experience without claiming to reproduce a universal experience of social anxiety. Metaphor leaves the interpretation legible as an interpretation.',
      },
      {
        title: 'Simple mechanics, contextual meaning',
        body:
          'The project explores how relatively simple mechanics can acquire emotional meaning through their relationship with narrative, audiovisual design and environmental context — the same verb reads differently depending on the world it is performed in.',
      },
      {
        title: 'Responsible representation',
        body:
          'The project highlights the need to distinguish representations of situational emotional experiences from stereotypes about people experiencing mental-health conditions, and treats that distinction as a design constraint rather than a disclaimer.',
      },
      {
        title: 'Concept before visual polish',
        body:
          'The development process demonstrates the importance of conceptualising the emotional experience and its design implications before finalising visual representation — aesthetic decisions made early tend to fix the interpretation before it has been examined.',
      },
    ],
    contributionsNote:
      'These are practice-derived design considerations drawn from the making of one project. They are not scientifically validated principles and should not be cited as such.',

    diagram: {
      title: 'Concept-to-Interaction Mapping',
      steps: [
        { label: 'Emotional Experience', note: 'the subjective experience being addressed' },
        { label: 'Conceptual Attributes', note: 'what characterises it — exposure, avoidance, scale, watchfulness' },
        { label: 'Design Intention', note: 'what the game should make the player notice' },
        { label: 'Visual Metaphor', note: 'the image system that carries the concept' },
        { label: 'World + Characters + Animation', note: 'palette, silhouette, antagonists, movement timing' },
        { label: 'Narrative + Mechanics', note: 'structure and verbs that enact the metaphor' },
        { label: 'Interaction', note: 'what the player actually does, moment to moment' },
        { label: 'Intended Player Interpretation', note: 'the reading the system invites — not guarantees' },
      ],
      caption:
        'This retrospective mapping summarises how the Naibu design process translated an emotional concept into audiovisual, narrative and interactive design decisions. It should not be interpreted as a clinically validated model.',
    },

    considerations: {
      title: 'Practice-Derived Design Considerations',
      items: [
        {
          title: 'Distribute emotional representation across the system',
          body:
            'Spread the emotional argument across multiple elements of the game — environment, palette, movement, sound, structure — rather than concentrating it in one explanatory moment.',
        },
        {
          title: 'Let simple mechanics gain meaning contextually',
          body:
            'Allow simple mechanics to acquire meaning through narrative and contextual relationships instead of adding mechanical complexity to signal emotional complexity.',
        },
        {
          title: 'Use metaphor to communicate subjective experience',
          body:
            'Metaphor can communicate a subjective experience without claiming universal simulation. It positions the work as one interpretation, which is both more honest and more designable.',
        },
        {
          title: 'Avoid reducing mental-health experiences to personality stereotypes',
          body:
            'Represent situations, responses and relationships rather than character types. A stereotype is a shortcut that trades accuracy for legibility.',
        },
        {
          title: 'Develop the conceptual interpretation before aesthetic refinement',
          body:
            'Establish what the work is claiming about the experience — and what it is not — before committing to a visual language that will quietly settle the question.',
        },
        {
          title: 'Treat environments as part of the emotional argument',
          body:
            'Game worlds are not backgrounds. Scale, density, light and navigability are among the strongest available carriers of emotional meaning.',
        },
        {
          title: 'Declare the register of the work',
          body:
            'Clearly distinguish whether a game aims to support representation, reflection, literacy, behaviour change or therapeutic intervention. These are different projects with different obligations, and conflating them misleads players and reviewers alike.',
        },
      ],
      note:
        'These considerations were derived retrospectively from the design process. They were not empirically validated by the original project, and are offered as design guidance rather than as findings.',
    },

    limitations: [
      'The project was primarily a design and pre-production project, delivered as a vertical slice rather than a complete released game.',
      'It was not evaluated as a mental-health intervention, and no player study was conducted.',
      'The project does not demonstrate changes in symptoms, empathy, knowledge, stigma or behaviour.',
      'The representation reflects a particular designerly interpretation of social anxiety rather than a universal experience of it.',
      'Future work would benefit from consultation with mental-health specialists and from co-design with people with relevant lived experience.',
      'The work should be interpreted as a practice-based case of emotional representation through game design, and cited on those terms.',
    ],

    figures: [
      {
        src: '/assets/case-studies/naibu/uhri-character.png',
        alt: 'Character reference sheet for Uhri, the child protagonist, showing silhouette variations across emotional states.',
        caption: 'Uhri — the protagonist’s silhouette shifts with the emotional stage of each level.',
      },
      {
        src: '/assets/case-studies/naibu/levels.png',
        alt: 'Level palette studies: three horizontal strips of six colours each, moving from cool blues through fiery oranges to soft pinks.',
        caption: 'Constrained six-colour palettes, one per emotional stage — denial, anger, acceptance.',
      },
      {
        src: '/assets/case-studies/naibu/fobos.png',
        alt: 'Pixel-art design for Fobos, an antagonist rendered as a tall, watching figure.',
        caption: 'Fobos — an antagonist designed around being watched rather than being chased.',
      },
      {
        src: '/assets/case-studies/naibu/uhri-spritesheet.png',
        alt: 'Sprite sheet of hand-drawn animation frames for the protagonist’s walk, idle and climb cycles.',
        caption: 'Hand-animated cycles; walk timing slows under grief and tightens under threat.',
      },
    ],

    citation: {
      apa:
        'Olarte Ávila, T. C. (2019). Naibu: Visual metaphor, animation and interaction for representing social anxiety in a 2D videogame [Undergraduate thesis, Universidad de La Sabana]. (Updated edition, 2026).',
      bibtex: `@mastersthesis{olarteavila2019naibu,
  author      = {Olarte {\\'A}vila, Tania Catherine},
  title       = {Naibu: Visual Metaphor, Animation and Interaction for Representing Social Anxiety in a 2D Videogame},
  school      = {Universidad de La Sabana},
  type        = {Undergraduate thesis},
  year        = {2019},
  note        = {Updated edition, 2026},
  url         = {https://taniaolarte.com/research/naibu-social-anxiety-game-design}
}`,
      note:
        'A DOI will be added here once the repository record for the updated edition is confirmed. Until then, please cite the permanent URL above.',
    },
  },
}

// Metadata below is taken from the published record (Crossref / ACM DL):
// DOI 10.1145/3815598.3815672, FDG '26, pp. 1–4, gold open access under CC-BY.
// The abstract is reproduced verbatim from the paper, which CC-BY permits.
const fdgEmotionalGranularity = {
  slug: 'emotional-granularity-reflective-play',
  category: 'peer-reviewed',
  themes: ['emotional-play', 'mental-health', 'metaphor-rtd'],
  title:
    'Designing a Practice-Based Mobile Prototype for Mental Health Literacy through Emotional Granularity and Reflective Play',
  shortTitle: 'Emotional Granularity & Reflective Play',
  type: 'Conference Paper · Peer-Reviewed',
  typeShort: 'Conference Paper',
  year: 2026,
  yearLabel: '2026',
  datePublished: '2026-08-09',
  venue: 'FDG ’26 · Foundations of Digital Games',
  venueNote:
    'Proceedings of the 21st International Conference on the Foundations of Digital Games · ACM · Copenhagen, Denmark · pp. 1–4',
  status: 'published',
  authors: [author.name],
  doi: '10.1145/3815598.3815672',
  publisherName: 'Association for Computing Machinery (ACM)',
  proceedings:
    'Proceedings of the 21st International Conference on the Foundations of Digital Games (FDG ’26)',
  pages: '1-4',
  openAccessUrl: 'https://doi.org/10.1145/3815598.3815672',
  publisherUrl: 'https://dl.acm.org/doi/10.1145/3815598.3815672',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  image: '/assets/work/library-of-emotions.jpg',
  imageAlt: 'Library of Emotions — the mobile prototype presented in the FDG ’26 paper.',
  summary:
    'Presents Library of Emotions, a practice-based mobile prototype exploring how mental health literacy may be supported through emotional granularity and reflective play. Literacy is embedded in the mechanics rather than delivered as instruction, supporting early recognition and more precise emotional naming rather than treatment.',
  keywords: [
    'Mental Health Literacy',
    'Emotional Granularity',
    'Reflective Play',
    'Practice-Based Research',
    'Mobile Game Design',
    'Interaction Design',
  ],
  links: [
    { kind: 'oa', label: 'Open Access', href: 'https://doi.org/10.1145/3815598.3815672' },
    { kind: 'doi', label: 'View Publication', href: 'https://dl.acm.org/doi/10.1145/3815598.3815672' },
  ],
  metaDescription:
    'Peer-reviewed FDG ’26 paper by Tania Olarte presenting Library of Emotions, a practice-based mobile prototype supporting mental health literacy through emotional granularity and reflective play. Open access, DOI 10.1145/3815598.3815672.',

  page: {
    lede:
      'How can mobile game design foster mental health literacy through emotional granularity — by translating brief reflective techniques into tactile, symbolic mechanics?',

    // Verbatim published abstract (CC-BY). Do not paraphrase or trim: this is
    // the version of record's abstract and is what citations will quote.
    abstract: [
      'Mental health literacy, the ability to recognise, understand, and respond to mental health related concepts, is important for early intervention and wellbeing [9]. Awareness remains uneven, and stigma continues to limit help seeking [4]. This paper presents Library of Emotions, a practice-based mobile prototype that explores how mental health literacy may be supported through emotional granularity and reflective play. The project embeds literacy into its mechanics, supporting awareness and more precise emotional naming. It supports early recognition rather than treatment.',
      'Emotional granularity, understood as the ability to recognise and label emotions with precision, is associated with resilience and adaptive coping [20]. The project asks how mobile game design can foster mental health literacy through emotional granularity and by translating mental health techniques into tactile, symbolic mechanics. Building on reflective play research [14], the project explores how symbolic and tactile mechanics might help players engage with and reconsider emotional experience through gentle interaction.',
      'A practice-based methodology guides iterative prototyping, translating brief reflective techniques into tactile mobile interactions. The prototype prompts precise emotion choices, connects them to symbolic mini-games, and returns them to short reflection. In doing so, it offers a design approach for interactive experiences that support awareness, precision in naming, and safe reflection.',
    ],
    abstractNote:
      'Abstract reproduced from the version of record (ACM, CC-BY 4.0). Paragraph breaks added for readability on this page.',

    glance: [
      {
        id: 'question',
        label: 'Research question',
        body:
          'How can mobile game design foster mental health literacy through emotional granularity, and by translating mental health techniques into tactile, symbolic mechanics?',
      },
      {
        id: 'problem',
        label: 'Problem',
        body:
          'Mental health literacy matters for early intervention and wellbeing, but awareness remains uneven and stigma continues to limit help seeking. Interactive work in this space often delivers literacy as instruction layered on top of a game rather than as something the mechanics themselves carry.',
      },
      {
        id: 'approach',
        label: 'Approach',
        body:
          'A practice-based methodology guiding iterative prototyping: brief reflective techniques are translated into tactile mobile interactions. The prototype prompts precise emotion choices, connects them to symbolic mini-games, and returns the player to short reflection.',
      },
      {
        id: 'contribution',
        label: 'Contribution',
        body:
          'A design approach for interactive experiences that support awareness, precision in naming, and safe reflection — with literacy embedded in the mechanics rather than instructed, demonstrated through the Library of Emotions prototype.',
      },
      {
        id: 'findings',
        label: 'Findings / Outcomes',
        body:
          'The Library of Emotions mobile prototype, presented as a worked design case: a loop that moves from precise emotion selection, through symbolic and tactile mini-games, back to brief reflection.',
      },
      {
        id: 'limitations',
        label: 'Limitations',
        body:
          'The paper supports early recognition rather than treatment, and makes no clinical claim. It is a short practice-based paper presenting a prototype and a design approach — not a controlled evaluation of effects on literacy, symptoms or help-seeking behaviour.',
      },
    ],

    questions: [
      'How can mobile game design support mental health literacy?',
      'How can emotional granularity be supported through interaction rather than instruction?',
      'How can brief reflective techniques be translated into tactile, symbolic game mechanics?',
      'What does it mean to embed literacy into a game’s mechanics rather than layer it on top?',
      'How can an interactive experience support safe reflection without functioning as treatment?',
    ],
    questionsNote:
      'These are the questions the paper is positioned to inform. It contributes a design approach and a prototype, not empirical evidence of effect.',

    limitations: [
      'The work supports early recognition and reflection rather than treatment, and is not a clinical or diagnostic instrument.',
      'The paper presents a prototype and a design approach; it does not report a controlled evaluation of outcomes.',
      'No claims are made about changes in symptoms, help-seeking behaviour, stigma or measured literacy.',
      'Findings should be read as practice-based design knowledge, situated in the prototype described.',
    ],

    citation: {
      apa:
        'Olarte Ávila, T. C. (2026). Designing a practice-based mobile prototype for mental health literacy through emotional granularity and reflective play. In Proceedings of the 21st International Conference on the Foundations of Digital Games (FDG ’26) (pp. 1–4). ACM. https://doi.org/10.1145/3815598.3815672',
      bibtex: `@inproceedings{olarteavila2026granularity,
  author    = {Olarte {\\'A}vila, Tania Catherine},
  title     = {Designing a Practice-Based Mobile Prototype for Mental Health Literacy through Emotional Granularity and Reflective Play},
  booktitle = {Proceedings of the 21st International Conference on the Foundations of Digital Games (FDG '26)},
  year      = {2026},
  pages     = {1--4},
  publisher = {ACM},
  address   = {Copenhagen, Denmark},
  doi       = {10.1145/3815598.3815672},
  url       = {https://doi.org/10.1145/3815598.3815672}
}`,
      note:
        'Open access under CC BY 4.0 — the version of record is freely readable at the DOI above.',
    },
  },
}

const libraryOfEmotions = {
  slug: 'library-of-emotions',
  category: 'projects',
  themes: ['emotional-play', 'metaphor-rtd'],
  title: 'Library of Emotions: Interactive Media for Emotional Literacy',
  shortTitle: 'Library of Emotions',
  type: 'Practice-Based Research Project',
  typeShort: 'Research Project',
  year: 2024,
  yearLabel: '2024 — ongoing',
  datePublished: '2024',
  venue: 'RMIT University',
  venueNote: 'PhD research project · School of Design',
  status: 'project',
  authors: [author.name],
  image: '/assets/work/library-of-emotions.jpg',
  imageAlt: 'Library of Emotions — interface studies for an interactive emotional-literacy prototype.',
  summary:
    'An ongoing practice-based project exploring how interactive media can support emotional literacy and mental health literacy. It investigates interfaces, mechanics and narrative structures that help people recognise, name and reflect on emotional states, with emotional granularity as the central design concern. The mobile prototype was first published at FDG ’26.',
  keywords: [
    'Emotional Literacy',
    'Emotional Granularity',
    'Reflective Play',
    'Interaction Design',
    'Research through Design',
    'Interactive Narrative',
  ],
  links: [
    { kind: 'internal', label: 'Read the FDG ’26 paper', href: '/research/emotional-granularity-reflective-play' },
    { kind: 'project', label: 'View the project', href: '/#work' },
  ],
  metaDescription:
    'Library of Emotions — practice-based research at RMIT University into how interactive media can support emotional literacy, emotional granularity and mental health literacy. First published at FDG ’26 (DOI 10.1145/3815598.3815672).',

  page: {
    lede:
      'If naming a feeling more precisely changes how it is experienced, what would an interactive system designed to support that naming look like?',
    abstract: [
      'Library of Emotions is an ongoing practice-based research project examining how interactive media can support emotional literacy — the capacity to recognise, differentiate, name and reflect on emotional states. The project takes emotional granularity as its central design concern: the observation that people differ in how finely they distinguish between feeling states, and that finer distinctions are associated with different ways of responding to them.',
      'The enquiry is conducted through the design and iteration of interfaces, narrative structures and interaction patterns, treating prototypes as instruments for examining what an emotional vocabulary can be made to feel like when it is navigable rather than listed. The project is not a clinical instrument and does not assess or diagnose emotional states.',
      'The project’s first peer-reviewed output was published at the 21st International Conference on the Foundations of Digital Games (FDG ’26), where the mobile prototype is presented as a design approach for supporting mental health literacy through emotional granularity and reflective play. That paper is open access and is the citable record for the prototype; this page tracks the wider project around it.',
    ],
    glance: [
      {
        id: 'question',
        label: 'Research question',
        body:
          'How can interactive media support emotional granularity — the differentiation and naming of emotional states — through interface, narrative and interaction design rather than through instruction?',
      },
      {
        id: 'problem',
        label: 'Problem',
        body:
          'Emotional-literacy tools frequently present emotion as a fixed list to be selected from. That framing supports reporting but does little to support noticing, comparison or reflection, and it treats vocabulary as a lookup rather than as something to move through.',
      },
      {
        id: 'approach',
        label: 'Approach',
        body:
          'Research through design: iterative prototyping of interfaces and interactive narrative structures, with design decisions documented so that the reasoning remains inspectable alongside the artefacts.',
      },
      {
        id: 'contribution',
        label: 'Contribution',
        body:
          'A design approach for interactive experiences that support awareness, precision in emotional naming and safe reflection — first published at FDG ’26 — together with the prototypes that evidence it. Further patterns will be reported as the project develops.',
      },
      {
        id: 'findings',
        label: 'Findings / Outcomes',
        body:
          'A mobile prototype whose loop moves from precise emotion selection, through symbolic and tactile mini-games, back to brief reflection — published and peer-reviewed at FDG ’26. Further interface and narrative-structure studies are ongoing.',
      },
      {
        id: 'limitations',
        label: 'Limitations',
        body:
          'The published work presents a design approach and prototype, not a controlled evaluation. The project has not been evaluated with participants, supports early recognition rather than treatment, and is not a clinical or diagnostic instrument.',
      },
    ],
    questions: [
      'How can interactive media support emotional literacy?',
      'How can interaction design support emotional granularity rather than emotional reporting?',
      'What design patterns support reflective play?',
      'How can an emotional vocabulary be made navigable rather than listed?',
    ],
    limitationsHeading: 'Limitations & status',
    limitations: [
      'The project is in progress; the published output contributes a design approach, not evidence of effect.',
      'It has not been evaluated with participants and involves no clinical assessment.',
      'It supports early recognition and reflection rather than treatment.',
      'Design directions described here are subject to change as the research develops.',
    ],
    citation: {
      apa:
        'Olarte Ávila, T. C. (2024). Library of Emotions: Interactive media for emotional literacy [Practice-based research project, RMIT University]. https://taniaolarte.com/research/library-of-emotions',
      bibtex: `@misc{olarteavila2024library,
  author = {Olarte {\\'A}vila, Tania Catherine},
  title  = {Library of Emotions: Interactive Media for Emotional Literacy},
  school = {RMIT University},
  year   = {2024},
  note   = {Practice-based research project, in progress},
  url    = {https://taniaolarte.com/research/library-of-emotions}
}`,
      note: 'To cite the prototype itself, please cite the FDG ’26 paper (DOI 10.1145/3815598.3815672) rather than this project page.',
    },
  },
}

// ── Recognition (rendered as compact cards, no individual pages) ─────────────
const recognition = [
  {
    slug: 'meritorious-thesis-la-sabana',
    category: 'recognition',
    themes: ['mental-health'],
    title: 'Meritorious Thesis — Distinction (4.8 / 5.0)',
    type: 'Academic Distinction',
    typeShort: 'Distinction',
    year: 2020,
    venue: 'Universidad de La Sabana',
    status: 'awarded',
    summary:
      'The Naibu thesis was awarded a Meritorious distinction, the institution’s recognition for outstanding final-year research, with a final grade of 4.8 / 5.0.',
    keywords: ['Game Design', 'Practice-Based Research'],
    links: [{ kind: 'internal', label: 'Read the research', href: '/research/naibu-social-anxiety-game-design' }],
  },
  {
    slug: 'ser-pilo-paga',
    category: 'recognition',
    themes: [],
    title: 'Ser Pilo Paga — Full Merit Scholarship',
    type: 'Scholarship',
    typeShort: 'Scholarship',
    year: 2015,
    yearLabel: '2015 – 2020',
    venue: 'Government of Colombia · Universidad de La Sabana',
    status: 'awarded',
    summary:
      'Full national merit scholarship covering the entire Bachelor’s degree, awarded on academic merit. Funded the period in which the Naibu research was conducted.',
    keywords: ['Scholarship'],
  },
  {
    slug: 'magi-expo-selection',
    category: 'recognition',
    themes: ['metaphor-rtd'],
    title: 'Exhibition Selections — MAGI Expo, Future Forte, Bunjil Place',
    type: 'Curated Selection',
    typeShort: 'Selections',
    year: 2024,
    yearLabel: '2024 – 2025',
    venue: 'RMIT University · Future Forte · Bunjil Place',
    status: 'awarded',
    summary:
      'Practice outputs selected for the RMIT MAGI Expo (2024), the inaugural Future Forte showcase (2025) and a month-long exhibition at Bunjil Place (2025) — the contexts in which the research artefacts met public audiences.',
    keywords: ['Exhibition', 'Practice-Based Research'],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
//  DRAFTS — not rendered, not crawled, not in the sitemap.
//
//  These are scaffolded so the categories exist and nothing needs rebuilding
//  later. To publish one: confirm the venue and status, fill in `summary`,
//  `keywords` and (where relevant) a `page` block, then delete `draft: true`.
//  Do NOT flip these on before the outcome is officially confirmed — a public
//  page implies a claim about acceptance.
// ─────────────────────────────────────────────────────────────────────────────
const drafts = [
  // FDG '26 is no longer a draft — it published as `fdgEmotionalGranularity`
  // above (DOI 10.1145/3815598.3815672).
  {
    draft: true,
    slug: 'ieee-cog-2026',
    category: 'peer-reviewed',
    themes: ['emotional-play', 'metaphor-rtd'],
    title: 'IEEE CoG 2026 submission',
    type: 'Conference Paper',
    year: 2026,
    venue: 'IEEE Conference on Games (CoG) 2026',
    status: 'under-review',
    summary: '',
    keywords: ['Emotional Granularity', 'Reflective Play', 'Game Design'],
  },
  {
    draft: true,
    slug: 'psygames-2026',
    category: 'peer-reviewed',
    themes: ['mental-health'],
    title: 'PsyGames 2026 submission',
    type: 'Conference Paper',
    year: 2026,
    venue: 'PsyGames 2026',
    status: 'under-review',
    summary: '',
    keywords: ['Games', 'Mental Health'],
  },
  {
    draft: true,
    slug: 'meaningful-play-2026',
    category: 'peer-reviewed',
    themes: ['mental-health'],
    title: 'Meaningful Play 2026 submission',
    type: 'Conference Paper or Poster',
    year: 2026,
    venue: 'Meaningful Play 2026',
    status: 'under-review',
    summary: '',
    keywords: ['Meaningful Play', 'Games'],
  },
  {
    draft: true,
    slug: 'rmit-sotl-2026-poster',
    category: 'posters',
    themes: ['emotional-play'],
    title: 'RMIT SoTL 2026 poster',
    type: 'Poster',
    year: 2026,
    venue: 'RMIT Scholarship of Teaching and Learning Conference 2026',
    status: 'under-review',
    summary: '',
    keywords: ['Teaching and Learning', 'Games'],
  },
  {
    draft: true,
    slug: 'igda-foundation-questline',
    category: 'programs',
    themes: [],
    title: 'IGDA Foundation Questline',
    type: 'Professional Development Program',
    year: 2026,
    venue: 'IGDA Foundation',
    status: 'project',
    summary: '',
    keywords: ['Games Industry', 'Mentorship'],
  },
  {
    draft: true,
    slug: 'phd-designing-games-for-mental-health-literacy',
    category: 'projects',
    themes: ['mental-health', 'emotional-play', 'metaphor-rtd'],
    title: 'Designing Games for Mental Health Literacy',
    type: 'Doctoral Research',
    year: 2025,
    venue: 'RMIT University',
    status: 'project',
    summary: '',
    keywords: ['Mental Health Literacy', 'Game Design', 'Research through Design'],
  },
]

export const allOutputs = [fdgEmotionalGranularity, naibu, libraryOfEmotions, ...recognition, ...drafts]

/** Everything publicly rendered — drafts excluded everywhere by construction. */
export const outputs = allOutputs.filter((o) => !o.draft)

/** Outputs that own a permanent page (and therefore a sitemap entry). */
export const pages = outputs.filter((o) => o.page)

export function getOutput(slug) {
  return pages.find((o) => o.slug === slug) || null
}

export function statusOf(output) {
  return statuses[output.status] || { label: output.status, tone: 'work' }
}

export function themeById(id) {
  return themes.find((t) => t.id === id) || null
}

/**
 * Related outputs, ranked by shared themes then shared keywords.
 * Keeps the "Related research" block automatic — new entries wire themselves in.
 */
export function relatedTo(output, limit = 3) {
  const kw = new Set((output.keywords || []).map((k) => k.toLowerCase()))
  const th = new Set(output.themes || [])
  return outputs
    .filter((o) => o.slug !== output.slug)
    .map((o) => {
      const sharedThemes = (o.themes || []).filter((t) => th.has(t)).length
      const sharedKeywords = (o.keywords || []).filter((k) => kw.has(k.toLowerCase())).length
      return { output: o, score: sharedThemes * 3 + sharedKeywords }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || b.output.year - a.output.year)
    .slice(0, limit)
    .map((r) => r.output)
}

export function outputUrl(output) {
  return output.page ? `${researchSite.base}/${output.slug}` : null
}

export function absoluteUrl(path) {
  return `${researchSite.origin}${path}`
}
