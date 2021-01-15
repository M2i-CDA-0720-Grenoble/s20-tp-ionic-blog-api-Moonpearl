import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSegment, IonText, IonTitle } from "@ionic/react";
import React, { FC } from "react";
import { Comment } from "..";
import { IArticle } from "../../models";
import MarkupContainer from "../MarkupContainer";

import './ArticleDetails.css';

interface ArticleDetailsProps {
  article: IArticle,
}

const ArticleDetails: FC<ArticleDetailsProps> = ({ article: { id, title, cover, category, createdAt, content, comments} }) =>
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

    {
      comments && comments.length > 0 ?
        <>
          <IonTitle>Comments</IonTitle>
          <Comment.List comments={comments} />
        </>
      :
      <IonSegment>
        <IonText color="danger"><p>No one has commented this article yet.</p></IonText>
      </IonSegment>
    }

    <IonTitle>Add a Comment</IonTitle>

    <Comment.AddForm articleId={id as number} />
  </>
;

export default ArticleDetails;
