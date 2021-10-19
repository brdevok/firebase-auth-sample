import React, { useContext } from "react";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import Authentication from "../../libs/Authentication";

const SignOut:React.FC = ():JSX.Element => {

    const { app } = useContext(FirebaseContext);

    Authentication.signOutUser(app);

    return(<></>);

}

export default SignOut;