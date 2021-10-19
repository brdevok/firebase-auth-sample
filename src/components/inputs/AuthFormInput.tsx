import { InputAdornment } from "@mui/material";
import React from "react";
import AuthTextField from "../../assets/theme/components/AuthTextField";
import { AuthFormInputProps } from "../../types/AuthFormInput";

const AuthFormInput:React.FC<AuthFormInputProps> = ({id, type, label, icon, onChange}):JSX.Element => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

        onChange(e);

    }

    return(
        <AuthTextField
            fullWidth
            id={id}
            type={type}
            label={label}
            variant="standard"
            onChange={handleChange}
            InputProps={{
                endAdornment: <InputAdornment position="end">{icon}</InputAdornment>
            }}
            sx={{
                marginBottom: "0.8rem"
            }}
        />
    );

}

export default AuthFormInput;