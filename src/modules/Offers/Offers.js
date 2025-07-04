import "./Offers.css";
import React, { useState, useEffect, useRef } from "react";
import { offers as offersData } from "../../data/offers";

export const OffersSection = () => {
  const sortedOffers = [...offersData].sort(
    (a, b) => new Date(b.fecha) - new Date(a.fecha)
  );

  // Configuración de límite por dispositivo
  const desktopLimit = 8;
  const hasMoreDesktop = sortedOffers.length > desktopLimit;
  const desktopOffers = sortedOffers.slice(0, desktopLimit);

  // Mobile vs Desktop state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const mobileOffers = showAllMobile ? sortedOffers : sortedOffers.slice(0, 3);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Carousel desktop
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // Calcule slideWidth and maxIndex
  useEffect(() => {
    if (!trackRef.current || !viewportRef.current) return;
    const slideElem = trackRef.current.children[0];
    if (!slideElem) return;
    const computed = getComputedStyle(trackRef.current);
    const gap = parseFloat(computed.gap) || 0;
    const sw = slideElem.getBoundingClientRect().width + gap;
    setSlideWidth(sw);
    const vw = viewportRef.current.offsetWidth;
    const totalW = trackRef.current.scrollWidth;
    const maxOffset = totalW - vw;
    setMaxIndex(Math.ceil(maxOffset / sw));
    setCurrent((c) => Math.min(c, Math.ceil(maxOffset / sw)));
  }, [desktopOffers.length]);

  const prev = () => setCurrent((i) => Math.max(i - 1, 0));
  const next = () => setCurrent((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="offers">
      <div className="container offers__inner">
        <h2 className="offers__heading">Aktuelle Ausschreibungen</h2>

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
            <div className="offers__viewport" ref={viewportRef}>
              <div
                className="offers__track"
                ref={trackRef}
                style={{
                  transform: `translateX(-${current * slideWidth}px)`,
                }}
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
              disabled={current >= maxIndex}
            >
              ›
            </button>
            {!isMobile && current >= maxIndex && hasMoreDesktop && (
              <a href="#showMore" className="offers__show-more-desktop">
                Mehr sehen
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

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
    </div>
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
);
