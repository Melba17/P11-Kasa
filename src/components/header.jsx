import { NavLink } from 'react-router-dom'; // Importation de NavLink pour la navigation avec gestion des liens actifs

function Header() { // Définition d'un composant fonctionnel Header
  return (
    <header className="header"> {/* Élément sémantique <header> pour définir l'en-tête de la page + classe css/scss */}
      <div className="header__logo"> {/* Conteneur pour le logo avec une classe CSS BEM */}
        <img 
          src="/icons/Color_Logo.svg" // Chemin vers l'image du logo
          alt="Logo Kasa" // Texte alternatif pour l'image, essentiel pour l'accessibilité
          className="header__logo-img" // Classe CSS BEM pour le style de l'image
        />
      </div>
      <nav className="header__nav"> {/* Élément <nav> pour contenir les liens de navigation */}
        {/* <NavLink> (adaptée aux élèments de navigation dans un site) est un composant de react-router-dom 
            (au lieu du <a> classique), et utilisé pour créer des liens de navigation (en gérant l'état actif contrairement au <Link>) 
            dans une application React avec un système de routage => génère, sous le "capot", un élément <a> 
            dans le DOM, d'où la réaction de a en scss et ajoute automatiquement une classe CSS (className au lien actif */}
        {/* ({ isActive }) => La fonction className reçoit un objet comme argument. 
            Utilisation de la déstructuration (symbolisée par les {}) pour extraire directement 
            la propriété isActive de cet objet qui correspond à un booléen true ou false / 
            Si isActive est true, elle retourne la classe CSS active. Sinon, elle retourne une chaîne vide ( '') */}
        
        <NavLink 
          to="/" // Propriété "to" définit la destination du lien (ici, la page d'accueil)
          className={({ isActive }) => (isActive ? 'active' : '')} // Ajout conditionnel de la classe 'active' selon l'état
        >
          Accueil {/* Texte affiché pour le lien */}
        </NavLink>
        
        <NavLink 
          to="/about" // Lien vers la page "À Propos"
          className={({ isActive }) => (isActive ? 'active' : '')} // Ajout conditionnel de la classe 'active' selon l'état
        >
          À Propos {/* Texte affiché pour le lien */}
        </NavLink>
      </nav>
    </header>
  );
}

export default Header; // Exportation du composant Header pour pouvoir l'importer et l'utiliser dans App.jsx
