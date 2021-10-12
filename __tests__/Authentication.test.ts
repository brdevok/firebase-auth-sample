import Authentication from "../src/libs/Authentication";
import { getAuth } from "firebase/auth";
import Firebase from "../src/libs/Firebase";
import { auth } from "../src/types/Authentication";

const firebase = new Firebase();

const testUser:auth.UserSignUpOptions = {
    displayName: "Test Auth User",
    email: "test.auth.user@email.com",
    password: "testauthuserpassword"
};

describe("Test the getAppAuth() method", () => {

    test("Must return the Auth instance of the current Firebase app instance", () => {
        const expected = Object.getPrototypeOf(new Authentication()).constructor.getAppAuth(firebase.app);
        const result = getAuth(firebase.app);
        expect(expected).toBe(result);
    });

});

describe("Test the creation of a user with createNewUser() method", () => {

    test.skip("signedUp value must be true if the user was created successfully.", async () => {
        let signedUp:boolean;
        await Authentication.createNewUser(firebase.app, testUser, { success: () => signedUp = true });
        expect(signedUp).toBe(true);
    });

    test("errorMessage must be 'The email is already in use.' if the user already exist.", async () => {
        let errorMessage:string;
        await Authentication.createNewUser(firebase.app, testUser, { error: (message) =>  errorMessage = message});
        expect(errorMessage).toBe("The email is already in use.");
    });

});

describe("Test the sign in logic", () => {

    test("isSigned value must change to true if the user is logged in", async () => {
        let isSigned:boolean;
        await Authentication.signInUser(firebase.app, testUser, { success: () => isSigned = true });
        expect(isSigned).toBe(true);
    });

    test("Must return 'Wrong password.' if password is wrong", async () => {
        let errorMessage:string;
        await Authentication.signInUser(firebase.app, { email: testUser.email, password: "wrong" }, { error: (message) => errorMessage = message });
        expect(errorMessage).toBe("Wrong password.");
    });

    test("Must return 'The email is not registered yet.' if email is wrong", async () => {
        let errorMessage:string;
        await Authentication.signInUser(firebase.app, { email: "incorrect.test@email.com", password: testUser.password }, { error: (message) => errorMessage = message });
        expect(errorMessage).toBe("The email is not registered yet.");
    });

});

describe("Test the sign out logic", () => {

    test("isSigned value must change to true if the user is logged in", async () => {
        let isSigned:boolean;
        await Authentication.signOutUser(firebase.app, { success: () => isSigned = false });
        expect(isSigned).toBe(false);
    });

});

describe("Test the auth observer authStateObserver() method", () => {

    test("isSigned value must change to true if the observer detects an auth", async () => {
        let isSigned:boolean;
        Authentication.authStateObserver(firebase.app, { onSignedIn: () => isSigned = true});
        await Authentication.signInUser(firebase.app, testUser, { success: () => isSigned = true });
        expect(isSigned).toBe(true);
    });

    test("isSigned value must change to false if the observer doesn't detect an auth", async () => {
        let isSigned:boolean;
        Authentication.authStateObserver(firebase.app, { onSignedOut: () => isSigned = false});
        await Authentication.signOutUser(firebase.app);
        expect(isSigned).toBe(false);
    });

});