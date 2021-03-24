import { IonContent, IonFooter, IonPage } from '@ionic/react';
import { Header } from '../components/partials/Header';
import { ProductList } from '../components/ProductList';

export const Products: React.FC = props => {
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding-horizontal" fullscreen>
        <h1 className="ion-text-center">Produkter</h1>
        <ProductList />
      </IonContent>
      <IonFooter />
    </IonPage>
  );
};