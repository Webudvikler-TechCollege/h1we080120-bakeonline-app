import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonItem,
  IonList,
} from "@ionic/react";

export const ProductIngredients: React.FC<any> = (props) => {
  return (
    <IonContent>
      <IonCard>
        <img src={props.item.image.fullpath} alt={props.item.title} />
        <IonCardHeader>
          <IonCardTitle>{props.item.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <IonList>
            {props.item.ingredients.map((item:any, i:number) => {
                return (
                    <IonItem key={i}>
                        {`${item.amount} ${item.unit_abbr} ${item.ingredient_title}`}
                    </IonItem>
                )
            })}
            </IonList>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};
