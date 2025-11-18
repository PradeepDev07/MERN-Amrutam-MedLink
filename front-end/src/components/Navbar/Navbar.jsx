import React, { useEffect, useRef, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import cookies from 'js-cookie';
import { MenuContext } from '../../context/MenuContext';



const Navbar = () => {
    
  // const location = useLocation(); // current URL path (no longer needed)
  const { menuOpen, setMenuOpen, toggleMenu, closeMenu ,globalUser,setGlobalUser} = useContext(MenuContext);
  const containerRef = useRef(null);
  const navigate = useNavigate();

 const isCookies = cookies.get('auth_token')===undefined?false:true;
console.log(isCookies);
  const navItems = [
    { name: "home", label: "Home", path: "/home" },
    { name: "doctors", label: "Find Doctors", path: "/doctors" },
    { name: "about", label: "About Us", path: "/about" },
    { name: "following-doctors", label: "Following Doctors", path: "/following-doctors" },
    { name: "booked-appointments", label: "Booked Appointments", path: "/booked-appointments" }
  ];

  // navigation handled by NavLink; keep menu close behavior in onClick

  // close menu on outside click or Escape key
  useEffect(() => {
    const onDocumentClick = (e) => {
      if (!containerRef.current) return;
      if (menuOpen && !containerRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("mousedown", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <div
      className={`${styles.navbarContainer} ${menuOpen ? styles.mobileOpen : ""}`}
      ref={containerRef}
    >
      <div className={styles.logo}>
        {/* Add your logo image here: src/assets/logo.png */}
      </div>

      {/* hamburger button only visible on small screens via CSS */}
      <button
        className={styles.hamburger}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
      </button>

      <nav className={styles.navbar}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.navlinkActive : ""}`
            }
            // keep menu open when navigating; user will toggle hamburger to close
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.loginContainer}>
        {isCookies ? (
          <>
          <p className={styles.userName}>{globalUser}</p>
            <button className={styles.logoutButton} onClick={() => {
              cookies.remove('auth_token');
              window.location.reload();
            }}>Logout</button>
          </>
        ) : (
          <>
            <button className={styles.loginButton} onClick={() => navigate('/login')}>Login</button>
            <button className={styles.signupButton} onClick={() => navigate('/signup')}>Sign Up</button>
          </>
        )}

      </div>
    </div>
  );
};

export default Navbar;
