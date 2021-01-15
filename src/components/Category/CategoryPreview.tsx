import { IonItem } from "@ionic/react";
import React, { FC } from "react";
import { ICategory } from "../../models";

interface CategoryPreviewProps {
  category: ICategory;
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ category }) => 
  <IonItem routerLink={`/categories/${category.id}`}>
    {category.name} {category.articles && `(${category.articles.length})`}
  </IonItem>
;

export default CategoryPreview;
