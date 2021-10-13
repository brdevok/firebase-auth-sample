import React, { createContext, useState } from "react";
import Firebase from "../libs/Firebase";
import { FirebaseContextOptions } from "../types/FirebaseContext";

export const FirebaseContext = createContext({} as FirebaseContextOptions);

export const FirebaseProvider:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const firebase = new Firebase();

    const [app, setApp] = useState(firebase.app);

    return(
        <FirebaseContext.Provider
            value={{
                app
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );

}