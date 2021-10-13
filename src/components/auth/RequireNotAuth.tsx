import React, { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import ROUTES from "../../assets/routes/ROUTES";

const RequireNotAuth:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    const { isSigned } = useContext(AuthContext);

    return(
        <>
            {
            isSigned !== null
            ?
                isSigned === false
                ?
                children
                :
                <Redirect to={ROUTES["HOME"]}/>
            :
            null
            }
        </>
    );

}

export default RequireNotAuth;