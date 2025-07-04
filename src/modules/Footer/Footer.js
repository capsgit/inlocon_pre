import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <ul>
            <li>AGB</li>
            <li>Datenschutz</li>
            <li>Impressum</li>
          </ul>
        </div>
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
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} Inlocon AG. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};
