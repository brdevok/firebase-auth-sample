import { Stack, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AuthForm:React.FC<{children:React.ReactNode, title:string, icon:JSX.Element}> = ({children, title, icon}):JSX.Element => {

    return(
        <Box sx={{ 
            borderRadius: "1rem", 
            overflow: "hidden" 
        }}>
            <form autoComplete="off">
                <Box sx={{
                    bgcolor: "secondary.main",
                    color: "secondary.contrastText",
                    padding: "1rem 2rem"
                }}>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                        <Typography variant="h5" component="h1" fontWeight="bold" mr={1}>{title}</Typography>
                        <SvgIcon fontSize="medium" color="primary">
                            {icon}
                        </SvgIcon>
                    </Stack>
                </Box>
                <Box sx={{
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    padding: "1.5rem 2rem"
                }}>
                    {children}
                </Box>
            </form>
        </Box>
    );

}

export default AuthForm;