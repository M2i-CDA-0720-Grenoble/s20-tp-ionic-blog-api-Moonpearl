import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, { FC } from "react";
import { Article } from "..";
import { ICategory } from "../../models";
import MarkupContainer from "../MarkupContainer";

interface CategoryDetailsProps {
  category: ICategory,
}

const CategoryDetails: FC<CategoryDetailsProps> = ({ category }) => 
  <>
    <IonCard>
      
      <IonCardHeader>
        <IonCardTitle>{category.name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <MarkupContainer html={category.description} />
      </IonCardContent>

    </IonCard>

    {
      category.articles &&
      <Article.List articles={category.articles} />
    }
  </>
;

export default CategoryDetails;
