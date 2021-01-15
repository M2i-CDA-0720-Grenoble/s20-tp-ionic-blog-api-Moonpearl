import { IArticle, IEntity } from ".";

export default interface IComment extends IEntity {
  username: string,
  email: string,
  content: string,
  article?: IArticle,
};
