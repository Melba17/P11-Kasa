import { useParams } from 'react-router-dom'; // Hook pour récupérer les paramètres dynamiques de l'URL
import logements from '../data/logements'; // Importation des données JSON des logements
import Banner from '../components/banner'; // Importation du composant Banner
import Collapses from '../components/collapses'; // Importation du composant Collapses pour les sections repliables
import HousingInfo from '../components/housingInfo'; // Importation du composant HousingInfo pour afficher les infos du logement
import HostInfo from '../components/hostInfo'; // Importation du composant HostInfo pour les infos de l'hôte
import Rating from '../components/rating'; // Importation du composant Rating pour afficher les 
import Error404 from './error404'; // Importation du composant Error404 

// Page Housings
function Housings() {
  const { id } = useParams(); // Récupère l'ID passé dans l'URL grâce au hook useParams / Depuis <Route path="/housings/:id" element={<Housings />} />, dans le routeur App.jsx, l'id après : est un paramètre dynamique => useParams retourne un objet contenant les paramètres d'URL sous forme de paires clé/valeur ex: { id: "123" }, 123 est donc extrait est stocké grâce à la destructuration dans const { id }. 
  // Exemple complet : 
  // URL :/housings/123
  // useParams() retourne :{ id: "123" }
  // const { id } extrait la valeur 123 et l'assigne à la variable id (soit const { id } = { id: "123" }; => sortie en console : 123 => la console JS dans les navigateurs (comme Chrome ou Firefox) ne montre généralement pas les guillemets pour les chaînes de caractères mais "123" reste une chaîne de caractères


  const logement = logements.find((logement) => logement.id === id); // Recherche le logement correspondant à l'ID dans les données / La méthode find() parcourt le tableau logements et retourne le premier élément qui satisfait à la condition spécifiée dans la fonction de rappel => logement.id === id, ici on compare l'id de l'objet logement avec l'id extrait de l'URL (au-dessus), lorsque celui-ci est trouvé la méthode find() retourne l'objet entier dont l'id correspond (ex: { id: "123", title: "Appartement cosy", location: "Paris" } qui sera stocké dans const logement)

  
  // Si aucun logement correspondant n'est trouvé, affiche la page d'erreur 404 / La gestion de l'erreur est déléguée à housings.jsx car à la base path="/housings/:id" du fichier App.jsx est une route valide...
  if (!logement) {
    return <Error404 />; // ... Donc instanciation du composant Error404 si l'url est incorrecte
  }

  // Une fois que l'objet correspondant à l'ID est trouvé grâce à find(), il est stocké dans logement. Si logement est défini, le reste du code peut s'exécuter normalement. Si aucun logement n'est trouvé, le code affiche le message "Logement non trouvé", et le reste du code n'est pas exécuté
  return (
    <div className="housing"> {/* Conteneur principal pour la page de détails du logement */}
      {/* Bannière carrousel */}
      <Banner
        images={logement.pictures} // Passe les images du logement pour le carrousel
        altText={`Images du logement ${logement.title}`} // Texte alternatif pour l'accessibilité
        className="housingsBanner" // Classe CSS pour la bannière spécifique aux logements
        isCarousel={true} // Active le mode carrousel
      />

      {/* Ajout des infos générales */}
      <div className="housing__details"> {/* Conteneur pour les infos générales */}
        <HousingInfo
          title={logement.title} // Titre du logement
          location={logement.location} // Localisation du logement
          tags={logement.tags} // Tags associés au logement
        />
        <div className="housing__host-rating"> {/* Conteneur pour l'hôte et la note */}
          <HostInfo 
            name={logement.host.name} // Nom de l'hôte
            picture={logement.host.picture} // Photo de l'hôte
          />
          <Rating rating={Number(logement.rating)} /> {/* Note du logement convertie en nombre / const activeStars = parseInt(rating, 10); du fichier rating.jsx, fait en sorte que ce nombre soit un entier et ici Number() dans <Rating /> transforme cet entier en type number pour satisfaire les PropTypes*/}
        </div>
      </div>

      {/* Collapses pour Description et Équipements */}
      <div className="housing__collapses"> {/* Conteneur pour les sections repliables */}
        {/* Section Description */}
        <div>
          <Collapses 
            title="Description" // Titre de la section
            content={logement.description} // Contenu : description du logement
          />
        </div>
        {/* Section Équipements */}
        <div>
          <Collapses
            title="Équipements" // Titre de la section
            content={
              <ul className="equipment-list"> {/* Liste des équipements */}
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li> // Chaque équipement est affiché dans un <li> avec une clé unique
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Housings; // Exportation du composant pour l'utiliser dans le routeur App.jsx
