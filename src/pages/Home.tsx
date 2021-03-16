import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { NewsList } from '../components/NewsList';
import { Header } from '../components/partials/Header';

export const Home: React.FC = props => {
  return (
    <IonPage>
      <Header name="Forside"></Header>
      <IonContent fullscreen>
        <NewsList />
      </IonContent>
      <IonFooter />
    </IonPage>
  );
};