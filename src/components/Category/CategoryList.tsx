import { IonList } from "@ionic/react";
import React, { FC } from "react";
import { ICategory } from "../../models";
import CategoryPreview from "./CategoryPreview";

interface CategoryListProps {
  categories: ICategory[],
}

const CategoryList: FC<CategoryListProps> = ({ categories }) =>
  <IonList>
    {
      categories.map(
        (category, index) => 
          <CategoryPreview
            key={index}
            category={category}
          />
      )
    }
  </IonList>
;

export default CategoryList;
