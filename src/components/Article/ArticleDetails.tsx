import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React, { FC } from "react";
import { IArticle } from "../../models";
import MarkupContainer from "../MarkupContainer";

import './ArticleDetails.css';

interface ArticleDetailsProps {
  article: IArticle,
}

const ArticleDetails: FC<ArticleDetailsProps> = ({ article: { id, title, cover, category, createdAt, content} }) =>
  <>
    <IonCard>
      <img src={cover} alt={`Cover for article: ${title}`} />

      <IonCardHeader>
        <IonBadge color="tertiary">{category?.name}</IonBadge>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>Published on {createdAt}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <MarkupContainer className="ArticleDetails-content" html={content} />
      </IonCardContent>

    </IonCard>
  </>
;

export default ArticleDetails;
