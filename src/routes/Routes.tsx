import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import ROUTES from "../assets/routes/ROUTES";
import RequireAuth from "../components/auth/RequireAuth";
import RequireNotAuth from "../components/auth/RequireNotAuth";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignOut from "../pages/SignOut/SignOut";
import SignUp from "../pages/SignUp/SignUp";

const Routes:React.FC = ():JSX.Element => {

    return(
        <HashRouter>

            <Switch>

                <Route exact path={ROUTES["HOME"]}>
                    <RequireAuth>
                        <Home/>
                    </RequireAuth>
                </Route>

                <Route path={ROUTES["SIGN_OUT"]}>
                    <RequireAuth>
                        <SignOut/>
                    </RequireAuth>
                </Route>

                <Route path={ROUTES["SIGN_IN"]}>
                    <RequireNotAuth>
                        <SignIn/>
                    </RequireNotAuth>
                </Route>

                <Route path={ROUTES["SIGN_UP"]}>
                    <RequireNotAuth>
                        <SignUp/>
                    </RequireNotAuth>
                </Route>

                <Route path={ROUTES["404"]}>
                    404
                </Route>

            </Switch>

        </HashRouter>
    );

}

export default Routes;