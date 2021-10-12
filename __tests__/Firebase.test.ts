import Firebase from "../src/libs/Firebase";
import { initializeApp } from "firebase/app";

describe("Firebase class instance", () => {

    test("Constructor must return a new instance of Firebase class", () => {
        const expected = new Firebase()
        const result = Firebase;
        expect(expected).toBeInstanceOf(result);
    });

});

describe("Firebase class app object getter", () => {

    test("Must return Firebase app object when called", () => {
        const expected = new Firebase().app;
        const result = initializeApp({
            apiKey: "AIzaSyDLhNviPUUCnMoEN1miPJhB290RPlZ2PtI",
            authDomain: "login-sample-56d41.firebaseapp.com",
            projectId: "login-sample-56d41",
            storageBucket: "login-sample-56d41.appspot.com",
            messagingSenderId: "951410629139",
            appId: "1:951410629139:web:3f3f053f88b60ab8c67de6"
          });
        expect(expected).toMatchObject(result);
    });

});