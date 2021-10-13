import React from "react";
import ReactDOM from "react-dom"
import CustomTheme from "./components/theming/CustomTheme";
import { AuthProvider } from "./contexts/AuthContext";
import { FirebaseProvider } from "./contexts/FirebaseContext";
import Routes from "./routes/Routes";

const App:React.FC = ():JSX.Element => {

    return(
        <FirebaseProvider>
            <AuthProvider>
                <CustomTheme>
                    <Routes/>
                </CustomTheme>
            </AuthProvider>
        </FirebaseProvider>
    );

}

ReactDOM.render(<App/>, document.getElementById("root"));