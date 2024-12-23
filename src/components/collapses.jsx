import { useState } from 'react'; // Importation du hook useState pour gérer l'état local
import PropTypes from 'prop-types'; // Importation de PropTypes pour la validation des types de props

// Définition d'un composant fonctionnel Collapses avec 2 props en destructuration
function Collapses({ title, content }) { 
  // Déclaration d'état local pour gérer l'ouverture/fermeture de la section avec 2 paramètres [isOpen, setIsOpen] en destructuration 
  const [isOpen, setIsOpen] = useState(false); // isOpen : état initialisé à false (section fermée) / setIsOpen : fonction pour modifier cet état

  // Fonction qui permet d'ouvrir/fermer la section au clic
  const toggleSection = () => {
    setIsOpen(!isOpen); // Inverse l'état actuel de isOpen (si false => true et inversement)
  };

  return (
    <div className="collapses"> {/* Conteneur principal avec la classe CSS collapses */}
      <div 
        className="collapses__header" // Section d'en-tête qui est cliquable
        onClick={toggleSection} // Appelle la fonction toggleSection lorsqu'on clique sur l'en-tête
      >
        <h3>{title}</h3> {/* Affiche le titre passé en props */}
        <img
          src="/icons/small_arrow.svg" // Icône de la flèche pour indiquer l'ouverture/fermeture
          alt="Ouvrir ou fermer la section" // Texte alternatif pour l'accessibilité
          className={`arrow ${isOpen ? 'open' : ''}`} // Ajoute la classe 'open' si isOpen est true pour styliser l'icône
        />
      </div>
      {/* Affiche le contenu uniquement si la section est ouverte */}
      <div 
        className={`collapses__content ${isOpen ? 'open' : 'close'}`} // Classe conditionnelle : 'open' si isOpen est true, 'close' sinon
      >
        {content} {/* Affiche le contenu passé en props */}
      </div>
    </div>
  );
}

// Validation des props avec PropTypes
Collapses.propTypes = {
  title: PropTypes.string.isRequired, // Le titre doit être une chaîne de caractères et est obligatoire
  content: PropTypes.node.isRequired, // Le contenu peut être n'importe quel élément React (texte, liste, balises, composants etc...) => plus flexible car couvre tous les types possible sans ajouter de complexité (ici content est soit du texte soit une liste) et est obligatoire
};

// Utilisation de .isRequired lorsque : 
// - La prop est indispensable pour le bon fonctionnement ou le rendu du composant
// - Elle permet de prévenir les erreurs dues à des props manquantes dans le composant
// - La prop n’a pas de valeur par défaut (comme ici)


export default Collapses; // Exportation du composant pour pouvoir l'utiliser about.jsx et housings.jsx
