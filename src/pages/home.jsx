import Banner from '../components/banner'; // Importation du composant Banner pour afficher une bannière
import Gallery from '../components/gallery'; // Importation du composant Gallery pour afficher la galerie des logements
import logements from '../data/logements'; // Importation des données JSON contenant la liste des logements

// Définition du composant Home : composant principal pour la page d'accueil
function Home() {
  return (
    <div> {/* Conteneur principal de la page d'accueil */}
      {/* Composant Bannière */}
      <Banner
        imageSrc="/img/home.jpg" // Source de l'image affichée dans la bannière
        altText="Paysage de la bannière de la page d'accueil" // Texte alternatif pour l'accessibilité
        overlayText="Chez vous, partout et ailleurs" // Texte superposé sur la bannière
        className="homeBanner" // Classe CSS spécifique pour la bannière de la page d'accueil
      />
      {/* Composant Galerie */}
      <Gallery logements={logements} /> {/* Passe les données JSON "logements" en tant que prop */}
    </div>
  );
}

export default Home; // Exportation du composant Home pour qu'il soit utilisé dans App.jsx