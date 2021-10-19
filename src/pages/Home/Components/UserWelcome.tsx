import { Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PageLink from "../../../components/links/PageLink";
import RoundedButton from "../../../assets/theme/components/RoundedButton";
import ROUTES from "../../../assets/routes/ROUTES";
import LogoutIcon from '@mui/icons-material/Logout';
import Authentication from "../../../libs/Authentication";
import { FirebaseContext } from "../../../contexts/FirebaseContext";
import { User } from "@firebase/auth";

const UserWelcome:React.FC = ():JSX.Element => {

    const { app } = useContext(FirebaseContext);

    const [user, setUser] = useState<User|null>(Authentication.getUser(app));

    return(
        <>
            <Stack
                color="secondary.contrastText"
                direction="column"
                textAlign="center"
                justifyContent="center"
                minHeight="100vh"
            >
                <EmojiEmotionsIcon
                    sx={{
                        margin: "0 auto",
                        fontSize: "4rem",
                        color: "primary.contrastText",
                        flexGrow: 0
                    }}
                />
                <Typography
                    component="h1"
                    variant="h3"
                    fontWeight="bold"
                >
                    Hello, {(user && user.email) ? user.email.split("@")[0] : "User"}!
                </Typography>
                <Typography
                    component="h2"
                    variant="h6"
                    fontWeight="normal"
                >
                    Nice to see you here.
                </Typography>
                <PageLink path={ROUTES["SIGN_OUT"]}>
                    <RoundedButton
                        variant="contained"
                        color="secondary"
                        sx={{marginTop: "1.5rem"}}
                        endIcon={<LogoutIcon color="primary"/>}
                    >
                        Sign Out
                    </RoundedButton>
                </PageLink>
            </Stack>
        </>
    );

} 

export default UserWelcome
