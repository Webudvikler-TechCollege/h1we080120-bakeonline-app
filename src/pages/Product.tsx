import { IonPage, IonRouterOutlet, IonTabs } from "@ionic/react"
import { Route, RouteComponentProps } from "react-router"

export const Product:React.FC<RouteComponentProps> = ({match}) => {
    console.log(match);
    return (
        <IonPage>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path={`${match}/info`}>

                    </Route>
                </IonRouterOutlet>
            </IonTabs>
        </IonPage>
    )
}