// import logo from './logo.svg';
import './App.css';
// import React from "react";
import { createRoot } from "react-dom/client";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src="assets\images\svg\Logo-downloaded.png" alt="Logo Inlocon" className="logo" />
        <nav>
          <ul className="nav">
            <li><a href="#empresa">Empresa</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Soluciones en Infraestructura y Consultoría</h1>
        <p>Expertos en redes de datos, ingeniería civil y tecnología para la industria.</p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2>Servicios</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Ingeniería</h3>
            <p>Diseño y planificación de redes, obras civiles e infraestructura.</p>
          </div>
          <div className="service-card">
            <h3>Consultoría</h3>
            <p>Asesoramiento técnico para empresas del sector industrial y tecnológico.</p>
          </div>
          <div className="service-card">
            <h3>Supervisión</h3>
            <p>Control y seguimiento de proyectos de construcción y telecomunicaciones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Inlocon. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
