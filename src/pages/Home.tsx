import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { NewsList } from '../components/NewsList';
import { Header } from '../components/partials/Header';

export const Home: React.FC = props => {
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding-horizontal" fullscreen>
        <h1 className="ion-text-center">Velkommen til BakeOnline</h1>
        <NewsList />
      </IonContent>
      <IonFooter />
    </IonPage>
  );
};