const clients = [
  { name: 'RMIT University',               logo: '/assets/clients/rmit.svg' },
  { name: 'Upwork',                         logo: '/assets/clients/upwork.svg' },
  { name: 'Publift',                        logo: '/assets/clients/publift.svg' },
  { name: 'Coderhouse',                     logo: '/assets/clients/coderhouse.svg' },
  { name: 'ACDC College',                   logo: '/assets/clients/acdc.png' },
  { name: 'City Language Centre',           logo: '/assets/clients/clc.png' },
  { name: 'Calxa',                          logo: '/assets/clients/calxa.png' },
  { name: 'Duologue',                       logo: '/assets/clients/duologue.svg' },
  { name: 'Emma McQueen',                   logo: '/assets/clients/emma-mcqueen.svg', scale: 3 },
  { name: 'Tenaxiti',                       logo: '/assets/clients/tenaxiti.png' },
  { name: 'Travel Associates',              logo: '/assets/clients/travel-associates.png' },
  { name: 'Business Birds',                 logo: '/assets/clients/business-birds.png' },
  { name: 'Wondershare',                    logo: '/assets/clients/wondershare.png', scale: 2 },
  { name: 'Escape Rooms Canberra',          logo: '/assets/clients/escape-rooms-canberra.png', scale: 2 },
  { name: 'The Good Car Co',                logo: '/assets/clients/the-good-car.png', scale: 2 },
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
              <img
                src={c.logo}
                alt={c.name}
                title={c.name}
                style={c.scale ? { height: `${36 * c.scale}px`, maxWidth: `${160 * c.scale}px` } : undefined}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
