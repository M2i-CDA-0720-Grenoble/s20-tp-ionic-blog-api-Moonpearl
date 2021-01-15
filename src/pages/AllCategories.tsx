import React, { FC } from "react";
import { Category, FetchedContent, Layout } from "../components";
import { useFindCategoriesCollection } from "../hooks";

const AllCategories: FC = () => {
  // Récupère la liste des catégories, ainsi que l'état d'avancement de la requête AJAX qui permet de le faire
  const { categories, requestState } = useFindCategoriesCollection();
  
  return (
    <Layout title="Categories">

      <FetchedContent
        requestState={requestState}
        errorMessage="Unable to fetch categories collection."
      >
        <Category.List categories={categories} />
      </FetchedContent>

    </Layout>
  );
}

export default AllCategories;
