import { Dispatch } from "react";

/**
 * Provided data and functions from the auth context used to manage
 * the routes permissions and restrictions.
 */
export declare interface AuthContextOptions {
    isSigned:boolean|null,
    setIsSigned:Dispatch<boolean>
}