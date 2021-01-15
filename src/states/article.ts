import { Reducer } from "react";
import { IArticle, IComment } from "../models";

export enum ActionType {
  Set = 'SET',
  AddComment = 'ADD_COMMENT',
}

export interface IAction {
  type: ActionType,
  article?: IArticle,
  comment?: IComment,
}

const articleReducer: Reducer<IArticle | undefined, IAction> = (article, action) => {
  switch (action.type) {
    case ActionType.Set:
      return action.article;
    case ActionType.AddComment:
      if (typeof article !== 'undefined' && typeof article.comments !== 'undefined' && typeof action.comment !== 'undefined')
        return {
          ...article,
          comments: [
            ...article?.comments,
            action.comment,
          ],
        };
    default:
      return article;
  }
};

export default articleReducer;
