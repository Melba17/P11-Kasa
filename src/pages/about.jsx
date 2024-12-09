import React, { useState } from 'react';
import Banner from '../components/banner'; // Import du composant Banner


function About() {
  // État pour gérer quelles sections sont ouvertes
  const [openSections, setOpenSections] = useState({});

  // Fonction pour gérer l'ouverture/fermeture des sections
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Contenu des rubriques
  const sections = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
    },
    {
      title: 'Sécurité',
      content:
        'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    },
  ];

  return (
    <div>
      {/* Bannière */}
      <Banner
        imageSrc="/img/about.jpg"
        altText="Paysage de la bannière de la page À propos"
        className="aboutBanner" // Classe spécifique pour cette bannière
      />

      {/* Rubriques déroulantes */}
      <div className="about__sections">
        {sections.map((section, index) => (
          <div key={index} className="about__section">
            <div
              className="about__section-header"
              onClick={() => toggleSection(index)}
            >
              <h3>{section.title}</h3>
              <span className={`arrow ${openSections[index] ? 'open' : ''}`}>
                ▼
              </span>
            </div>
            {openSections[index] && (
              <div className="about__section-content">{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
