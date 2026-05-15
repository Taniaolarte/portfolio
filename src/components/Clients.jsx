const clients = [
  { name: 'RMIT University',               logo: '/portfolio/assets/clients/rmit.svg' },
  { name: 'Upwork',                         logo: '/portfolio/assets/clients/upwork.svg' },
  { name: 'Publift',                        logo: '/portfolio/assets/clients/publift.svg' },
  { name: 'Coderhouse',                     logo: '/portfolio/assets/clients/coderhouse.svg' },
  { name: 'ACDC College',                   logo: '/portfolio/assets/clients/acdc.png' },
  { name: 'City Language Centre',           logo: '/portfolio/assets/clients/clc.png' },
  { name: 'Calxa',                          logo: '/portfolio/assets/clients/calxa.png' },
  { name: 'Duologue',                       logo: '/portfolio/assets/clients/duologue.svg' },
  { name: 'Emma McQueen',                   logo: '/portfolio/assets/clients/emma-mcqueen.svg' },
  { name: 'Tenaxiti',                       logo: '/portfolio/assets/clients/tenaxiti.png' },
  { name: 'Travel Associates',              logo: '/portfolio/assets/clients/travel-associates.png' },
  { name: 'Business Birds',                 logo: '/portfolio/assets/clients/business-birds.png' },
  { name: 'Wondershare',                    logo: '/portfolio/assets/clients/wondershare.png' },
]

export default function Clients() {
  const doubled = [...clients, ...clients]
  return (
    <div className="clients-section">
      <span className="clients-label">Select Clients &amp; Collaborators</span>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((c, i) => (
            <span key={i} className="marquee-item marquee-item--logo">
              <img src={c.logo} alt={c.name} title={c.name} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
