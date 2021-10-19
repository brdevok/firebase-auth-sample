import React, { useContext, useEffect, useState } from "react";
import AuthFormBox from "../../../components/boxes/AuthFormBox";
import AuthForm from "../../../components/forms/AuthForm";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AuthFormInput from "../../../components/inputs/AuthFormInput";
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import RoundedButton from "../../../assets/theme/components/RoundedButton";
import { AuthCredentials, AuthCredentialsValidations } from "../../../types/SignInForm";
import Validator from "@braiandev/string-validator";
import Authentication from "../../../libs/Authentication";
import { FirebaseContext } from "../../../contexts/FirebaseContext";
import FormErrorMessage from "../../../components/text/FormErrorMessage";
import { CircularProgress, Stack, Typography } from "@mui/material";
import PageLink from "../../../components/links/PageLink";
import ROUTES from "../../../assets/routes/ROUTES";

const SignInForm:React.FC = ():JSX.Element => {

    const validate = new Validator();

    const { app } = useContext(FirebaseContext);

    const [form, setForm] = useState<AuthCredentials>({ email: "", password: ""});
    const [validations, setValidations] = useState<AuthCredentialsValidations>({ email: false, password: false});
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const validateInput = (e:React.ChangeEvent<HTMLInputElement>) => {

        const id = e.target.id;
        const value = e.target.value;

        let result:boolean;

        switch(id) {
            
            case "email":
                result = validate.str(value, { max: 255 }, "email") as boolean;
                break;
            case "password":
                result = validate.str(value, { min: 6, max: 24 }, "lowpassword") as boolean;
                break;
            
            default:
                result = false;

        }

        setForm({...form, [id]: value});
        setValidations({...validations, [id]: result});

    }

    const updateDisableSubmitStatus = () => {

        if (Object.values(validations).some(validation => validation === false)) {
            if (!disableSubmit) setDisableSubmit(true);
        } else {
            if (disableSubmit) setDisableSubmit(false);
        }

    }

    const submit = async () => {

        setIsLoading(true);
        setDisableSubmit(true);

        Authentication.signInUser(app, form, {
            error: (message) => {
                setIsLoading(false);
                setDisableSubmit(false);
                setErrorMessage(message);
            }
        });

    }

    useEffect(() => updateDisableSubmitStatus(), [validations]);

    return(
        <AuthFormBox>
            <AuthForm
                title="Sign In"
                icon={<LoginRoundedIcon/>}
            >
                <FormErrorMessage message={errorMessage}/>
                <AuthFormInput
                    id="email"
                    label="Email"
                    type="text"
                    icon={<MailRoundedIcon/>}
                    onChange={validateInput}
                />
                <AuthFormInput
                    id="password"
                    label="Password"
                    type="password"
                    icon={<VpnKeyRoundedIcon/>}
                    onChange={validateInput}
                />
                {
                    isLoading
                    ?
                    <Stack alignItems="center" sx={{ marginTop: "1rem" }}>
                        <CircularProgress color="secondary"/>
                    </Stack>
                    :
                    null
                }
                <RoundedButton
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={submit}
                    sx={{marginTop: "1.5rem"}}
                    disabled={disableSubmit}
                >
                    Authorize Me
                </RoundedButton>
                <Typography 
                    variant="body2"
                    mt={1}
                    textAlign="center"
                >
                    Not registered yet?&nbsp;
                    <PageLink 
                        path={ROUTES["SIGN_UP"]}
                        color="white"
                    >
                        Sign up.
                    </PageLink>
                </Typography>
            </AuthForm>
        </AuthFormBox>
    );

}

export default SignInForm;