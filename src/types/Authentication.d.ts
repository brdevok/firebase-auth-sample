import { UserCredential } from "@firebase/auth";

export namespace auth {

    /** 
     * Error strings messages returned for the error handler.
     */
    type ErrorMessage = string;

    /**
     * The credentials required to log in a user in the app.
     */
    interface UserAuthCredentialsOptions {
        /**
         * The email of the user account.
         */
        email:string,
        /**
         * The password of the user account.
         */
        password:string
    }

    /**
     * Data required to create a new user in the app
     */
    interface UserSignUpOptions extends UserAuthCredentialsOptions {
        /**
         * The display name of the user, acts like an username.
         */
        displayName:string
    }

    /**
     * The authorization callbacks represents a specific event on the session
     * management of the Auth object.
     */
    interface AuthEventCallbacks {
        /**
         * Called if the action returns success.
         */
        success?: (credentials?:UserCredential) => unknown,
        /**
         * Called if the action returns an error.
         */
        error?: (message:ErrorMessage) => unknown
    }

    /**
     * The auth observer callbacks offer to handle the state change of the 
     * current session in separated callbacks with specific event coverage.
     */
    interface AuthStateObserverCallbacks {
        /**
         * Called if the session changes to authorized.
         */
        onSignedIn?: () => unknown,
        /**
         * Called if the session changes to unauthorized.
         */
        onSignedOut?: () => unknown
    }

}

