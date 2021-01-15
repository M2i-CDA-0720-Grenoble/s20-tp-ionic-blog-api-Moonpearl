import { IonSpinner, IonToast } from '@ionic/react';
import React, { FC, useEffect, useState } from 'react';
import { Article, Layout } from '../components';
import { RequestState } from '../enums';
import { IArticle } from '../models';
import './Home.css';

const Home: FC = () => {
  
  // Retient l'état actuel de la liste des articles
  const [articles, setArticles] = useState<IArticle[]>([]);
  // Retient l'état d'avancement actuel de la requête
  const [requestState, setRequestState] = useState(RequestState.Idle);

  // Déclenche un effet uniquement au montage du composant
  useEffect(
    () => {
      setRequestState(RequestState.Pending);
      // Récupère l'adresse du serveur dans les variables d'environnement (et renomme la variable par commodité)
      const { REACT_APP_API_BASEURL: API_BASEURL } = process.env;
      // Envoie une requête dans l'API pour récupérer l'ensemble des articles
      // (dans l'ordre décroissant de date de création = du plus récent au plus ancien)
      fetch(`${API_BASEURL}/articles?_sort=createdAt&_order=desc`)
      // Dès que la requête a répondu, vérifie que la réponse ne contient pas un code d'erreur
      // et transforme son contenu en objet JavaScript
      .then(
        response => {
          if(!response.ok){
            setRequestState(RequestState.Failed);
            throw new Error("Unable to fetch articles collection.");
          }
          setRequestState(RequestState.Success);
          return response.json();
        })
      // Stocke le résultat de la requête dans la variable d'état
      .then( (json: IArticle[]) => setArticles(json) )
      // En cas d'erreur, affiche l'erreur dans la console
      .catch(error => console.error(error))
    },
    // Tableau vide = déclencher l'effet uniquement lors du montage du composant
    []
  );

  // Détermine le composant à afficher en fonction de l'état actuel de la requête
  const displayContent = () => {
    switch (requestState) {
      // Requête en cours = indicateur de chargement
      case RequestState.Pending:    return <IonSpinner />;
      // Requête réussie = liste des articles
      case RequestState.Success:    return <Article.List articles={articles} />;
      // Requête échouée = message d'erreur
      case RequestState.Failed:     return <IonToast isOpen message="Unable to fetch articles." duration={5000} />;
      // Dans tous les autres cas = rien du tout
      default:    return null;
    }
  }

  return (
    <Layout title="Articles">

      {displayContent()}

    </Layout>
  );
};

export default Home;
