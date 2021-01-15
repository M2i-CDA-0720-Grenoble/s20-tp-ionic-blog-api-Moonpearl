import { IonSpinner, IonToast } from "@ionic/react";
import React, { FC } from "react";
import { Category, Layout } from "../components";
import { RequestState } from "../enums";
import { useFindCategoriesCollection } from "../hooks";

const AllCategories: FC = () => {
  // Récupère la liste des catégories, ainsi que l'état d'avancement de la requête AJAX qui permet de le faire
  const { categories, requestState } = useFindCategoriesCollection();

  // Détermine le composant à afficher en fonction de l'état actuel de la requête
  const displayContent = () => {
    switch (requestState) {
      // Requête en cours = indicateur de chargement
      case RequestState.Pending:    return <IonSpinner />;
      // Requête réussie = liste des articles
      case RequestState.Success:    return <Category.List categories={categories} />;
      // Requête échouée = message d'erreur
      case RequestState.Failed:     return <IonToast isOpen message="Unable to fetch articles." duration={5000} />;
      // Dans tous les autres cas = rien du tout
      default:    return null;
    }
  }
  
  return (
    <Layout title="Categories">

      {displayContent()}

    </Layout>
  )
}

export default AllCategories;
