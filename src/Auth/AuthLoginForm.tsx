import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react"
import { useState } from "react";
import { fetch2api } from '../helpers/helpers'
import { useLoginContext } from "./AuthContextProvider";


export const AuthLoginForm:React.FC = () => {
    const { loginData, setLoginData } = useLoginContext();
    const [message, setMessage] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        setMessage('');
        let formData: any = new FormData();
        formData.append('username', username)
        formData.append('password', password)
        let url = "https://api.mediehuset.net/token";
        let result = await fetch2api(url, 'POST', '', formData)
        handleSessionData(result);
    }

    const handleSessionData = (res:any) => {
        if(!res.message) {
            setLoginData(res);
            sessionStorage.setItem('token', JSON.stringify(res))
        } else {
            setMessage('Kunne ikke matche brugernavn eller adgangskode');
        }
    }

    const handleLogout = () => {
        setLoginData('');
        sessionStorage.removeItem('token');
        setMessage('Du er nu logget ud!');

        let timer = setTimeout(() => {
            setMessage("Indtast Login oplysninger")
            clearTimeout(timer);
        }, 3500)
    }     

    return (
        <>
            <p>{message}</p>

            {!loginData ? 
                <>
                    <IonItem className="ion-no-padding" lines="none">
                        <IonLabel position="floating">Brugernavn:</IonLabel>
                        <IonInput name="username" type="text" value={username} onIonChange={(e) => setUsername(e.detail.value as any)}></IonInput>
                    </IonItem>
                    <IonItem className="ion-no-padding">
                        <IonLabel position="floating">Password:</IonLabel>
                        <IonInput name="password" type="password" value={password} onIonChange={(e) => setPassword(e.detail.value as any)}></IonInput>
                    </IonItem>
                    <IonItem className="ion-no-padding" lines="none">
                        <IonButton onClick={handleLogin}>Send</IonButton>
                    </IonItem>
                </> : 
                <>
                    <p>Du er logget ind som {loginData.username}</p>
                    <IonItem className="ion-no-padding" lines="none">
                        <IonButton onClick={handleLogout}>Log out</IonButton>
                    </IonItem>
                </>
            }
        </>
    )
}