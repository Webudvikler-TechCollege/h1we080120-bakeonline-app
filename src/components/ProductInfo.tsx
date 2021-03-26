import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
} from "@ionic/react";

export const ProductInfo: React.FC<any> = (props) => {
  console.log(props);

  return (
    <IonContent>
      <IonCard>
        <img src={props.item.image.fullpath} alt={props.item.title} />
        <IonCardHeader>
          <IonCardTitle>{props.item.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent style={{ whiteSpace: "pre-wrap" }}>
          {props.item.description}
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};
