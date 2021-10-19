import { Box } from "@mui/system";
import React from "react";

const AuthFormBox:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <Box sx={{
            position: "absolute",
            width: "90%",
            maxWidth: "350px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            {children}
        </Box>
    );

}

export default AuthFormBox;