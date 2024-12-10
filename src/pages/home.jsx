import React from 'react';
import { Link } from 'react-router-dom'; // Import de Link pour la navigation
import Banner from '../components/banner'; // Import du composant Banner
import logements from '../data/logements'; // Import du JSON



function Home() {
  return (
    <div>
      {/* Composant Bannière */}
      <Banner
        imageSrc="/img/home.jpg"
        altText="Paysage de la bannière de la page d'accueil"
        overlayText="Chez vous, partout et ailleurs"
        className="homeBanner"
      />
      <div className="home__gallery-container">
        <div className="home__gallery">
          {logements.map((logement) => (
            <div key={logement.id} className="home__card">
              <Link to={`/housings/${logement.id}`}>
                <img
                  src={logement.cover}
                  alt={logement.title}
                  className="home__card-image"
                />
                <div className="home__card-overlay"></div> {/* l'Overlay est un élément distinct pour maximiser la flexibilité et la clarté. Il est positionné au-dessus de l'image => Voile avec gradient */}
                <h3 className="home__card-title">{logement.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

 
