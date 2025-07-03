import "./Footer.css";

export const Footer = () => {
  return (
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
  );
};
