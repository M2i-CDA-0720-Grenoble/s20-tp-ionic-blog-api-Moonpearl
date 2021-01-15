import React, { FC } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { Category, Layout } from "../components";
import { ICategory } from "../models";

type TParams = { id: string };

const SingleCategory: FC<RouteComponentProps<TParams>> = ({ match }) => {
  const id = Number(match.params.id);

  // TODO - Récupérer la catégorie avec l'ID demandé dans le serveur
  const category: ICategory | undefined = undefined;

  if (typeof category === 'undefined') {
    return <Redirect to="/" />;
  }

  return (
    <Layout title="Category">

      <Category.Details category={category} />

    </Layout>
  )
}

export default SingleCategory;
