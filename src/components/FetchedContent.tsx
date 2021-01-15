import { IonLoading, IonToast } from "@ionic/react";
import React, { FC, ReactElement } from "react";
import { RequestState } from "../enums";

interface FetchedContentProps {
  requestState: RequestState,
  errorMessage: string,
}

const FetchedContent: FC<FetchedContentProps> = ({ requestState, errorMessage, children }) => {
  // Détermine le composant à afficher en fonction de l'état actuel de la requête
  switch (requestState) {
    // Requête en cours = indicateur de chargement
    case RequestState.Pending:
      return <IonLoading
        isOpen
        message={'Please wait...'}
      />;

    // Requête réussie = liste des articles
    case RequestState.Success:
      return children as ReactElement<any>;

    // Requête échouée = message d'erreur
    case RequestState.Failed:
      return <IonToast isOpen message={errorMessage} duration={5000} />;

    // Dans tous les autres cas = rien du tout
    default:
      return null;
  }
}

export default FetchedContent;
