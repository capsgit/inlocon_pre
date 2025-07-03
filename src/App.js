import "./App.css";

import { Header } from "./modules/Header/Header.js";
import { SearchSection } from "./modules/Search/SearchSection.js";

// backend --------------------------------------------------------------------------------------------------------------------------------------------------------/

// Datos de métricas según la página original
const metrics = [
  { value: "+2,620,000", label: "Ausschreibungen" },
  { value: "+684,000", label: "Leistungsverzeichnisse" },
  { value: "+354,000", label: "Auftragsvergaben" },
  { value: "+82,000", label: "Auftragnehmer" },
  { value: "+8,000", label: "Gewerke" },
  { value: "+24", label: "Jahre an Erfahrung" },
];

// Base de datos de ofertas públicas (sample de 10 ofertas)
const offers = [
  {
    auftraggeber: "Stadt Leipzig",
    LeistungText: "Straßenbau und Instandhaltung von Hauptverkehrsstraßen",
    Ausführungsort: "Leipzig, Sachsen",
    Ausführungsfrist: "2025-10-15",
    Fristen: { Angebotsfrist: "2025-08-01", Bindefrist: "2026-01-15" },
    type: "Bauleistungen",
  },
  {
    auftraggeber: "Deutsche Bahn AG",
    LeistungText: "Lieferung und Montage von Signaltechnik",
    Ausführungsort: "Berlin",
    Ausführungsfrist: "2025-12-01",
    Fristen: { Angebotsfrist: "2025-09-15", Bindefrist: "2026-03-01" },
    type: "Technische Ausrüstung",
  },
  {
    auftraggeber: "Landkreis München",
    LeistungText: "Planung und Bau von Radwegen",
    Ausführungsort: "München, Bayern",
    Ausführungsfrist: "2025-11-20",
    Fristen: { Angebotsfrist: "2025-09-30", Bindefrist: "2026-02-20" },
    type: "Planungsleistungen",
  },
  {
    auftraggeber: "Universität Hamburg",
    LeistungText: "Lieferung von Laborgeräten für Chemie",
    Ausführungsort: "Hamburg",
    Ausführungsfrist: "2025-09-10",
    Fristen: { Angebotsfrist: "2025-07-25", Bindefrist: "2026-01-10" },
    type: "Lieferleistungen",
  },
  {
    auftraggeber: "Einwohnerstadt Köln",
    LeistungText: "Reinigung und Pflege öffentlicher Grünanlagen",
    Ausführungsort: "Köln, Nordrhein-Westfalen",
    Ausführungsfrist: "2025-08-30",
    Fristen: { Angebotsfrist: "2025-07-01", Bindefrist: "2025-12-31" },
    type: "Facility Management",
  },
  {
    auftraggeber: "Bundesministerium für Verkehr",
    LeistungText: "Erstellung einer Machbarkeitsstudie Fernverkehr",
    Ausführungsort: "Bonn",
    Ausführungsfrist: "2025-10-05",
    Fristen: { Angebotsfrist: "2025-08-10", Bindefrist: "2026-02-05" },
    type: "Beratungsleistungen",
  },
  {
    auftraggeber: "Stadt Frankfurt",
    LeistungText: "Lieferung von Müllfahrzeugen mit Elektromotor",
    Ausführungsort: "Frankfurt am Main",
    Ausführungsfrist: "2025-09-25",
    Fristen: { Angebotsfrist: "2025-08-01", Bindefrist: "2026-01-25" },
    type: "Fahrzeugbeschaffung",
  },
  {
    auftraggeber: "Land Hessen",
    LeistungText: "Schulgebäudesanierung und Barrierefreiheit",
    Ausführungsort: "Wiesbaden",
    Ausführungsfrist: "2025-11-01",
    Fristen: { Angebotsfrist: "2025-09-10", Bindefrist: "2026-04-01" },
    type: "Bauleistungen",
  },
  {
    auftraggeber: "Stadt Nürnberg",
    LeistungText: "IT-Dienstleistungen für E-Government-Lösungen",
    Ausführungsort: "Nürnberg, Bayern",
    Ausführungsfrist: "2025-07-31",
    Fristen: { Angebotsfrist: "2025-06-15", Bindefrist: "2025-12-31" },
    type: "IT-Services",
  },
  {
    auftraggeber: "Land Rheinland-Pfalz",
    LeistungText: "Lieferung von Büroausstattung für Landtagsgebäude",
    Ausführungsort: "Mainz",
    Ausführungsfrist: "2025-10-20",
    Fristen: { Angebotsfrist: "2025-08-20", Bindefrist: "2026-02-20" },
    type: "Lieferleistungen",
  },
];

// Datos de la sección "Was bieten wir Ihnen?"
const features = [
  {
    title: "Ausschreibungsrecherche",
    description:
      "Durch ein personalisiertes Suchprofil erhalten Sie für Sie zugeschnittene Informationen über Ausschreibungen und vergebene Aufträge.",
    points: [
      "Individualisierte Suche",
      "Öffentliche Ausschreibungen VOB/VOL/VOF",
      "Private Ausschreibungen",
    ],
  },
  {
    title: "Hoher Detaillierungsgrad",
    description:
      "Wir recherchieren Ausschreibungen in beispielloser Präzision mit einzigartigem 3-Wege-Filter.",
    points: [
      "Ca. 8000 Gewerkeprofile",
      "100% Trefferquote",
      "Themengerechte Aufbereitung",
    ],
  },
  {
    title: "Enorme Zeitersparnis",
    description:
      "Sie sparen wertvolle Arbeitszeit und haben dadurch mehr Freiraum für andere wichtige Dinge.",
    points: [
      "Direkter Zugriff auf Vergabeunterlagen",
      "Präsentation von Referenzen",
      "Benachrichtigung bei neuen Projekten",
    ],
  },
];

// Daten für "Unsere Portale" basierend en la página antigua
const portals = [
  {
    title: "Bauportal Deutschland",
    url: "https://www.bauportal-deutschland.de",
  },
  { title: "Straßenbauportal", url: "https://www.strassenbauportal.de" },
  { title: "Cleanerportal", url: "https://www.cleanerportal.de" },
  {
    title: "Beschaffungsmarkt Office",
    url: "https://www.beschaffungsmarkt-office.de",
  },
  { title: "Container Modulbau", url: "https://www.container-modulbau.de" },
  {
    title: "Beschaffungsmarkt Fahrzeuge",
    url: "https://www.beschaffungsmarkt-fahrzeuge.de",
  },
  {
    title: "Energieausschreibungen",
    url: "https://www.energieausschreibungen.eu",
  },
  {
    title: "Beschaffungsmarkt Gesundheit",
    url: "https://www.beschaffungsmarkt-gesundheit.de",
  },
  {
    title: "Schienenverkehrsportal",
    url: "https://www.schienenverkehrsportal.de",
  },
  { title: "EE-Portal", url: "https://www.ee-portal.eu" },
];

// Logos y nombres de socios reales de la antigua página
// Datos de socios con rutas a los logos según la página original
const partners = [
  { name: "Strabag", logo: "/assets/images/partners/strabag.png" },
  { name: "Deutsche Bahn", logo: "/assets/images/partners/deutsche-bahn.png" },
  { name: "Schindler", logo: "/assets/images/partners/schindler.png" },
  { name: "EnBW", logo: "/assets/images/partners/enbw.png" },
  { name: "Siemens", logo: "/assets/images/partners/siemens.png" },
  { name: "Wisag", logo: "/assets/images/partners/wisag.png" },
  { name: "Zeppelin", logo: "/assets/images/partners/zeppelin.png" },
  { name: "Magirus", logo: "/assets/images/partners/magirus.png" },
  { name: "Freqcon", logo: "/assets/images/partners/freqcon.png" },
  { name: "Knauf", logo: "/assets/images/partners/knauf.png" },
  { name: "Bilfinger", logo: "/assets/images/partners/bilfinger.png" },
  { name: "Vattenfall", logo: "/assets/images/partners/vattenfall.png" },
  { name: "RWE", logo: "/assets/images/partners/rwe.png" },
  { name: "Thyssenkrupp", logo: "/assets/images/partners/thyssenkrupp.png" },
  { name: "BASF", logo: "/assets/images/partners/basf.png" },
  { name: "Bayer", logo: "/assets/images/partners/bayer.png" },
  { name: "Daimler", logo: "/assets/images/partners/daimler.png" },
  { name: "Volkswagen", logo: "/assets/images/partners/volkswagen.png" },
  { name: "BMW", logo: "/assets/images/partners/bmw.png" },
  { name: "Continental", logo: "/assets/images/partners/continental.png" },
  {
    name: "Deutsche Telekom",
    logo: "/assets/images/partners/deutsche-telekom.png",
  },
  { name: "SAP", logo: "/assets/images/partners/sap.png" },
  { name: "Bosch", logo: "/assets/images/partners/bosch.png" },
  { name: "Lufthansa", logo: "/assets/images/partners/lufthansa.png" },
  { name: "Merck", logo: "/assets/images/partners/merck.png" },
];

// backend --------------------------------------------------------------------------------------------------------------------------------------------------------/

function App() {
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [profileOpen, setProfileOpen] = useState(false);

  // const handleLogin = () => {
  //   // cerrar menú de móvil, submenú, etc. si quieres
  //   setMobileOpen(false);
  //   setProfileOpen(false);
  //   setIsLoggedIn(true);
  // };
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setProfileOpen(false);
  // };

  return (
    <>
      {<Header />}
      {<SearchSection />}

      {/* Offers Section */}
      <section className="offers">
        <div className="container offers__inner">
          <h2 className="offers__heading">Aktuelle Ausschreibungen</h2>
          <div className="offers__grid">
            {offers.map((offer, index) => (
              <div key={index} className="offer-card">
                <div className="offer-card__content">
                  <h3 className="offer-card__auftraggeber">
                    {offer.auftraggeber}
                  </h3>
                  <p className="offer-card__leistung">{offer.LeistungText}</p>
                  <p className="offer-card__ort">
                    <strong>Ort:</strong> {offer.Ausführungsort}
                  </p>
                  <ul className="offer-card__fristen">
                    <li>
                      <strong>Ausschreibungsfrist:</strong>{" "}
                      {new Date(offer.Fristen.Angebotsfrist).toLocaleDateString(
                        "de-DE"
                      )}
                    </li>
                    <li>
                      <strong>Bindefrist:</strong>{" "}
                      {new Date(offer.Fristen.Bindefrist).toLocaleDateString(
                        "de-DE"
                      )}
                    </li>
                    <li>
                      <strong>AUSF bis:</strong>{" "}
                      {new Date(offer.Ausführungsfrist).toLocaleDateString(
                        "de-DE"
                      )}
                    </li>
                  </ul>
                  <div className="offer-card__links">
                    <a href="#details" className="offer-card__link">
                      Details
                    </a>
                    <a href="#bewerben" className="offer-card__link">
                      Bewerben
                    </a>
                    <a href="#empfehlen" className="offer-card__link">
                      Empfehlen
                    </a>
                  </div>
                </div>
                <div className="offer-card__date-box">
                  <span className="offer-card__date-day">
                    {new Date(offer.Fristen.Angebotsfrist)
                      .getDate()
                      .toString()
                      .padStart(2, "0")}
                  </span>
                  <span className="offer-card__date-month">
                    {new Date(offer.Fristen.Angebotsfrist)
                      .toLocaleString("de-DE", { month: "short" })
                      .toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section--------------------------------------------- */}
      {/* Unsere Portale */}
      <section className="portals" id="portals">
        <div className="container">
          <h2 className="portals__heading">Unsere Portale</h2>
          <p className="portals__description">
            Wir bieten spezialisierte Portale für verschiedene Branchen und
            Regionen.
          </p>
          <div className="portals__grid">
            {portals.map((portal, index) => (
              <div key={index} className="portals__card">
                <a href={portal.url} className="portals__card-link">
                  <h3 className="portals__card-title">{portal.title}</h3>
                  <p className="portals__card-desc">{portal.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was bieten wir Ihnen? */}
      <section className="offer">
        <div className="container">
          <h2 className="offer__heading">Was bieten wir Ihnen?</h2>
          <div className="offer__grid">
            {features.map((feature, index) => (
              <div key={index} className="offer__card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="offer__list">
                  {feature.points.map((point, i) => (
                    <li key={i} className="offer__list-item">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics">
        <div className="container metrics__inner">
          <div className="metrics__grid">
            {metrics.map((m, i) => (
              <div key={i} className="metrics__item">
                <span className="metrics__value">{m.value}</span>
                <span className="metrics__label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Partner */}
      <section className="partners">
        <div className="container">
          <h2 className="partners__heading">Unsere Partner</h2>
          <div className="partners__grid">
            {partners.map((partner, index) => (
              <div key={index} className="partners__logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__col">
            <h3>Kontakt</h3>
            <p>
              Inlocon AG
              <br />
              Erich-Zeigner-Allee 36
              <br />
              04229 Leipzig
              <br />
              Tel.: 0341/253479111
            </p>
          </div>
          <div className="footer__col">
            <h3>Services</h3>
            <ul>
              <li>Ausschreibungsrecherche</li>
              <li>Auftragssuche</li>
              <li>Subunternehmer finden</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          © {new Date().getFullYear()} Inlocon AG. Alle Rechte vorbehalten.
        </div>
      </footer>
    </>
  );
}

export default App;
