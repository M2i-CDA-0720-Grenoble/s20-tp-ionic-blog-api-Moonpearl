import { useState, useEffect } from "react";
import { RequestState } from "../enums";
import { IArticle } from "../models";


interface FindSingleArticleHookValue {
  article: IArticle,
  requestState: RequestState,
  statusCode: number,
}

const useFindSingleArticle = (id: number) => {
  // Retient l'état actuel de l'article à afficher
  const [article, setArticle] = useState<IArticle>();
  // Retient l'état d'avancement actuel de la requête
  const [requestState, setRequestState] = useState(RequestState.Idle);
  // Retient le code de réponse de la requête AJAX
  const [statusCode, setStatusCode] = useState(0);

  // Déclenche un comportement, uniquement au moment où le composant est monté
  useEffect(
    () => {
      setRequestState(RequestState.Pending);
      // Récupère l'adresse du serveur dans les variables d'environnement (et renomme la variable par commodité)
      const { REACT_APP_API_BASEURL: API_BASEURL } = process.env;
      // Envoie une requête dans l'API pour récupérer l'article qui possède l'ID demandé
      fetch(`${API_BASEURL}/articles/${id}`)
      // Dès que la requête a répondu, vérifie que la réponse ne contient pas un code d'erreur
      // et transforme son contenu en objet JavaScript
      .then(
        response => {
          setStatusCode(response.status);
          if (!response.ok) {
            setRequestState(RequestState.Failed);
            throw new Error("Unable to fetch article.");
          }
          setRequestState(RequestState.Success);
          return response.json();
        })
      // Stocke le résultat de la requête dans la variable d'état
      .then( (json: IArticle) => setArticle(json) )
      // En cas d'erreur, affiche l'erreur dans la console
      .catch(error => console.error(error))
    },
    // Précise que l'effet doit être déclenché à nouveau si le composant reçoit un nouvel ID
    [id]
  );

  const returnValue = {
    article,
    requestState,
    statusCode,
  };

  return returnValue;
}

export default useFindSingleArticle;
