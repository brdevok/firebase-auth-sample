import React, { createContext, useContext, useEffect, useState } from "react";
import Authentication from "../libs/Authentication";
import { AuthContextOptions } from "../types/AuthContext";
import { FirebaseContext } from "./FirebaseContext";

export const AuthContext = createContext({} as AuthContextOptions);

export const AuthProvider:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const { app } = useContext(FirebaseContext);

    const [isSigned, setIsSigned] = useState<boolean|null>(null);

    Authentication.authStateObserver(app, {
        onSignedIn: () => setIsSigned(true),
        onSignedOut: () => setIsSigned(false)
    });

    return(
        <AuthContext.Provider
            value={{
                isSigned,
                setIsSigned
            }}
        >
            {children}
        </AuthContext.Provider>
    );

}