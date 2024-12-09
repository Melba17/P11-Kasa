import React from 'react';
import Banner from '../components/banner'; 
import '../styles/components/banners.scss'; 

function Home() {
  return (
    <div>
      <Banner
        imageSrc="/img/home.jpg"
        altText="Paysage de la bannière de la page d'accueil"
        overlayText="Chez vous, partout et ailleurs"
        className="homeBanner"
      />
    </div>
  );
}

export default Home;
