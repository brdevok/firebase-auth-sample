import { initializeApp, FirebaseApp, FirebaseOptions } from "firebase/app";

/**
 * Contains settings and methods to manage the main Firebase app object.
 */
class Firebase {

    /** Firebase app settings options. */
    private firebaseConfig:FirebaseOptions = {
        apiKey:             "AIzaSyDLhNviPUUCnMoEN1miPJhB290RPlZ2PtI",
        authDomain:         "login-sample-56d41.firebaseapp.com",
        projectId:          "login-sample-56d41",
        storageBucket:      "login-sample-56d41.appspot.com",
        messagingSenderId:  "951410629139",
        appId:              "1:951410629139:web:3f3f053f88b60ab8c67de6"
    };

    /** The Firebase app core object. */
    private firebaseApp:FirebaseApp;

    /**
     * Initialize a new instance of Firebase app.
     */
    constructor() {

        this.firebaseApp = initializeApp(this.firebaseConfig);

    }

    /** 
     * Getter for the current firebase app object.
     */
    get app():FirebaseApp {

        return this.firebaseApp;

    }

}

export default Firebase;