import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import ROUTES from "../assets/routes/ROUTES";
import RequireAuth from "../components/auth/RequireAuth";
import RequireNotAuth from "../components/auth/RequireNotAuth";

const Routes:React.FC = ():JSX.Element => {

    return(
        <HashRouter>

            <Switch>

                <Route exact path={ROUTES["HOME"]}>
                    <RequireAuth>
                        HOME
                    </RequireAuth>
                </Route>

                <Route path={ROUTES["SIGN_OUT"]}>
                    <RequireAuth>
                        SIGN OUT
                    </RequireAuth>
                </Route>

                <Route path={ROUTES["SIGN_IN"]}>
                    <RequireNotAuth>
                        SIGN IN
                    </RequireNotAuth>
                </Route>

                <Route path={ROUTES["SIGN_UP"]}>
                    <RequireNotAuth>
                        SIGN UP
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