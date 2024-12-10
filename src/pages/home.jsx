import React from 'react';
import Banner from '../components/banner'; // Import du composant Banner
import logements from '../data/logements'; // Import du JSON


function Home() {
  return (
    <div>
      <Banner
        imageSrc="/img/home.jpg" // Image spécifique
        altText="Paysage de la bannière de la page d'accueil"
        overlayText="Chez vous, partout et ailleurs"
        className="homeBanner" // Classe spécifique à cette bannière
      />
      <div className="home__gallery">
        {logements.map((logement) => (
          <div key={logement.id} className="home__card">
            <img src={logement.cover} alt={logement.title} className="home__card-image" />
            <h3 className="home__card-title">{logement.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
