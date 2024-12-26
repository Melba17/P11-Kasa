
function Footer() { // Définition d'un composant fonctionnel Footer
  return (
    <footer className="footer"> {/* Élément sémantique <footer> pour définir le pied de page */}
      <div className="footer__content"> {/* Conteneur pour le contenu du pied de page avec une classe CSS BEM */}
        <img 
          src="/icons/White_Logo.svg" // Chemin vers l'image du logo en version blanche
          alt="Kasa Logo" // Texte alternatif pour l'image, nécessaire pour l'accessibilité
          className="footer__logo" // Classe CSS pour le style de l'image du logo
        />
        <p> {/* Élément de paragraphe pour afficher le texte de copyright */}
          © 2025 Kasa. All rights reserved {/* Texte affichant l'année actuelle et les droits d'auteur */}
        </p>
      </div>
    </footer>
  );
}

export default Footer; // Exportation du composant Footer pour qu'il soit utilisable dans App.jsx
