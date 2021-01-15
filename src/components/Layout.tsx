import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import React, { FC } from "react";

interface LayoutProps {
  title: string,
}

const Layout: FC<LayoutProps> = ({ title, children }) =>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      {children}

    </IonContent>
  </IonPage>
;

export default Layout;