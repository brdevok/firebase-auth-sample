
/**
 * Credentials required to sign in a user in the app.
 */
export interface AuthCredentials {
    email:string,
    password:string
}

/**
 * Validations of the credentials required for sign in a user.
 */
export interface AuthCredentialsValidations {
    email:boolean,
    password:boolean
}

/**
 * Credentials required to sign up a user in the app.
 */
export interface SignUpCredentials extends AuthCredentials {
    verifyPassword?:string
}

/**
 * Validations of the credentials required for sign up a user.
 */
export interface SignUpCredentialsValidations extends AuthCredentialsValidations {
    verifyPassword:boolean
}