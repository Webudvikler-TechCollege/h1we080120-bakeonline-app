import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Header } from '../components/partials/Header';

export const Categories: React.FC = props => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
      </IonContent>
      <IonFooter />
    </IonPage>
  );
};