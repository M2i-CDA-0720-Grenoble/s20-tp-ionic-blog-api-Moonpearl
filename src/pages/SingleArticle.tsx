import { IonSpinner, IonToast } from "@ionic/react";
import React, { FC } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { Article, Layout } from "../components";
import { RequestState } from "../enums";
import { useFindSingleArticle } from "../hooks";

// Précise que le composant attend une portion variable "id" dans son URL
type TParams = { id: string };


const SingleArticle: FC<RouteComponentProps<TParams>> = ({ match }) => {
  // Récupère l'ID de l'article demandé dans l'URL
  const id = Number(match.params.id);
  // Récupère l'article demandé, ainsi que l'état d'avancement de la requête AJAX qui permet de le faire
  const { article, requestState, statusCode } = useFindSingleArticle(id);

  // Si l'article n'a pas été trouvé, redirige vers la page d'accueil
  if (statusCode === 404) {
    return <Redirect to="/" />;
  }
  
  // Détermine le composant à afficher en fonction de l'état actuel de la requête
  const displayContent = () => {
    switch (requestState) {
      // Requête en cours = indicateur de chargement
      case RequestState.Pending:    return <IonSpinner />;
      // Requête réussie = liste des articles
      case RequestState.Success:    return article && <Article.Details article={article} />;
      // Requête échouée = message d'erreur
      case RequestState.Failed:     return <IonToast isOpen message="Unable to fetch article." duration={5000} />;
      // Dans tous les autres cas = rien du tout
      default:    return null;
    }
  }

  return (
    <Layout title="Read Article">

      {displayContent()}

    </Layout>
  )
}

export default SingleArticle;
