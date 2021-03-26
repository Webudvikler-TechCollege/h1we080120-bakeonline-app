import { IonItem, IonList, IonText, IonThumbnail } from "@ionic/react"
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { fetch2api } from "../helpers/helpers";

export const ProductList:React.FC = () => {
    interface iCategoryData {
        status: boolean;
        error: string;
        item: {
            id: number;
            title: string;
            products: [
                {
                    id: number;
                    title: string;
                    teaser: string;
                    image: {
                        filename: string;
                        fullpath: string;
                    }
                    price: number;
                    num_comments: number;
                    request: {
                        type: string;
                        url: string;
                    }
                }
            ]
        }
    }

    const { categoryId } = useParams<any>();
    const [apiData, setApiData] = useState<iCategoryData>();

    useEffect(() => {
        const getProductList = async () => {
            const url = `https://api.mediehuset.net/bakeonline/categories/${categoryId}`;
            const result = await fetch2api(url);
            setApiData(result);
        }
        getProductList();
    }, [categoryId])


    return (
        <IonList>
            {apiData && apiData.item && apiData.item.products && apiData.item.products.map((item, i) => {
                return (
                    <IonItem key={item.id} routerLink={`/page/Product/${item.id}/info`}>
                        <IonThumbnail>
                            <img src={item.image.fullpath} alt={item.title} />
                        </IonThumbnail>
                        <IonText>{item.title}</IonText>
                    </IonItem>
                )
            })}
        </IonList>
    )
}