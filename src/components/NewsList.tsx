import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonList } from "@ionic/react"
import { useEffect, useState } from "react";
import { fetch2api } from "../helpers/helpers";

export const NewsList:React.FC = () => {

    interface iApiData {
        status: boolean;
        error: string;
        count: number;
        items: [
            {
                id: number;
                title: string;
                teaser: string;
                image: string;
                created: number;
                request: {
                    type: string;
                    url: string;
                }
            }
        ]
    }

    const [newsData, setNewsData] = useState<iApiData>();

    useEffect(() => {
        const getNews = async () => {
            const url:string = `https://api.mediehuset.net/bakeonline/news`;
            const result = await fetch2api(url);
            console.log(result);
            setNewsData(result);
        }
        getNews();
    }, [])

    return (
        <IonContent className="ion-padding ion-text-center">
            <IonList>
                {newsData && newsData.items.map((item, i) => {
                    return (
                        <IonCard key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <IonCardHeader>
                                <IonCardTitle>{item.title}</IonCardTitle>
                                <IonCardContent>{item.teaser}</IonCardContent>
                            </IonCardHeader>
                        </IonCard>
                    )
                })}
            </IonList>
        </IonContent>
    )
}