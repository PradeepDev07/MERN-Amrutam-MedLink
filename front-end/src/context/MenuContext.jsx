import React, { createContext, useCallback, useState } from 'react';

export const MenuContext = createContext({
  menuOpen: false,
  globalUser: "",
  setGlobalUser: () => {},
  setMenuOpen: () => {},
  toggleMenu: () => {},
  closeMenu: () => {},
});

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpenState] = useState(() => {
    try {
      return localStorage.getItem('menuOpen') === 'true';
    } catch (err) {
      return false;
    }
  });

  const setMenuOpen = useCallback((next) => {
    try {
      localStorage.setItem('menuOpen', next ? 'true' : 'false');
    } catch (err) {}
    setMenuOpenState(next);
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen, setMenuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), [setMenuOpen]);

  // keep a global user string in context (persisted to localStorage)
  const [globalUser, setGlobalUserState] = useState(() => {
    try {
      return localStorage.getItem('globalUser') || "";
    } catch (err) {
      return "";
    }
  });

  const setGlobalUser = useCallback((next) => {
    try {
      if (next === null || next === undefined) {
        localStorage.removeItem('globalUser');
      } else {
        localStorage.setItem('globalUser', next);
      }
    } catch (err) {}
    setGlobalUserState(next);
  }, []);

  return (
    <MenuContext.Provider value={{ menuOpen, globalUser, setMenuOpen, toggleMenu, closeMenu, setGlobalUser  }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
