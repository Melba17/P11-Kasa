import React from 'react';
import Banner from '../components/banner'; // Import du composant Banner


function Home() {
  return (
    <div>
      <Banner
        imageSrc="/img/home.jpg" // Image spécifique
        altText="Paysage de la bannière de la page d'accueil"
        overlayText="Chez vous, partout et ailleurs"
        className="homeBanner" // Classe spécifique à cette bannière
      />
    </div>
  );
}

export default Home;
