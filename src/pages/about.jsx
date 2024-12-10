import React, { useState } from 'react';
import Banner from '../components/banner'; // Import du composant Banner

function About() {
  // openSections : variable d'état qui contient les données actuelles sur l'état des sections ouvertes. Ici, est un objet où chaque clé correspond à true ou false, (gérer implicitement et dynamiquement par React selon les index de chaque rubrique )
  // setOpenSections: fonction qui permet de modifier l'état. Lorsque appelée avec une nouvelle valeur, React met à jour l'état et restitue le composant avec les nouvelles données
  // Hook useState pour gérer quelles sections sont ouvertes. Ici, initialise un état selon l'argument (valeur initiale) qui lui est passé. Ici, la valeur initiale est un objet vide {}, ce qui signifie qu'aucune section n'est ouverte au démarrage => attribué à chaque section en fonction de leur index ce qui permet de gérer leur état respectif
  const [openSections, setOpenSections] = useState({});

  // Fonction pour gérer l'ouverture/fermeture des sections
  const toggleSection = (section) => {
    // setOpenSections appelle la fonction pour mettre à jour l'état
    // (prev) représente la valeur actuelle d'openSections avant la mise à jour
    setOpenSections((prev) => ({
      ...prev,  // Copie toutes les paires clé-valeur existantes dans openSections (true/false)
      [section]: !prev[section], // Met à jour l'état de la section ciblée (ex: si la section est fermée (false), elle devient ouverte (true) et vice versa)
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
  
  // Tout ce qui est entre les parenthèses du return est du JSX. C'est à dire combinaison des : balises HTML classiques comme <div> ou <h3> / composants React comme <Banner />, et expressions dynamiques entre accolades {} pour insérer du JavaScript dans le rendu HTML. 
  // Le JSX est ensuite compilé en JS pur par esbuild, qui le transforme en appels explicites à React.createElement. Ces appels sont ensuite interprétés et rendus par React (Précision sur la transformation : Esbuild ne compile pas directement en "JS pur" interprétable par le navigateur, mais en JS compréhensible par React (avec React.createElement). Clarification du rôle de React : Une fois transformé, React utilise les appels à React.createElement pour construire le Virtual DOM et effectuer le rendu. React ne "compile" pas le JSX.)
  return (
    <div>
      {/* Composant Bannière */}
      <Banner
        imageSrc="/img/about.jpg"
        altText="Paysage de la bannière de la page À propos"
        className="aboutBanner" // Classe spécifique pour cette bannière
      />

      {/* Rubriques déroulantes */}
      <div className="about__sections">
        {/* La méthode JS .map(...) est utilisée pour transformer le tableau sections en un nouveau tableau d'éléments React. Chaque élément du tableau transformé correspond à un <div> (conteneur principal), ET un <h3> ET un <img> dans le rendu initial.
        En cliquant sur une rubrique, un <div> supplémentaire (about__section-content) est conditionnellement ajouté si la rubrique est ouverte => Donc, Rendu initial : seules les sections fermées sont visibles, avec leur titre et l'icône flèche dans l'état "fermé".
        Rendu après interaction : si une section est ouverte, un nouveau <div> est ajouté dans le DOM pour afficher le contenu (section.content) */}
        {sections.map((section, index) => (
          <div key={index} className="about__section">
            <div
              className="about__section-header"
              onClick={() => toggleSection(index)}
            >
              <h3>{section.title}</h3>
              {/* Utilisation de l'icône comme flèche */}
              <img
                src="/icons/small_arrow.svg"
                alt="Ouvrir ou fermer la section"
                className={`arrow ${openSections[index] ? 'open' : ''}`}
              />
            </div>
            {/* Entre {} l'expression conditionnelle utilise openSections pour déterminer quelles sections doivent être ouvertes ou fermées. Si openSections[index] est true, alors la deuxième partie de l'expression (le contenu après &&) sera affichée et validée, sinon rien ne s'affiche */}
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
