import React from 'react';
import { Link } from 'react-router-dom';
import './error404'; 

function Error404() {
  return (
    <div className="error404">
      <h1 className="error404__title">404</h1>
      <p className="error404__message">Oups! La page que vous demandez n'existe pas.</p>
      {/* <Link> est un lien unique qui redirige toujours vers la page d’accueil (/) => action statique (il renvoie toujours à l'accueil). Il n'a pas besoin d'ajouter une classe CSS "active" ou de vérifier si cette route est active comme avec <NavLink>, qui elle, peut gérer plusieurs liens et les stylisés grâce à une classe */}
      <Link to="/" className="error404__link">Retourner sur la page d’accueil</Link>
    </div>
  );
}

{/* <Navlink> et <link> sont des composants de base pour naviguer sans rechargement dans une SPA (Single Page Application). Contrairement à une balise <a>, ils ne rechargent pas la page et utilise la navigation interne fournie par react-router-dom. */}

export default Error404;
