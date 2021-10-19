import React from "react";

/**
 * Props used by the authorization forms inputs.
 */
export interface AuthFormInputProps {
    id:string,
    type:string,
    label:string,
    icon:JSX.Element,
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => unknown
}