import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { CategoryList } from '../components/CategoryList';
import { Header } from '../components/partials/Header';

export const Categories: React.FC = props => {
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding-horizontal" fullscreen>
        <h1 className="ion-text-center">Kategorier</h1>
        <CategoryList />
      </IonContent>
      <IonFooter />
    </IonPage>
  );
};