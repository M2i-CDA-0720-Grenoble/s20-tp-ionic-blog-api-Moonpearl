import React, { FC } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { Article, Layout } from "../components";
import { IArticle } from "../models";

type TParams = { id: string };

const SingleArticle: FC<RouteComponentProps<TParams>> = ({ match }) => {
  const id = Number(match.params.id);

  // TODO - Récupérer l'article avec l'ID demandé dans le serveur
  const article: IArticle | undefined = undefined;
  
  if (typeof article === 'undefined') {
    return <Redirect to="/" />;
  }

  return (
    <Layout title="Read Article">

      <Article.Details article={article} />

    </Layout>
  )
}

export default SingleArticle;
