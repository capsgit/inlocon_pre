import React, { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";
import "./Header.css";

const navItems = [
  { label: "Projektinfo", href: "#projectInformation" },
  { label: "Portale", href: "#portals" },
  { label: "Blog", href: "#blog" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const headerRef = useRef(null);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfileOpen(false);
  };
  const toggleMobile = () => setMobileOpen((open) => !open);
  const toggleProfile = () => setProfileOpen((open) => !open);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileOpen(false);
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header ref={headerRef} className="container header">
      <div className="header__inner">
        <img
          src="assets/images/svg/Logo-downloaded.png"
          alt="Logo"
          className="header__logo"
        />
        <button
          className="header__toggle"
          onClick={toggleMobile}
          aria-label="Toggle navigation"
        >
          <img src="assets/icons/casa.png" alt="Menu" />
        </button>
        <nav className="header__nav header__nav--desktop">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          {!isLoggedIn ? (
            <>
              <button
                className="header__action header__action--primary"
                onClick={handleLogin}
              >
                Kostenlos testen
              </button>
              <button
                className="header__action header__action--link"
                onClick={handleLogin}
              >
                Anmelden
              </button>
            </>
          ) : (
            <div className="header__profile">
              <button
                className="header__profile-btn"
                onClick={toggleProfile}
                aria-label="Profile menu"
              >
                <User size={35} />
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
                    <button onClick={handleLogout}>Abmelden</button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
        <nav
          className={`header__nav header__nav--mobile ${
            mobileOpen ? "open" : ""
          }`}
        >
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
