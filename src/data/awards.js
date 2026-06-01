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
      hint: 'PhD & scholarly direction',
      items: [
        {
          title: 'PhD Candidate, Design',
          org: 'RMIT University',
          period: 'Current',
          note: 'Practice-based research: “Designing Games for Mental Health Literacy” — how interactive design and narrative mechanics can build awareness, foster empathy and reduce stigma.',
          highlight: true,
        },
        {
          title: 'Centre for Game Design Research',
          org: 'RMIT University',
          period: '',
          note: 'Research aligned with Creative Interventions, Playable Media and Digital Health Narratives.',
        },
        {
          title: 'Target venues',
          org: 'FDG · CHI PLAY · DiGRA · Games for Change',
          period: '',
          note: 'Dissemination aimed at conferences and journals at the intersection of games, psychology and interactive media.',
        },
      ],
    },
  ],
}
