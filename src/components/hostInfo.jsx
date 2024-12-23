import PropTypes from 'prop-types'; // Importation de PropTypes pour valider les types des props

// Composant pour afficher les informations de l'hôte
function HostInfo({ name, picture }) {
  // Décomposition du nom complet en prénom et nom à partir de la chaîne de caractères "name"
  const [firstName, lastName] = name.split(' '); // Utilise la méthode split pour séparer le prénom et le nom sur l'espace

  return (
    <div className="host-info"> {/* Conteneur principal avec une classe CSS pour les styles */}
      <div className="host-info__text"> {/* Conteneur pour les informations textuelles de l'hôte */}
        <span className="host-info__first-name">{firstName}</span> {/* Affiche le prénom */}
        <span className="host-info__last-name">{lastName}</span> {/* Affiche le nom */}
      </div>
      <img 
        src={picture} // URL de l'image passée en prop
        alt={name} // Texte alternatif pour l'image, ici le nom complet de l'hôte pour l'accessibilité
        className="host-info__picture" // Classe CSS pour styliser l'image
      />
    </div>
  );
}

// Validation des props avec PropTypes
HostInfo.propTypes = {
  name: PropTypes.string.isRequired, // La prop "name" doit être une chaîne et est obligatoire
  picture: PropTypes.string.isRequired, // La prop "picture" doit être une chaîne (URL de l'image) et est obligatoire
};

export default HostInfo; // Exportation du composant pour pouvoir l'utiliser dans housings.jsx
