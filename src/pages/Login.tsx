import { IonContent, IonFooter, IonPage } from '@ionic/react';
import { AuthLoginForm } from '../Auth/AuthLoginForm';
import { Header } from '../components/partials/Header';

export const Login: React.FC = props => {
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding-horizontal" fullscreen>
        <h1 className="ion-text-center">Login</h1>
        <AuthLoginForm />
      </IonContent>
      <IonFooter />
    </IonPage>
  );
};