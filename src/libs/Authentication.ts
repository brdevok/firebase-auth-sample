import { FirebaseApp } from "@firebase/app";
import { FirebaseError } from "@firebase/util";
import { getAuth, createUserWithEmailAndPassword, Auth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../types/Authentication";
import AUTH_ERRORS_MESSAGES from "../assets/messages/AUTH_ERRORS_MESSAGES";

/**
 * Contains all the methods to manage the authorization of a user in the application.
 */
class Authentication {

    /**
     * Handle the authentication errors codes from the Firebase API and return a string
     * with a descriptive message in the current app language.
     */
    private static handleError(error:FirebaseError):auth.ErrorMessage {

        console.error(error.code);

        if (error.code in AUTH_ERRORS_MESSAGES) {
            return AUTH_ERRORS_MESSAGES[error.code];
        } else {
            return "Unexpected error.";
        }

    }

    /**
     * Get the Auth instance of the current Firebase app.
     */
    private static getAppAuth(app:FirebaseApp):Auth {

        return getAuth(app);

    }

    /**
     * Create a new user in the Firebase app and authorize it inside de application.
     */
    public static async createNewUser(app:FirebaseApp, data:auth.UserSignUpOptions, callbacks?:auth.AuthEventCallbacks) {

        const auth = this.getAppAuth(app);

        return await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                if (callbacks && callbacks.success) callbacks.success(userCredential);
            })
            .catch((error) => {
                if (callbacks && callbacks.error) callbacks.error(this.handleError(error));
            });

    }

    /**
     * Sign in a user with the email and a password, if the auth has succes, or if fails,
     * a callback specified for those events will be called.
     */
    public static async signInUser(app:FirebaseApp, data:auth.UserAuthCredentialsOptions, callbacks?:auth.AuthEventCallbacks) {

        const auth = this.getAppAuth(app);

        await signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredentials) => {
                if (callbacks && callbacks.success) callbacks.success(userCredentials);
            })
            .catch((error) => {
                if (callbacks && callbacks.error) callbacks.error(this.handleError(error));
            });

    }

    /**
     * Sign out an user, if the user is signed out with succes, or if fails,
     * a callback specified for those events will be called.
     */
     public static async signOutUser(app:FirebaseApp, callbacks?:auth.AuthEventCallbacks) {

        const auth = this.getAppAuth(app);

        await signOut(auth)
            .then(() => {
                if (callbacks && callbacks.success) callbacks.success();
            })
            .catch((error) => {
                if (callbacks && callbacks.error) callbacks.error(this.handleError(error));
            });

    }

    /**
     * Creates an observer to detect any change on the auth state, if the auth
     * changes to a signed/unsigned session a provided callback for those changes
     * will be called.
     */
    public static authStateObserver(app:FirebaseApp, callbacks?:auth.AuthStateObserverCallbacks) {

        const auth = this.getAppAuth(app);

        onAuthStateChanged(auth, (user) => {

            if (user) {
                if (callbacks && callbacks.onSignedIn) callbacks.onSignedIn();
            } else {
                if (callbacks && callbacks.onSignedOut) callbacks.onSignedOut();
            }

        });

    }

} 

export default Authentication;