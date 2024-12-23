import PropTypes from 'prop-types'; // Importation de PropTypes pour valider les types des props
import { Link } from 'react-router-dom'; // Import pour la navigation interne dans une SPA

// Composant Gallery pour afficher une liste de logements sous forme de cartes
function Gallery({ logements }) { // Le composant reçoit les données de logements via la prop "logements"
  return (
    <div className="home__gallery-container"> {/* Conteneur principal de la galerie */}
      <div className="home__gallery"> {/* Conteneur pour toutes les cartes individuelles */}
        {logements.map((logement) => ( // Parcourt le tableau "logements" pour générer dynamiquement chaque carte
          <div key={logement.id} className="home__card"> {/* Clé unique pour chaque carte basée sur l'ID */}
            <Link to={`/housings/${logement.id}`}> {/* Lien dynamique vers la page du logement spécifique */}
              <img
                src={logement.cover} // URL de l'image de couverture du logement
                alt={logement.title} // Texte alternatif pour l'image (accessibilité)
                className="home__card-image" // Classe CSS pour styliser l'image
              />
              <div className="home__card-overlay"></div> {/* Overlay visuel dans une div à part en superposition pour pouvoir lui appliquer des styles spécifiques CSS qui influencent l'image de fond */}
              <h3 className="home__card-title">{logement.title}</h3> {/* Affichage du titre du logement */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Validation des props avec PropTypes pour assurer que les données passées sont correctes
Gallery.propTypes = {
  logements: PropTypes.arrayOf( // La prop "logements" est un tableau
    PropTypes.shape({ // Chaque élément du tableau doit avoir une forme précise
      id: PropTypes.string.isRequired, // ID unique du logement (obligatoire)
      cover: PropTypes.string.isRequired, // URL de l'image de couverture (obligatoire)
      title: PropTypes.string.isRequired, // Titre du logement (obligatoire)
    })
  ).isRequired, // Le tableau "logements" est obligatoire pour le bon fonctionnement du composant
};

export default Gallery; // Exportation du composant pour pouvoir l'utiliser home.jsx
