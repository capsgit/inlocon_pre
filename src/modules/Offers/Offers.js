import React, { useState, useEffect } from "react";
import "./Offers.css";
import { offers } from "../../data/offers.js";

export const OffersSection = () => {
  // Ordenamos ofertas por fecha de publicación descendiente
  const sorted = [...offers].sort(
    (a, b) => new Date(b.fecha) - new Date(a.fecha)
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  // Listener para actualizar isMobile
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Determinar ofertas a mostrar según dispositivo
  const mobileOffers = showAllMobile ? sorted : sorted.slice(0, 3);
  // En desktop, usamos todas las ofertas en carousel
  const desktopOffers = sorted;

  // Handlers carousel desktop
  const prev = () => setCurrent((idx) => Math.max(idx - 1, 0));
  const next = () =>
    setCurrent((idx) => Math.min(idx + 1, desktopOffers.length - 1));

  return (
    <section className="offers">
      <div className="container offers__inner">
        <h2 className="offers__heading">Neue Ausschreibungen</h2>

        {isMobile ? (
          <>
            <div className="offers__grid--mobile">
              {mobileOffers.map((offer, i) => (
                <OfferCard key={i} offer={offer} />
              ))}
            </div>
            {!showAllMobile && (
              <button
                className="offers__show-more"
                onClick={() => setShowAllMobile(true)}
              >
                Weiter sehen
              </button>
            )}
          </>
        ) : (
          <div className="offers__carousel">
            <button
              className="carousel__nav carousel__nav--prev"
              onClick={prev}
              disabled={current === 0}
            >
              ‹
            </button>

            {/* Viewport: aquí recortamos todo lo que sobresalga */}
            <div className="offers__viewport">
              <div
                className="offers__track"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {desktopOffers.map((offer, i) => (
                  <div className="offers__slide" key={i}>
                    <OfferCard offer={offer} />
                  </div>
                ))}
              </div>
            </div>

            <button
              className="carousel__nav carousel__nav--next"
              onClick={next}
              disabled={current === desktopOffers.length - 1}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Subcomponente para tarjeta de oferta
const OfferCard = ({ offer }) => (
  <div className="offer-card">
    <div className="offer-card__content">
      <h3 className="offer-card__auftraggeber">{offer.auftraggeber}</h3>
      <p className="offer-card__leistung">{offer.LeistungText}</p>
      <p className="offer-card__ort">
        <strong>Ort:</strong> {offer.Ausführungsort}
      </p>
      <ul className="offer-card__fristen">
        <li>
          <strong>Ausschreibungsfrist:</strong>{" "}
          {new Date(offer.Fristen.Angebotsfrist).toLocaleDateString("de-DE")}
        </li>
        <li>
          <strong>Bindefrist:</strong>{" "}
          {new Date(offer.Fristen.Bindefrist).toLocaleDateString("de-DE")}
        </li>
        <li>
          <strong>AUSF bis:</strong>{" "}
          {new Date(offer.Ausführungsfrist).toLocaleDateString("de-DE")}
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
        {new Date(offer.fecha).getDate().toString().padStart(2, "0")}
      </span>
      <span className="offer-card__date-month">
        {new Date(offer.fecha)
          .toLocaleString("de-DE", { month: "short" })
          .toUpperCase()}
      </span>
    </div>
  </div>
);
