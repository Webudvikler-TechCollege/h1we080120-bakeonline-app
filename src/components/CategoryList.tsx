import { IonItem, IonList } from "@ionic/react"
import { useEffect, useState } from "react"
import { fetch2api } from "../helpers/helpers";

export const CategoryList = () => {
    interface iCategoryData {
        status: boolean;
        error: string;
        count: number;
        items: [
            {
                id: number;
                title: string;
                request: {
                    type: string;
                    url: string;
                }
            }
        ]
    }

    const [apiData, setApiData] = useState<iCategoryData>();

    useEffect(() => {
        const getCategories = async () => {
            const url = "https://api.mediehuset.net/bakeonline/categories";
            const result = await fetch2api(url);
            setApiData(result);
        }

        getCategories();
    })

    return (
        <IonList>
            {apiData && apiData.items && apiData.items.map((item, i) => {
                return (
                    <IonItem key={item.id}>
                        <a href={`/page/Products/${item.id}`}>{item.title}</a>
                    </IonItem>
                )
            })}
        </IonList>
    )
}