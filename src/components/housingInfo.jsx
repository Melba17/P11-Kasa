import PropTypes from 'prop-types'; // Importation de PropTypes pour valider les types des props

// Composant pour afficher le titre, l'emplacement et les tags
function HousingInfo({ title, location, tags }) {
  return (
    <div className="housing-info"> {/* Conteneur principal avec une classe CSS pour les styles */}
      <h1 className="housing-info__title">{title}</h1> {/* Affiche le titre passé en prop */}
      <p className="housing-info__location">{location}</p> {/* Affiche l'emplacement passé en prop */}
      <div className="housing-info__tags"> {/* Conteneur pour les tags */}
        {tags.map((tag, index) => ( // Parcourt le tableau de tags
          <span 
            key={index} // Clé unique pour chaque élément généré automatiquement par la méthode map() qui est utilisée pour parcourir le tableau tags / L'index est simplement la position de l'élément dans le tableau commençant à 0
            className="housing-info__tag" // Classe CSS pour styliser chaque tag
          >
            {tag} {/* Affiche le contenu du tag */}
          </span>
        ))}
      </div>
    </div>
  );
}

// Validation des props avec PropTypes
HousingInfo.propTypes = {
  title: PropTypes.string.isRequired, // La prop "title" doit être une chaîne de caractères et est obligatoire
  location: PropTypes.string.isRequired, // La prop "location" doit être une chaîne de caractères et est obligatoire
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // La prop "tags" doit être un tableau de chaînes de caractères et est obligatoire
};

export default HousingInfo; // Exportation du composant pour pouvoir l'utiliser dans housings.jsx
