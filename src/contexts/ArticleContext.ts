import { createContext } from "react";

interface ArticleContextValue {
  dispatchArticle: Function,
}

const ArticleContext = createContext<ArticleContextValue>({
  dispatchArticle: () => {}
});

export default ArticleContext;
