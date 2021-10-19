import { Button } from "@mui/material";
import { styled } from "@mui/system";

const RoundedButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    borderRadius: "0.5rem",
    "&:hover": {
        boxShadow: "none"
    }
});

export default RoundedButton;