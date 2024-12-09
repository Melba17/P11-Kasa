import React from 'react';
import PropTypes from 'prop-types';

// Définition d'une bannière de base adaptable selon les pages avec la className en scss

function Banner({
// Valeurs par défaut définies directement dans les paramètres destructurés de la fonction du composant
  imageSrc,
  altText = '', // Si altText n'est pas fourni en tant que prop, sa valeur par défaut sera une chaîne vide ('')
  overlayText = '', // idem
  children = null, // Si aucun enfant n'est passé au composant, children sera null
  className = '', // Si className n'a pas de valeur définie alors sa valeur par défaut sera une chaîne vide ('')
}) {
  return (
    <div className={`banner ${className}`} style={{ backgroundImage: `url(${imageSrc})` }}>
      <img
        src={imageSrc}
        alt={altText}
        className="banner__image"
        aria-hidden="true"
      />
      {overlayText && <h1 className="banner__text">{overlayText}</h1>}
      {children && <div className="banner__content">{children}</div>}
    </div>
  );
}

// Les propTypes servent uniquement à valider le type des props qui sont passées au composant
Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired, // URL de l'image en string
  altText: PropTypes.string, // Texte alternatif de l'image en string
  overlayText: PropTypes.string, // Texte à superposer à l'image (quand il y a besoin) en string
  children: PropTypes.node, // Contenu supplémentaire pour des cas spécifiques, de type node
  className: PropTypes.string, // Ajout de la validation pour className
};

export default Banner;
