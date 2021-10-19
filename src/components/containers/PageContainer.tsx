import { Container } from "@mui/material";
import { Box, minWidth } from "@mui/system";
import React from "react";

const PageContainer:React.FC<{children:React.ReactNode, bgcolor?:string}> = ({children, bgcolor}):JSX.Element => {

    return(
        <Box 
            sx={{
                bgcolor: bgcolor ? bgcolor : "",
                minHeight: "100vh"
            }}
        >
            <Container fixed
            >
                {children}
            </Container>
        </Box>
    );

}

export default PageContainer;