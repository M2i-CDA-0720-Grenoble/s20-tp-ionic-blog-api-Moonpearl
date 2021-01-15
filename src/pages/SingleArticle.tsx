import React, { FC } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { Article, FetchedContent, Layout } from "../components";
import { ArticleContext } from "../contexts";
import { useFindSingleArticle } from "../hooks";

// Précise que le composant attend une portion variable "id" dans son URL
type TParams = { id: string };


const SingleArticle: FC<RouteComponentProps<TParams>> = ({ match }) => {
  // Récupère l'ID de l'article demandé dans l'URL
  const id = Number(match.params.id);
  // Récupère l'article demandé, ainsi que l'état d'avancement de la requête AJAX qui permet de le faire
  const { article, requestState, statusCode, dispatchArticle } = useFindSingleArticle(id);

  // Si l'article n'a pas été trouvé, redirige vers la page d'accueil
  if (statusCode === 404) {
    return <Redirect to="/" />;
  }

  return (
    <Layout title="Read Article">

      <FetchedContent
        requestState={requestState}
        errorMessage={`Unable to fetch article #${id}.`}
      >
        <ArticleContext.Provider value={{ dispatchArticle }}>
          {article ? <Article.Details article={article} /> : null}
        </ArticleContext.Provider>
      </FetchedContent>

    </Layout>
  )
}

export default SingleArticle;
