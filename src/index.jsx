// Importation de la bibliothèque React pour permettre l'utilisation de JSX et la création de composants React
import React from 'react';
// Importation de ReactDOM pour gérer le rendu des composants React dans le DOM
import ReactDOM from 'react-dom/client';
// Importation du composant principal `App` de l'application depuis le fichier App.jsx
import App from './App';
// Importation des styles globaux de l'application en utilisant le fichier SCSS
import './styles/index.scss';

//////// POINT D'ENTRÉE DE L'APPLI //////
// On utilise la méthode createRoot pour initialiser le rendu de l'application dans l'élément du DOM avec l'ID 'root' (<div id="root"></div> du html) => crée un point d’attache React dans le DOM. Elle lie React à l'élément HTML cible / Une fois le point d’attache créé, .render() est appelé pour afficher l’application qui prend le composant React <App /> et affiche son contenu dans le DOM cible / rendu initial : la 1ère fois que .render() est appelée, React convertit l’arborescence du composant JSX en éléments DOM réels et les insère dans l'élément cible (#root dans ton HTML). Ensuite, pour la mise à jour du DOM : Lorsqu'un état ou une prop change dans un composant, React re-rend les parties de l’arborescence concernées 
ReactDOM.createRoot(document.getElementById('root')).render(
  // Utilisation du composant React.StrictMode pour activer des vérifications et avertissements supplémentaires lors de léxecution du code, en signalant des méthodes dépréciées => console / double certaines exécutions pour trouver des erreurs liées aux effets secondaires (comme avec useEffect par exemple mais ce hook n'est pas utilisé dans ce projet) / peut être utilisé autour de toute l'application comme ici ou uniquement autour de composants spécifiques 
  <React.StrictMode>
    {/* Rendu du composant principal "App" (router) de l'application */}
    <App />
  </React.StrictMode>
);
