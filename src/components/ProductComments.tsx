import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonItem, IonList } from "@ionic/react"
import { useEffect, useState } from "react";
import { AuthLoginForm } from "../Auth/AuthLoginForm";
import { useLoginContext } from "../Auth/AuthContextProvider";
import { fetch2api } from "../helpers/helpers";

export const ProductComments:React.FC<any> = (props) => {
    interface iCommentData {
        status: boolean;
        error: string;
        count: number;
        items: [
            {
                id: number;
                title: string;
                comment: string;
                user_id: number;
                created: number;
                user: {
                    username: string;
                    firstname: string;
                    lastname: string;
                    email: string;
                }
            }
        ]
    }

    const { loginData } = useLoginContext();
    const [commentData, setCommentData] = useState<iCommentData>();

    useEffect(() => {
        const getComments = async () => {
            if(loginData && loginData.username) {
                const url = `https://api.mediehuset.net/bakeonline/comments/${props.item.id}`;
                let result = await fetch2api(url, "GET", loginData.access_token);
                result.items.reverse();
                setCommentData(result);
            }
        }
        getComments();
    }, [loginData, props.item.id])

    return (
        <IonContent>
          <IonCard>
            <img src={props.item.image.fullpath} alt={props.item.title} />
            <IonCardHeader>
              <IonCardTitle>{props.item.title}</IonCardTitle>
              <h2>Kommentarer</h2>
            </IonCardHeader>
            <IonCardContent>
            {loginData && loginData.username ? (
                <IonList>
                    {commentData && commentData.items.map((item, i) => {
                        let date2local = new Date(item.created*1000).toLocaleDateString();
                        return (
                            <IonItem key={i}>
                                <div>
                                    <strong>{`${item.title}`}</strong>
                                    <p>{`${item.comment}`}</p>
                                    <p><i>{`${item.user.username} d. ${date2local}`}</i></p>
                                </div>
                            </IonItem>
                        )
                    })}
                </IonList>
            ) : (
                <AuthLoginForm />
            )

            }
            </IonCardContent>
          </IonCard>
        </IonContent>
      );
    }