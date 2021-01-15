import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React, { FC } from "react";
import { Route, Redirect } from "react-router";
import { AllCategories, Home, SingleArticle, SingleCategory } from "../pages";
import { documentTextOutline, fileTrayStackedOutline } from "ionicons/icons";

const Navigation: FC = () =>
  <IonReactRouter>

    <IonTabs>
      <IonRouterOutlet>

        <Route exact path="/tabs/:tab(articles)" component={Home} />
        <Route exact path="/tabs/:tab(categories)" component={AllCategories} />
        <Route exact path="/articles/:id(\d+)" component={SingleArticle} />
        <Route exact path="/categories/:id(\d+)" component={SingleCategory} />

        <Route exact path="/" render={() => <Redirect to="/tabs/articles" />} />

      </IonRouterOutlet>

      <IonTabBar slot="bottom">

        <IonTabButton tab="articles" href="/tabs/articles">
          <IonIcon icon={documentTextOutline} />
          <IonLabel>Articles</IonLabel>
        </IonTabButton>

        <IonTabButton tab="categories" href="/tabs/categories">
          <IonIcon icon={fileTrayStackedOutline} />
          <IonLabel>Categories</IonLabel>
        </IonTabButton>
        
      </IonTabBar>
    </IonTabs>

  </IonReactRouter>
;

export default Navigation;
