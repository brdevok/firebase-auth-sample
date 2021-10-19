import React from "react";
import PageContainer from "../../components/containers/PageContainer";
import SignInForm from "./Components/SignInForm";

const SignIn:React.FC = ():JSX.Element => {

    return(
        <PageContainer bgcolor="secondary.contrastText">
            <SignInForm/>
        </PageContainer>
    );

}

export default SignIn;