import { Stack, Typography } from "@mui/material";
import React from "react";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const FormErrorMessage:React.FC<{message:string}> = ({message}):JSX.Element => {

    return(
        <>
            {
            message
            ?
            <Stack 
                direction="row" 
                alignItems="center"
                mb={3}
                sx={{
                    bgcolor: "primary.light",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "0.5rem"
                }}
            >
                <WarningRoundedIcon sx={{ marginRight: "0.3rem" }}/> 
                <Typography variant="body2">{message}</Typography>
            </Stack>
            : 
            null
            }
        </>
    );

}

export default FormErrorMessage;