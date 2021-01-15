import { ICategory, IComment, IEntity } from ".";

export default interface IArticle extends IEntity {
  title: string,
  content: string,
  cover: string,
  category?: ICategory,
  comments?: IComment[],
}
