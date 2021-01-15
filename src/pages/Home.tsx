import React, { FC } from 'react';
import { Article, FetchedContent, Layout } from '../components';
import { useFindArticlesCollection } from '../hooks';
import './Home.css';


const Home: FC = () => {
  // Récupère la liste des articles, ainsi que l'état d'avancement de la requête AJAX qui permet de le faire
  const { articles, requestState } = useFindArticlesCollection();

  return (
    <Layout title="Articles">

      <FetchedContent
        requestState={requestState}
        errorMessage="Unable to fetch articles collection."
      >
        <Article.List articles={articles} />
      </FetchedContent>

    </Layout>
  );
}

export default Home;
