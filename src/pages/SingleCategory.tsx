import React, { FC } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { Category, FetchedContent, Layout } from "../components";
import { useFindSingleCategory } from "../hooks";

type TParams = { id: string };

const SingleCategory: FC<RouteComponentProps<TParams>> = ({ match }) => {
  const id = Number(match.params.id);

  const { category, requestState, statusCode } = useFindSingleCategory(id);

  // Si la catégorie n'a pas été trouvée, redirige vers la page d'accueil
  if (statusCode === 404) {
    return <Redirect to="/" />;
  }

  return (
    <Layout title="Category">

      <FetchedContent
        requestState={requestState}
        errorMessage={`Unable to fetch category #${id}.`}
      >
        {category ? <Category.Details category={category} /> : null}
      </FetchedContent>

    </Layout>
  )
}

export default SingleCategory;
