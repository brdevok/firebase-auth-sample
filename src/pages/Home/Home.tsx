import React from "react";
import PageContainer from "../../components/containers/PageContainer";
import UserWelcome from "./Components/UserWelcome";

const Home:React.FC = ():JSX.Element => {

    return(
        <PageContainer bgcolor="primary.main">
            <UserWelcome/>
        </PageContainer>
    );

}

export default Home;