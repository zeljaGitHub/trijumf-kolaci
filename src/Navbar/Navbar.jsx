import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img src="./logo2.png" alt="trijumf" className="frenki" />
      {/* Desktop links */}
      <ul className="nav-left">
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Početna
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Proizvodi"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Proizvodi
          </NavLink>
        </li>
      </ul>

      <ul className="nav-right">
        <li>
          <NavLink
            to="/O-nama"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            O nama
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Kontakt"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Kontakt
          </NavLink>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        ref={buttonRef}
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <img src="/logo.png" alt="logo" className="mobile-logo" />

      {/* Mobile menu */}
      <ul ref={menuRef} className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Početna
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Proizvodi"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Proizvodi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/O-nama"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            O nama
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Kontakt"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
