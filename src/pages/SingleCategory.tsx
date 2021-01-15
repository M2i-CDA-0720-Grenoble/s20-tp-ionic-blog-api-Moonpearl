import { IonSpinner, IonToast } from "@ionic/react";
import React, { FC } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { Category, Layout } from "../components";
import { RequestState } from "../enums";
import { useFindSingleCategory } from "../hooks";

type TParams = { id: string };

const SingleCategory: FC<RouteComponentProps<TParams>> = ({ match }) => {
  const id = Number(match.params.id);

  const { category, requestState, statusCode } = useFindSingleCategory(id);

  // Si la catégorie n'a pas été trouvée, redirige vers la page d'accueil
  if (statusCode === 404) {
    return <Redirect to="/" />;
  }
  
  // Détermine le composant à afficher en fonction de l'état actuel de la requête
  const displayContent = () => {
    switch (requestState) {
      // Requête en cours = indicateur de chargement
      case RequestState.Pending:    return <IonSpinner />;
      // Requête réussie = détails de la catégorie
      case RequestState.Success:    return category && <Category.Details category={category} />;
      // Requête échouée = message d'erreur
      case RequestState.Failed:     return <IonToast isOpen message="Unable to fetch category." duration={5000} />;
      // Dans tous les autres cas = rien du tout
      default:    return null;
    }
  }

  return (
    <Layout title="Category">

      {displayContent()}

    </Layout>
  )
}

export default SingleCategory;
