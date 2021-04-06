import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonItem, IonList } from "@ionic/react"

export const ProductComments:React.FC<any> = (props) => {
    return (
        <IonContent>
          <IonCard>
            <img src={props.item.image.fullpath} alt={props.item.title} />
            <IonCardHeader>
              <IonCardTitle>{props.item.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <h2>Kommentarer</h2>
                <IonList>
                </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
      );
    }