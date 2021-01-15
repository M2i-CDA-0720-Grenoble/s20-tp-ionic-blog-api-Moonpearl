import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonItem, IonList } from "@ionic/react";
import React, { FC } from "react";
import { IComment } from "../../models";

interface CommentListProps {
  comments: IComment[],
}

const CommentList: FC<CommentListProps> = ({ comments }) => 
  <IonList>
    {
      comments.map(
        (comment, index) =>
          <IonCard key={index}>
            <IonCardHeader>
              <IonItem>
                <IonCardSubtitle>{comment.username} says:</IonCardSubtitle>
              </IonItem>
            </IonCardHeader>

            <IonCardContent>
              {comment.content}
            </IonCardContent>
          </IonCard>
      )
    }
  </IonList>
;

export default CommentList;
