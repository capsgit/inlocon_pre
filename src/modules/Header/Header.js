import React, { useState } from "react";
import "./Header.css";

// Array de enlaces de navegación
const navItems = [
  { label: "Projektinfo", href: "#projectInformation" },
  { label: "Portalen", href: "#portals" },
  { label: "Blog", href: "#blog" },
];

export const Header = ({ isLoggedIn = false, onLogin, onLogout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((open) => !open);
  const toggleProfile = () => setProfileOpen((open) => !open);

  return (
    <header className="header">
      <div className="header__inner">
        <img
          src="assets/images/svg/Logo-downloaded.png"
          alt="Inlocon Logo"
          className="header__logo"
        />

        <nav className="header__nav header__nav--desktop">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="header__toggle"
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-label="Hauptmenü umschalten"
        >
          <img src="assets/icons/casa.png" alt="" aria-hidden="true" />
        </button>

        {isLoggedIn ? (
          <div className="header__profile">
            <button
              className="header__profile-btn"
              onClick={toggleProfile}
              aria-expanded={profileOpen}
              aria-label="Profilmenü umschalten"
            >
              👤
            </button>
            {profileOpen && (
              <ul className="header__submenu">
                <li>
                  <a href="#profile">Mein Profil</a>
                </li>
                <li>
                  <a href="#messages">Nachrichten</a>
                </li>
                <li>
                  <a href="#applications">Meine Anwendungen</a>
                </li>
                <li>
                  <button onClick={onLogout}>Abmelden</button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="header__actions">
            <button
              className="header__action header__action--primary"
              onClick={onLogin}
            >
              Kostenlos testen
            </button>
            <button
              className="header__action header__action--outline"
              onClick={onLogin}
            >
              Anmelden
            </button>
          </div>
        )}

        <nav
          className={`header__nav header__nav--mobile ${
            mobileOpen ? "open" : ""
          }`}
        >
          {" "}
          {/* Mobile nav */}
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
