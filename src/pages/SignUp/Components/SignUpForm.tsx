import React, { useContext, useEffect, useState } from "react";
import AuthFormBox from "../../../components/boxes/AuthFormBox";
import AuthForm from "../../../components/forms/AuthForm";
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import AuthFormInput from "../../../components/inputs/AuthFormInput";
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import RoundedButton from "../../../assets/theme/components/RoundedButton";
import { SignUpCredentials, SignUpCredentialsValidations } from "../../../types/SignInForm";
import Validator from "@braiandev/string-validator";
import Authentication from "../../../libs/Authentication";
import { FirebaseContext } from "../../../contexts/FirebaseContext";
import FormErrorMessage from "../../../components/text/FormErrorMessage";
import { CircularProgress, Stack, Typography } from "@mui/material";
import PageLink from "../../../components/links/PageLink";
import ROUTES from "../../../assets/routes/ROUTES";

const SignUpForm:React.FC = ():JSX.Element => {

    const validate = new Validator();

    const { app } = useContext(FirebaseContext);

    const [form, setForm] = useState<SignUpCredentials>({ email: "", password: "", verifyPassword: ""});
    const [validations, setValidations] = useState<SignUpCredentialsValidations>({ email: false, password: false, verifyPassword: false});
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
                result = validate.str(value, { min: 6, max: 24 }, "lowpassword") as boolean && value === form.verifyPassword;
                break;
            case "verifyPassword":
                result = value === form.password;
                break;
            
            default:
                result = false;

        }

        setForm({...form, [id]: value});
        if (id !== "password" && id !== "verifyPassword") {
            setValidations({...validations, [id]: result});
        } else {
            if (id === "password") setValidations({...validations, [id]: result, verifyPassword: result});
            else setValidations({...validations, [id]: result, password: result});
        }

    }

    const updateDisableSubmitStatus = () => {

        if (Object.values(validations).some(validation => validation === false)) {
            if (!disableSubmit) setDisableSubmit(true);
        } else {
            if (disableSubmit) setDisableSubmit(false);
        }

    }

    const submit = () => {

        setIsLoading(true);
        setDisableSubmit(true);

        Authentication.createNewUser(app, form, {
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
                title="Sign Up"
                icon={<PersonAddRoundedIcon/>}
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
                <AuthFormInput
                    id="verifyPassword"
                    label="Verify password"
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
                    Register Me
                </RoundedButton>
                <Typography 
                    variant="body2"
                    mt={1}
                    textAlign="center"
                >
                    Already have an account?&nbsp;
                    <PageLink 
                        path={ROUTES["SIGN_IN"]}
                        color="white"
                    >
                        Sign in.
                    </PageLink>
                </Typography>
            </AuthForm>
        </AuthFormBox>
    );

}

export default SignUpForm;