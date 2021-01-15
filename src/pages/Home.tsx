import { IonSpinner, IonToast } from '@ionic/react';
import React, { FC } from 'react';
import { Article, Layout } from '../components';
import { RequestState } from '../enums';
import { useFindArticlesCollection } from '../hooks';
import './Home.css';


const Home: FC = () => {
  // Récupère la liste des articles, ainsi que l'état d'avancement de la requête AJAX qui permet de le faire
  const { articles, requestState } = useFindArticlesCollection();

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
