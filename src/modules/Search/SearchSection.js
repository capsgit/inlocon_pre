import React, { useState } from "react";
import "./SearchSection.css";

import { portals } from "../../data/portals.js";

export const SearchSection = () => {
  const [term, setTerm] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search">
      {" "}
      <form className="search__form" onSubmit={handleSearch}>
        {" "}
        {!showAdvanced ? (
          <div className="search__main">
            {" "}
            <input
              className="search__input"
              type="text"
              placeholder="Suchbegriff eingeben..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />{" "}
            <button className="search__button" type="submit">
              {" "}
              Suchen{" "}
            </button>{" "}
          </div>
        ) : (
          <div className="search__advanced">
            {" "}
            <input
              className="search__input"
              type="text"
              placeholder="Suchbegriff eingeben..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />{" "}
            <div className="search__row">
              {" "}
              <div className="search__field">
                {" "}
                <label htmlFor="ort">Ort</label>{" "}
                <input
                  id="ort"
                  type="text"
                  className="search__input--small"
                  placeholder="PLZ oder Ort"
                />{" "}
              </div>{" "}
              <div className="search__field">
                {" "}
                <label htmlFor="auftraggeber">Auftraggeber</label>{" "}
                <input
                  id="auftraggeber"
                  type="text"
                  className="search__input--small"
                  placeholder="Name des Auftraggebers"
                />{" "}
              </div>{" "}
              <div className="search__field">
                {" "}
                <label htmlFor="plattform">Plattform</label>{" "}
                <select id="plattform" className="search__select">
                  {" "}
                  <option value="">Alle Plattformen</option>{" "}
                  {portals.map((p, i) => (
                    <option key={i} value={p.title}>
                      {" "}
                      {p.title}
                    </option>
                  ))}
                </select>{" "}
              </div>{" "}
            </div>{" "}
            <button className="search__button" type="submit">
              {" "}
              Suchen{" "}
            </button>{" "}
          </div>
        )}
        <div className="search__toggle">
          {" "}
          <button
            type="button"
            className="search__toggle-button"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            {" "}
            {showAdvanced ? "Suchoptionen ausblenden" : "Weitere Suchoptionen"}
          </button>{" "}
        </div>{" "}
      </form>{" "}
      <p className="search__subtitle">
        {" "}
        Öffentliche Ausschreibungen, Aufträge & Geschäftskontakte. Alles aus
        einer Quelle !{" "}
      </p>{" "}
    </section>
  );
};
