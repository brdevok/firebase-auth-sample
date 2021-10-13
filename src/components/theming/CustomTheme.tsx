import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../../assets/theme/theme";

const CustomTheme:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <CssBaseline>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CssBaseline>
    );

}

export default CustomTheme;