import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Auth } from '../Auth/Auth';
import { Header } from '../components/partials/Header';

export const Login: React.FC = props => {
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding-horizontal" fullscreen>
        <h1 className="ion-text-center">Login</h1>
        <Auth />
      </IonContent>
      <IonFooter />
    </IonPage>
  );
};