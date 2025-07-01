import './App.css';

// font-family: "Arial", Sans-serif;
// Azul oscuro	Principal	#003a63	(0, 58, 99)
// Hover
// Verde claro	Acento en logo?	#6fbf41	(111, 191, 65)
// Hover #5cae36

import { createRoot } from "react-dom/client";
import { useState } from 'react';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="cont-header">
        <img src="assets\images\svg\Logo-downloaded.png" alt="Logo Inlocon" className="logo" />
       
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav">
            <li><a href="#portals">Portalen</a></li>
            <li><a href="#enterprice">Unternehme</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
         <img src="assets\icons\casa.png" alt="icon" className="homeIcon" height="45px" />
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav">
            <li><a href="#portals">Portalen</a></li>
            <li><a href="#enterprice">Unternehme</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>

        {/* Right section - Desktop/Tablet */}
        <div className='no-log_section'>
          <button
            className="test-button"
            onClick={() => console.log("onClick")}
            aria-label="free try">
            Kostenlos testen
          </button>
          <a href="#login" className='login'>Anmelden</a>
        </div>
      </div>
    </header>
  );
}

function FindSection() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando: ${searchValue}`);
  };

  return (
    <section className="findSection">
      <div>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar licitaciones..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
        <p className="findSection-subtext">Encuentra oportunidades públicas y privadas para tu empresa</p>
      </div>
    </section>
  );
}

function OurPortals() {
  const portals = [
    { name: "Ausschreibungen", description: "VOB/VOL/VOF Ausschreibungen" },
    { name: "Aufträge", description: "Vergebene Aufträge recherchieren" },
    { name: "Subunternehmer", description: "Partner und Kontakte finden" },
    { name: "Leistungsverzeichnisse", description: "Direkter Download verfügbar" }
  ];

  return (
    <section className="our-portals">
      <div className="container">
        <h2>Unsere Portale</h2>
        <p className="portals-intro">Durch unsere mittlerweile 24jährige Erfahrung haben wir zehn spezialisierte Portale etabliert</p>
        <div className="portals-grid">
          {portals.map((portal, index) => (
            <div key={index} className="portal-card">
              <h3>{portal.name}</h3>
              <p>{portal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeOffer() {
  const features = [
    {
      title: "Ausschreibungsrecherche",
      description: "Durch ein personalisiertes Suchprofil erhalten Sie für Sie zugeschnittene Informationen über Ausschreibungen und vergebene Aufträge.",
      points: ["Individualisierte Suche", "Öffentliche Ausschreibungen VOB/VOL/VOF", "Private Ausschreibungen"]
    },
    {
      title: "Hoher Detaillierungsgrad", 
      description: "Wir recherchieren Ausschreibungen in beispielloser Präzision mit einzigartigem 3-Wege-Filter.",
      points: ["Ca. 8000 Gewerkeprofile", "100% Trefferquote", "Themengerechte Aufbereitung"]
    },
    {
      title: "Enorme Zeitersparnis",
      description: "Sie sparen wertvolle Arbeitszeit und haben dadurch mehr Freiraum für andere wichtige Dinge.",
      points: ["Direkter Zugriff auf Vergabeunterlagen", "Präsentation von Referenzen", "Benachrichtigung bei neuen Projekten"]
    }
  ];

  return (
    <section className="what-we-offer">
      <div className="container">
        <h2>Was bieten wir Ihnen?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    "Strabag", "Deutsche Bahn", "Schindler", "EnBW", "Siemens", 
    "Wisag", "Zeppelin", "Magirus", "Freqcon", "Knauf"
  ];

  return (
    <section className="partners">
      <div className="container">
        <h2>Unsere Partner</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <div className="logo-placeholder">{partner}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kontakt</h3>
            <p>Inlocon AG<br/>
            Erich-Zeigner-Allee 36<br/>
            04229 Leipzig<br/>
            Tel.: 0341/ 253 479 111</p>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Ausschreibungsrecherche</li>
              <li>Auftragssuche</li>
              <li>Subunternehmer finden</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Rechtliches</h3>
            <ul>
              <li><a href="#impressum">Impressum</a></li>
              <li><a href="#datenschutz">Datenschutz</a></li>
              <li><a href="#agb">AGB</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Inlocon AG. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <FindSection />
      <OurPortals />
      <Partners />
      <WhatWeOffer />
      <Footer />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
