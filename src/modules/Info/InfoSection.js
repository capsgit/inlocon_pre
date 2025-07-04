import "./InfoSection.css";
import { metrics } from "../../data/metrics.js";
import { portals } from "../../data/portals.js";
import { partners } from "../../data/partners.js";
import { features } from "../../data/features.js";

export const InfoSection = () => {
  const logos = [...partners, ...partners];

  return (
    <>
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
                  <h1 className="portals__card-title">{portal.title}</h1>
                  <p className="portals__card-desc">{portal.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Partners */}
      <section className="partners">
        <div className="container partners__inner">
          <h1 className="partners__heading">Unsere Partners</h1>
          <div className="partners__viewport">
            <div className="partners__track">
              {logos.map((p, i) => (
                <div className="partners__logo" key={i}>
                  <img src={p.logo} alt={p.name} />
                </div>
              ))}
            </div>
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
    </>
  );
};
