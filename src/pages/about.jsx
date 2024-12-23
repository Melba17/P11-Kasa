import Banner from '../components/banner'; // Importation du composant Banner pour afficher une bannière
import Collapses from '../components/collapses'; // Importation du composant Collapses pour afficher les sections repliables
import aboutSections from '../data/aboutSections'; // Importation des données JSON contenant les sections À propos

// Composant pour afficher la page À propos
function About() {
  return (
    <div className="about"> {/* Conteneur principal avec une classe CSS pour styliser la page À propos */}
      <Banner 
        imageSrc="/img/about.jpg" // Image utilisée dans la bannière
        altText="Paysage de la bannière de la page À propos" // Texte alternatif pour l'image (accessibilité)
        className="aboutBanner" // Classe CSS spécifique pour styliser cette bannière
      />
      <div className="about__sections"> {/* Conteneur pour les sections repliables */}
        {aboutSections.map((section, index) => ( // Parcourt le tableau aboutSections pour générer une section repliable pour chaque élément
          <Collapses 
            key={index} // Clé unique basée sur l'index 
            title={section.title} // Titre de la section, extrait du fichier JS
            content={section.content} // Contenu de la section, extrait du fichier JS
          />
        ))}
      </div>
    </div>
  );
}

export default About; // Exportation du composant About pour qu'il puisse être utilisé dans App.jsx
