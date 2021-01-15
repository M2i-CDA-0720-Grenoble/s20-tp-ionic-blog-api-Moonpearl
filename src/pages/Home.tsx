import React, { FC } from 'react';
import { Article, Layout } from '../components';
import { IArticle } from '../models';
import './Home.css';

const Home: FC = () => {
  // TODO - Récupérer la liste des articles dans le serveur
  const articles: IArticle[] = [];

  return (
    <Layout title="Articles">

      <Article.List articles={articles} />

    </Layout>
  );
};

export default Home;
