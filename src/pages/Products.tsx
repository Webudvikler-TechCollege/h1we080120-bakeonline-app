import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Header } from '../components/partials/Header';

export const Products: React.FC = props => {
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding-horizontal" fullscreen>
        <h1 className="ion-text-center">Produkter</h1>
      </IonContent>
      <IonFooter />
    </IonPage>
  );
};