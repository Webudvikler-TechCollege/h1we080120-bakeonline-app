import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react"

export const Header:React.FC<{name: string}> = props => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>{props.name}</IonTitle>
                <IonButtons>
                    <IonMenuButton />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}