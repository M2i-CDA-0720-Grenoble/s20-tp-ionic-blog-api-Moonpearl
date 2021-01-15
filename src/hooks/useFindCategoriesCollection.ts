import { useState, useEffect } from "react";
import { RequestState } from "../enums";
import { ICategory } from "../models";

interface FindCategoriesCollectionHookValue {
  categories: ICategory[],
  requestState: RequestState,
}

const useFindCategoriesCollection = (): FindCategoriesCollectionHookValue => {
  // Retient l'état actuel de la liste des categories
  const [categories, setCategories] = useState<ICategory[]>([]);
  // Retient l'état d'avancement actuel de la requête
  const [requestState, setRequestState] = useState(RequestState.Idle);

  // Déclenche un effet uniquement au montage du composant
  useEffect(
    () => {
      setRequestState(RequestState.Pending);
      // Récupère l'adresse du serveur dans les variables d'environnement (et renomme la variable par commodité)
      const { REACT_APP_API_BASEURL: API_BASEURL } = process.env;
      // Envoie une requête dans l'API pour récupérer l'ensemble des categories
      // (dans l'ordre décroissant de date de création = du plus récent au plus ancien)
      fetch(`${API_BASEURL}/categories?_sort=name&_order=asc&_embed=articles`)
      // Dès que la requête a répondu, vérifie que la réponse ne contient pas un code d'erreur
      // et transforme son contenu en objet JavaScript
      .then(
        response => {
          if(!response.ok){
            setRequestState(RequestState.Failed);
            throw new Error("Unable to fetch categories collection.");
          }
          setRequestState(RequestState.Success);
          return response.json();
        })
      // Stocke le résultat de la requête dans la variable d'état
      .then( (json: ICategory[]) => setCategories(json) )
      // En cas d'erreur, affiche l'erreur dans la console
      .catch(error => console.error(error))
    },
    // Tableau vide = déclencher l'effet uniquement lors du montage du composant
    []
  );

  return  {
    categories,
    requestState,
  };
}

export default useFindCategoriesCollection;
