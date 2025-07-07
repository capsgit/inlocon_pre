import "./InfoSection.css";

import { IMG } from "../../assets/images";
import { metrics } from "../../data/metrics.js";
import { portals } from "../../data/portals.js";
import { partners } from "../../data/partners.js";
import { features } from "../../data/features.js";

export const InfoSection = () => {
  return (
    <>
      {/* Unsere Portale */}
      <section className="portals" id="portals">
        <div className="container">
          <h2 className="portals__heading">Unsere Portale</h2>
          <div className="portals__grid">
            {portals.map((portal, idx) => (
              <div
                key={idx}
                className="portals__card"
                style={{
                  backgroundImage: `url(${IMG[portal.img]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h4 className="portals__card-title">{portal.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Partner */}
      <section className="partners">
        <div className="container partners__inner">
          <h2 className="partners__heading">Unsere Partner</h2>
          <div className="partners__track">
            {partners.map((p, i) => {
              const bgUrl = process.env.PUBLIC_URL + p.logo;
              return (
                <a
                  key={i}
                  href={p.url}
                  className="partners__logo"
                  style={{
                    backgroundImage: `url(${bgUrl})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "120px",
                    height: "60px",
                  }}
                  aria-label={p.name}
                  title={p.name}
                />
              );
            })}
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
