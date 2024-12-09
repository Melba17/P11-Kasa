import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/components/header.scss";


function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/icons/Color_Logo.svg" alt="Logo Kasa" className="header__logo-img"/>
      </div>
      <nav className="header__nav">
        {/* <NavLink> (adaptée aux élèments de navigation dans un site) est un composant de react-router-dom et utilisé pour créer des liens de navigation (en gérant l'état actif contrairement au <Link>) dans une application React avec un système de routage => génère, sous le "capot", un élément <a> dans le DOM, d'où la réaction de a en scss et ajoute automatiquement une classe CSS (className au lien actif */}
        {/* ({ isActive }) => La fonction className reçoit un objet comme argument. Utilisation de la déstructuration (symbolisée par les {}) pour extraire directement la propriété isActive de cet objet qui correspond à un booléen true ou false / Si isActive est true, elle retourne la classe CSS active. Sinon, elle retourne une chaîne vide ( '') */}
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
