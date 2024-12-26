import { useState } from 'react'; // Importation du hook useState pour gérer l'état local
import PropTypes from 'prop-types'; // Importation de PropTypes pour valider les types des props

// DÉFINITION D'UNE BANNIÈRE DE BASE ADAPTABLE SELON LES PAGES AVEC LES CLASSNAME EN SCSS
function Banner({
  // Valeurs par défaut définies directement dans les paramètres destructurés de la fonction du composant => valeurs de repli quand une prop est manquante qui garantissent un comportement par défaut du composant / Définies directement dans les paramètres destructurés car rassemblent les valeurs par défaut avec la déclaration des props au même endroit, sans duplication de code avec defaultProps
  imageSrc, // Source de l'image principale
  altText = '', // Valeur par défaut : chaîne vide si aucune prop altText n'est fournie
  overlayText = '', // Valeur par défaut pour un texte superposé
  className = '', // Classe CSS supplémentaire optionnelle pour la bannière
  images = [], // Liste des images pour le carrousel
  isCarousel = false, // Booléen pour activer/désactiver le mode carrousel
}) {
  // Déclaration d'état avec déstructuration (car 2 éléments dans le tableau [currentIndex, setCurrentIndex]) que l'on peut extraire, ou Déclaration de state avec le hook useState
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'index actuel dans le carrousel / useState est un hook de React nécessaire pour que l'interface utilisateur (UI) soit réactive, sans lui il serait impossible de suivre l'index actuel et de modifier dynamiquement l'image => useState(0) : initialise currentIndex à 0 (première image) / setCurrentIndex : fonction de mise à jour avec prevIndex qui permet de la modification de l'état=> globalement qui met à jour currentIndex lorsqu'on passe à l'image suivante ou précédente

  // L'opérateur ternaire permet de déterminer l'image actuellement affichée : imageSrc par défaut pour les pages Accueil et À propos, ou une image du carrousel pour la page Logement
  const displayedImage = isCarousel && images.length > 0 ? images[currentIndex] : imageSrc;

  // Fonction pour passer à l'image suivante
  const goToNext = () => {
    if (isCarousel && images.length > 0) { // Vérifie si le carrousel est activé et qu'il y a des images
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Passe à l'image suivante en boucle / (prevIndex) est simplement l'état actuel donc l'image actuelle avant la mise à jour (prevIndex + 1) / % images.length => le modulo permet de revenir au début si on dépasse la dernière image => ici (prevIndex + 1) est le dividende, le nombre qu'on veut diviser, et images.length est le diviseur, % est le reste de cette division (ex: si (prevIndex + 1) = 3 et que images.length = 3 alors % retourne 0, donc on retourne à l'image 0, c'est à dire la 1ère image du tableau images = [])
    }
  };

  // Fonction pour passer à l'image précédente
  const goToPrevious = () => {
    if (isCarousel && images.length > 0) { // Vérifie si le carrousel est activé et qu'il y a des images
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1 // prevIndex === 0 ? images.length - 1 => si on est à la première image, revient à la dernière / Par contre si l'index actuel n'est pas 0, alors on décrémente simplement l'index pour aller à l'image précédente avec : prevIndex - 1
      );
    }
  };

  return (
    // <div> est le conteneur principal pour appliquer l'image en arrière-plan avec son css associé 
    <div 
      className={`banner ${className}`} // banner = style de base qui garantit que tous les styles partagés sont toujours appliqués / ${className} = .homeBanner ou .aboutBanner ou housingsBanner = classes spécifiques  qui ajoutent uniquement les styles complémentaires
      style={{ backgroundImage: `url(${displayedImage})` }} // React utilise des objets JS pour les styles en ligne / La propriété style gère des styles dynamiques spécifiques, elle est utilisée ici pour appliquer une image d'arrière-plan dynamique (via backgroundImage). La valeur de l’image dépend de la variable JS displayedImage, déclarée au-dessus, car l'image n'est pas toujours la même. Il est impossible de passer une valeur dynamique directement via className dans React pour une propriété CSS comme backgroundImage
    > 
      {/* <img> n'est là que pour assurer que l'image est détectable et compréhensible par les outils d'assistance (comme les lecteurs d'écran) et les moteurs de recherche (SEO)*/}
      <img
        src={displayedImage} // Source de l'image affichée
        alt={altText} // Texte alternatif pour l'image, utile pour l'accessibilité
        className="banner__image" // Classe CSS pour l'image
        aria-hidden="true" // Cache l'image pour les lecteurs d'écran, car n'est pas nécessaire à la compréhension du contenu puisque purement décorative
      />

      {/* Affiche un texte superposé que si overlayText est fourni / overlayText est une simple chaîne de caractères donc on utilise ici h1 pour garantir que le texte est interprété comme le titre principal de la page et indique aux moteurs de recherche (SEO) et aux lecteurs d'écran que le contenu est important pour la page */}
      {overlayText && <h1 className="banner__text">{overlayText}</h1>}

      {/* Affiche les boutons du carrousel uniquement si isCarousel est activé et qu'il y a plusieurs images */}
      {isCarousel && images.length > 1 && (
        <> {/* Utilisation de Fragments <> et </> pour éviter l'ajout d'une <div> inutile et permet de grouper plusieurs enfants <button>, <img> et <div> (counter) sans ajouter de nœud/conteneur supplémentaire dans le DOM */}
          <button
            className="banner__arrow banner__arrow--left" // Bouton flèche gauche
            onClick={goToPrevious} // Appelle la fonction pour passer à l'image précédente
          >
            <img src="/icons/big_arrow.svg" alt="Précédent" /> {/* Icône de flèche */}
          </button>
          <button
            className="banner__arrow banner__arrow--right" // Bouton flèche droite
            onClick={goToNext} // Appelle la fonction pour passer à l'image suivante
          >
            <img src="/icons/big_arrow.svg" alt="Suivant" /> {/* Icône de flèche */}
          </button>
          <div className="banner__counter"> {/* Affiche l'index actuel et le nombre total d'images / Utilisation de +1 pour que visuellement ça affiche bien le chiffre auquel s'attend l'utilisateur car sinon vu qu'en code on commence à 0, ça décalerait tout et l'utilisateur ne comprendrait pas => donc pour que ça soit humainement compréhensible */}
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

// Les propTypes servent uniquement à valider le type des props qui sont passées au composant et non les valeurs
Banner.propTypes = {
  imageSrc: PropTypes.string, // URL de l'image principale, doit être une chaîne de caractères
  altText: PropTypes.string, // Texte alternatif pour l'image (title), idem
  overlayText: PropTypes.string, // Texte optionnel affiché sur l'image, idem
  className: PropTypes.string, // Classe CSS pour ajouter du style personnalisé, idem
  images: PropTypes.arrayOf(PropTypes.string), // Tableau de chaînes de caractères pour le carrousel
  isCarousel: PropTypes.bool, // Booléen true/false pour activer/désactiver le carrousel
};

export default Banner; // Exportation du composant Banner pour l'utiliser ailleurs dans le projet (home.jsx; about.jsx; housings.jsx)
