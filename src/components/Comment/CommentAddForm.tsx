import { IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/react";
import React, { FC, useContext, useState } from "react";
import { ArticleContext } from "../../contexts";
import { IComment } from "../../models";
import { ActionType } from "../../states/article";

interface CommentAddFormProps {
  articleId: number,
}

const CommentAddForm: FC<CommentAddFormProps> = ({ articleId }) => {
  const { dispatchArticle } = useContext(ArticleContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleClick = () => {
    const newComment: IComment = {
      id: null,
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      username,
      email,
      content,
      articleId,
    };

    const { REACT_APP_API_BASEURL: API_BASEURL } = process.env;
    fetch(`${API_BASEURL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment),
    })
    .then( response => response.json() )
    .then( (json: IComment) => {
      setUsername('');
      setEmail('');
      setContent('');

      dispatchArticle({
        type: ActionType.AddComment,
        comment: json,
      });
    });
  }

  return (
    <>
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput 
          value={username} 
          onIonChange={event => setUsername( event.detail.value as string )}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">E-mail Address</IonLabel>
        <IonInput 
          value={email} 
          onIonChange={event => setEmail( event.detail.value as string )}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Comment</IonLabel>
        <IonTextarea 
          value={content} 
          onIonChange={event => setContent( event.detail.value as string )}
        />
      </IonItem>

      <IonButton expand="block" onClick={handleClick}>
        Post
      </IonButton>
    </>
  );
}

export default CommentAddForm;
