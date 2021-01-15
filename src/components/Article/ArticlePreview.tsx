import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React, { FC } from "react";
import { MarkupContainer } from "..";
import { IArticle } from "../../models";
import './ArticlePreview.css';

interface ArticlePreviewProps {
  article: IArticle,
}

const ArticlePreview: FC<ArticlePreviewProps> = ({ article: { id, cover, category, content, title, createdAt } }) =>
  <IonCard routerLink={`/articles/${id}`}>
    <img src={cover} alt={`Cover for article: ${title}`} />

    <IonCardHeader>
      <IonBadge color="tertiary">{category?.name}</IonBadge>
      <IonCardTitle>{title}</IonCardTitle>
      <IonCardSubtitle>Published on {createdAt}</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>
      <MarkupContainer className="ArticlePreview-content" html={content} />
    </IonCardContent>
  </IonCard>
;

export default ArticlePreview;
