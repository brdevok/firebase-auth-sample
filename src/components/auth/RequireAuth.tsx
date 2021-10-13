import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import ROUTES from "../../assets/routes/ROUTES";

const RequireAuth:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const { isSigned } = useContext(AuthContext);

    return(
        <>
            {
            isSigned !== null
            ?
                isSigned === true
                ?
                children
                :
                <Redirect to={ROUTES["SIGN_IN"]}/>
            :
            null
            }
        </>
    );

}

export default RequireAuth;