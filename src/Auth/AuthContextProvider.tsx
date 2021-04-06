import { createContext, useState, useEffect, useContext } from 'react'

interface iContext {
    loginData: {
        user_id: number;
        username: string;
        access_token: string;
        token_type: string;
        expires_in: number;
    };
    setLoginData: React.Dispatch<string>;
}

export const AppContext = createContext<iContext>({} as any);

export const AppContextProvider:React.FC = ({children}) => {
    const [loginData, setLoginData] = useState<any>('')

    useEffect(() => {
        const token:any = sessionStorage.getItem('token');
        if(token) {
            setLoginData(JSON.parse(token))
        }
    }, [])
    return (
        <AppContext.Provider value={{loginData, setLoginData}}>
            {children}
        </AppContext.Provider>
    )
}

export const useLoginContext = () => useContext(AppContext);