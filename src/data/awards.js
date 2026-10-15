// Hidden "Honours" page — grants, scholarships, distinctions, selections & research.
// Mirrors the Notion CMS (Awards / Grants data source) and is seeded from Tania's CV
// + LinkedIn. Edit here, or regenerate via /sync from Notion like work.js.
//
// Reached via the magic-word easter egg (see App.jsx → SECRET_WORD) or the secret
// hash #/honours. Not linked anywhere in the nav.

export const honours = {
  intro:
    'A quiet shelf for the things that don’t fit on the main page — the grants, scholarships, distinctions and research that have shaped the work.',

  sections: [
    {
      id: 'grants',
      label: 'Grants & Scholarships',
      hint: 'Funding earned through merit',
      items: [
        {
          title: 'RMIT Research Stipend Scholarship — PhD in Design',
          org: 'RMIT University · School of Graduate Research',
          period: '2026 – 2030',
          note: 'Living-allowance stipend awarded with the PhD offer for “Designing Games for Mental Health Literacy: A Practice-Based Research”. Candidature from July 2026.',
          highlight: true,
        },
        {
          title: 'RMIT Research International Tuition Fee Scholarship — PhD in Design',
          org: 'RMIT University · School of Graduate Research',
          period: '2026 – 2030',
          note: 'Full tuition-fee scholarship awarded alongside the stipend, covering the doctoral candidature.',
          highlight: true,
        },
        {
          title: 'Ser Pilo Paga — Full Merit Scholarship',
          org: 'Government of Colombia · Universidad de La Sabana',
          period: '2015 – 2020',
          note: '100% funding across the entire Bachelor’s degree, awarded on national academic merit.',
          highlight: true,
        },
        {
          title: 'Proquinal Excellence Scholarship',
          org: 'Universidad de La Sabana',
          period: '2015 – 2020',
          note: 'Excellence subsidy covering daily living expenses throughout the Bachelor’s, granted for sustained academic results.',
        },
        {
          title: 'Freedom Challenge — Winner',
          org: 'Freedom Challenge',
          period: '',
          note: 'Won a full diploma scholarship for the winning “Freedom” project app.',
          highlight: true,
        },
        {
          title: 'UI/UX Diploma Scholarship — 70%',
          org: 'Coder House',
          period: '2021 – 2023',
          note: '70% scholarship for the duration of the program; ranked Top 10 student in 3 of 4 terms.',
        },
        {
          title: 'Course Scholarships',
          org: 'Various',
          period: '',
          note: 'Partial scholarships awarded across several specialised courses and diplomas.',
        },
      ],
    },
    {
      id: 'distinctions',
      label: 'Academic Distinctions',
      hint: 'Grades & honours',
      items: [
        {
          title: 'Meritorious Thesis — Distinction',
          org: 'Universidad de La Sabana',
          period: '2020',
          note: 'Bachelor’s final project (the 2D game “Naibu”) earned a Thesis with Distinction — final grade 4.8 / 5.0.',
          highlight: true,
        },
        {
          title: 'High Distinction GPA — 3.6 / 4.0',
          org: 'Master of Animation, Games & Interactivity · RMIT University',
          period: 'Current',
          note: 'Sustained High Distinction average throughout the Master’s.',
        },
        {
          title: 'High Achievement Recognition',
          org: 'Certificate IV Marketing & Communication · Australian City Design College',
          period: '2025',
          note: 'Formal high-achievement recognition with a lecturer and school recommendation letter.',
        },
        {
          title: 'Top Academic Result — 88%',
          org: 'Creative Arts & Media Exchange · James Cook University',
          period: '2018 – 2019',
          note: 'Maximum grade in Dynamic Media Design and Digital Toolbox during the exchange program.',
        },
      ],
    },
    {
      id: 'selections',
      label: 'Selections & Exhibitions',
      hint: 'Curated, showcased, recognised',
      items: [
        {
          title: 'Young Creative 2025',
          org: 'Future Minds Network',
          period: '2025',
          note: 'Selected for the Young Creative 2025 program.',
          highlight: true,
        },
        {
          title: 'MAGI Expo 2024',
          org: 'RMIT University',
          period: '2024',
          note: 'Master’s project selected for the MAGI Expo showcase.',
        },
        {
          title: 'Future Forte — Inaugural Showcase',
          org: 'Future Forte',
          period: '2024',
          note: 'Work selected for Future Forte’s inaugural art showcase.',
        },
        {
          title: 'Exhibited at Bunjil Place',
          org: 'Bunjil Place, Australia',
          period: '2024',
          note: 'Project selected and exhibited for one month at Bunjil Place.',
        },
        {
          title: 'Top 10 — Women’s Global Game Jam',
          org: 'Women’s Global Game Jam',
          period: '2020',
          note: 'Top 10 selection for the game “Chasqui”.',
        },
        {
          title: 'Top-Rated Freelancer',
          org: 'Upwork',
          period: 'Since 2020',
          note: 'Maintained Top-Rated status with a 99%+ success score across 120+ delivered projects.',
        },
      ],
    },
    {
      id: 'research',
      label: 'Research',
      hint: 'PhD, scholarship & profiles',
      items: [
        {
          title: 'PhD in Design — Admitted with Scholarship',
          org: 'RMIT University · School of Design',
          period: '2026 – 2030',
          note: '“Designing Games for Mental Health Literacy: A Practice-Based Research” accepted into the PhD in Design and awarded two RMIT research scholarships. Candidature from July 2026; supervision across design, games, technology and psychology. Confirmation of candidature window: Dec 2026 – Jul 2027.',
          highlight: true,
        },
        {
          title: 'Research profiles',
          org: 'Google Scholar · ORCID · LinkedIn',
          period: '',
          note: 'Citable record of every paper, with ORCID 0009-0001-3913-3236 as the permanent identifier.',
          links: [
            { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=xKhPPLQAAAAJ' },
            { label: 'ORCID', href: 'https://orcid.org/0009-0001-3913-3236' },
            { label: 'Research page', href: '/research' },
          ],
        },
        {
          title: 'Centre for Game Design Research',
          org: 'RMIT University',
          period: '',
          note: 'Research aligned with Creative Interventions, Playable Media and Digital Health Narratives.',
        },
      ],
    },
    {
      id: 'papers',
      label: 'Papers & Dissemination',
      hint: 'Peer-reviewed outputs around Library of Emotions · 2026',
      items: [
        {
          title: 'Designing a Practice-Based Mobile Prototype for Mental Health Literacy through Emotional Granularity and Reflective Play',
          org: 'FDG ’26 · ACM · Copenhagen · late-breaking paper, 33 accepted of 88',
          period: 'Published',
          note: 'Proceedings of the 21st International Conference on the Foundations of Digital Games, pp. 1–4. Open access, DOI 10.1145/3815598.3815672.',
          highlight: true,
          links: [
            { label: 'DOI', href: 'https://doi.org/10.1145/3815598.3815672' },
            { label: 'Paper page', href: '/research/emotional-granularity-reflective-play' },
          ],
        },
        {
          title: 'A Study Protocol for Game-Based Emotional Naming: Supporting Emotional Literacy Through Reflective Play',
          org: 'PsyGames 2026 · with Daniel Zarate · Kempten University of Applied Sciences',
          period: 'Published',
          note: 'PsyGames 2026 Conference Proceedings, English edition, pp. 93–104.',
          highlight: true,
          links: [{ label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=xKhPPLQAAAAJ' }],
        },
        {
          title: 'Designing Reflective Mobile Game Systems for Mental Health Literacy Through Emotional Granularity',
          org: 'IEEE Conference on Games (CoG) 2026 · Madrid · 1–4 September',
          period: 'Accepted',
          note: 'Full paper, oral presentation, IEEE proceedings. 89 accepted of 239. Reviews: Accept, Strong Accept, Strong Accept — nominated for the Best Paper Award.',
          highlight: true,
        },
        {
          title: 'ISAGA 2026 — Scientific paper (LNCS) and Outside-the-Box live playtest workshop',
          org: 'International Simulation and Gaming Association · KTH, Stockholm · 22–25 June',
          period: 'Accepted',
          note: 'Scientific paper (9 pages, Springer LNCS, ID 149) and a live reflective-playtest workshop (ID 150). Reviews: weak accept / accept; strong acceptance.',
        },
        {
          title: 'Library of Emotions — Poster paper',
          org: 'Joint Conference on Serious Games (JCSG) 2026 · Valletta, Malta · 3–4 December',
          period: 'Accepted',
          note: 'Springer, 6 pages single column. Reviews: Accept, Accept.',
        },
        {
          title: 'Library of Emotions — Poster',
          org: 'Meaningful Play 2026',
          period: 'Accepted',
          note: '5 pages. Reviewer scores 4 / 4.',
        },
        {
          title: 'Dissemination Digest — Poster',
          org: 'RMIT Scholarship of Teaching and Learning (SoTL) Conference 2026',
          period: 'Presented',
          note: 'The web app built from the PhD dissemination tracker, presented as a poster.',
          links: [{ label: 'Open the tool', href: 'https://dissemination.eggn.io/' }],
        },
        {
          title: 'IGDA Foundation — Questline mentorship',
          org: 'International Game Developers Association Foundation',
          period: '2026',
          note: 'Accepted into the six-week Questline program pairing game developers with mentors and a global cohort.',
        },
        {
          title: 'Under review',
          org: 'CHI PLAY 2026 · SIGGRAPH Asia 2026 Posters (Hong Kong)',
          period: 'Submitted',
          note: 'Two further submissions awaiting outcome.',
        },
      ],
    },
  ],
}
