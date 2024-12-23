import PropTypes from 'prop-types'; // Importation de PropTypes pour valider les types des props

// Composant pour afficher les étoiles
function Rating({ rating }) { 
  // Définition du nombre maximum d'étoiles (ici 5 étoiles)
  const maxStars = 5;
  // Conversion de la note en nombre entier (au cas où elle serait passée comme chaîne)
  const activeStars = parseInt(rating, 10); 
  // Nombre d'étoiles actives (remplies) selon la note / parseInt(rating, 10) garantit que la valeur est convertie en entier (par exemple, 4.5 devient 4) même si une valeur décimale ou une chaîne de caractères numérique est fournie / "10" indique que la conversion se fait en base décimale (système de 0 à 9)

  // Calcul du nombre d'étoiles inactives (non remplies)
  const inactiveStars = maxStars - activeStars;

  return (
    <div className="rating"> {/* Conteneur principal pour les étoiles */}
      {/* Génère les étoiles actives dynamiquement */}
      {[...Array(activeStars)].map((_, index) => ( // Crée un tableau d'étoiles actives et les parcourt avec `map` / [...Array(activeStars)] au départ contient un certain nombre d'éléments issu du fichier JSON, chaque élément est undefined. Le spread operator ... convertit ce tableau [undefined, undefined, etc] afin d'être exploitable et permet à map() d'itérer sur chaque élément (_, index) pour générer/créer des éléments JSX <img> à afficher dans le DOM [<img>, <img>, <img>, etc] par React
        <img 
          key={`active-${index}`} // Clé unique pour chaque étoile active
          src="/icons/star-active.svg" // Source de l'icône étoile active
          alt="Étoile active" // Texte alternatif pour l'accessibilité
          className="rating__star" // Classe CSS pour styliser les étoiles
        />
      ))}
      {/* Génère les étoiles inactives dynamiquement */}
      {[...Array(inactiveStars)].map((_, index) => ( // Crée un tableau d'étoiles inactives et les parcourt avec `map`
        <img 
          key={`inactive-${index}`} // Clé unique pour chaque étoile inactive
          src="/icons/star-inactive.svg" // Source de l'icône étoile inactive
          alt="Étoile inactive" // Texte alternatif pour l'accessibilité
          className="rating__star" // Classe CSS pour styliser les étoiles
        />
      ))}
    </div>
  );
}
  
// Validation des props avec PropTypes
Rating.propTypes = { 
  rating: PropTypes.number.isRequired, // La prop "rating" doit être un nombre et est obligatoire
};

export default Rating; // Exportation du composant pour pouvoir l'utiliser dans housings.jsx