import React from "react";
import PageContainer from "../../components/containers/PageContainer";
import SignUpForm from "./Components/SignUpForm";

const SignUp:React.FC = ():JSX.Element => {

    return(
        <PageContainer bgcolor="secondary.contrastText">
            <SignUpForm/>
        </PageContainer>
    );

}

export default SignUp;