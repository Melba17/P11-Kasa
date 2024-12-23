// Importation des composants nécessaires pour gérer le routage avec React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des composants de pages
import Home from './pages/home'; // Composant de la page d'accueil
import About from './pages/about'; // Composant de la page "À propos"
import Housings from './pages/housings'; // Composant pour afficher les informations sur un logement
import Error404 from './pages/error404'; // Composant pour la page d'erreur 404

// Importation des composants d'interface utilisateur réutilisables
import Header from './components/header'; // Composant pour l'en-tête (Header)
import Footer from './components/footer'; // Composant pour le pied de page (Footer)


// Définition du composant principal App, qui configure la structure de l'application, ce qui constitue la base d'une Single Page Application (SPA) en React
// Ce fichier gère => la navigation entre les différentes pages / <Header /> et <Footer /> sont hors du scope des routes et sont affichés de manière constante, quelle que soit la route active / Une route "catch-all" pour afficher une page d'erreur si l'URL ne correspond à aucune route définie
function App() {
  return (
    // Utilisation de `Router` pour activer la navigation avec React Router => Active le routage basé sur l'URL dans l'application
    <Router>
      {/* Le composant Header est toujours affiché, quelle que soit la route active */}
      <Header />
      
      {/* Conteneur <main> pour englober les routes. Cela permet de styliser facilement cette partie avec SCSS */}
      <main>
        {/* Conteneur `Routes` permet de définir plusieurs routes dans l'application */}
        <Routes>
          {/* Définition de la route pour la page d'accueil / path : Définit l'URL qui déclenche cette route / element : spécifie le composant à afficher lorsque la route est activée => la prop element attend une expression JSX (un composant React ici Home issu de home.jsx) */}
          <Route path="/" element={<Home />} />

          {/* Définition de la route pour la page "À propos" */}
          <Route path="/about" element={<About />} />

          {/* Définition de la route pour les logements avec un paramètre dynamique `:id` pour afficher les détails pour un logement spécifique */}
          <Route path="/housings/:id" element={<Housings />} />
          {/* path="*" redirige vers Error404 pour toutes les URL non définies */}
          <Route path="*" element={<Error404 />} /> 
        </Routes>
      </main>

      {/* Le composant Footer est toujours affiché, quelle que soit la route active */}
      <Footer />
    </Router>
  );
}

// Exportation du composant App pour qu'il puisse être utilisé dans le fichier principal index.jsx
export default App;
