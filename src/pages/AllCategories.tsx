import React, { FC } from "react";
import { Category, Layout } from "../components";
import { ICategory } from "../models";

const AllCategories: FC = () => {
  // TODO - Récupérer la liste des catégories dans le serveur
  const categories: ICategory[] = [];

  return (
    <Layout title="Categories">

      <Category.List categories={categories} />

    </Layout>
  )
}

export default AllCategories;
