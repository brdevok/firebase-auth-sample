import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";

const AuthTextField = styled(TextField)({
    "& .MuiInputLabel-root": {
        color: theme.palette.secondary.main,
        "&.Mui-focused": {
            color: theme.palette.background.default
        }
    },
    "& .MuiInput-root": {
        "& .MuiInputAdornment-root": {
            color: theme.palette.secondary.main
        },
        "&.Mui-focused .MuiInputAdornment-root": {
            color: theme.palette.background.default
        }
    },
    "& .MuiInputBase-root": {
        "&:before": {
            borderBottom: `1px solid ${theme.palette.secondary.main}`
        },
        "&:after": {
            borderBottom: `2px solid ${theme.palette.background.default}`
        }
    }
});

export default AuthTextField;