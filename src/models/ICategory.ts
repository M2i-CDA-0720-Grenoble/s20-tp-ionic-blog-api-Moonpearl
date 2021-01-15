import { IArticle, IEntity } from ".";

export default interface ICategory extends IEntity {
  name: string,
  description: string,
  articles?: IArticle[],
}
