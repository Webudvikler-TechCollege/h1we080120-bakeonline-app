import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react"

export const Header:React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>BakeOnline</IonTitle>
                <IonButtons>
                    <IonMenuButton />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}