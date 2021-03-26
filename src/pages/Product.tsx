import {
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { chatboxEllipsesOutline, informationCircleOutline, listOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { Route, RouteComponentProps, useParams } from "react-router";
import { Header } from "../components/partials/Header";
import { fetch2api } from "../helpers/helpers";

export const Product: React.FC<RouteComponentProps> = ({ match }) => {
  interface iProductData {
    status: boolean;
    item: {
      id: number;
      title: string;
      teaser: string;
      description: string;
      duration: number;
      amount: number;
      image: {
        filename: string;
        fullpath: string;
      };
      num_comments: number;
      ingredients: [
        {
          amount: number;
          ingredient_title: string;
          unit_abbr: string;
          unit_name: string;
        }
      ];
    };
  }

  const { productId } = useParams<{ productId: string }>();
  const [productData, setProductData] = useState<iProductData>();

  useEffect(() => {
    const getProductData = async () => {
      const url = `https://api.mediehuset.net/bakeonline/products/${productId}`;
      const result = await fetch2api(url);
      setProductData(result);
      console.log(result);
    };
    getProductData();
  }, [productId]);

  return productData ? (
    <IonPage>
      <Header />
      <IonContent>
        <IonTabs>
          <IonRouterOutlet id="tabs">
            <Route path={`${match.url}/:tab(info)`}>
                Testing 
            </Route>
            <Route path={`${match.url}/:tab(ingredients)`}>
                Testing 
            </Route>
            <Route path={`${match.url}/:tab(comments)`}>
                Testing 
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="info" href={`${match.url}/info`}>
              <IonIcon icon={informationCircleOutline}></IonIcon>
              <IonLabel>Info</IonLabel>
            </IonTabButton>
            <IonTabButton tab="ingredients" href={`${match.url}/ingredients`}>
              <IonIcon icon={listOutline}></IonIcon>
              <IonLabel>Ingredienser</IonLabel>
            </IonTabButton>
            <IonTabButton tab="comments" href={`${match.url}/comments`}>
              <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
              <IonLabel>Kommentarer</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonPage>
  ) : null;
};
