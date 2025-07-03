import "./Offers.css";
import { offers } from "../../data/offers.js";

export const OffersSection = () => {
  return (
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
  );
};
