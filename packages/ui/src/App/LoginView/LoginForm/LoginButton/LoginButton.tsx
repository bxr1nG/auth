import React from "react";
import Button from "@mui/material/Button";

type SubmitButtonProps = Record<string, never>;

const LoginButton: React.FC<SubmitButtonProps> = () => {
    return (
        <Button
            color="primary"
            variant="contained"
            fullWidth
            size="large"
            type="submit"
        >
            Login
        </Button>
    );
};

export default LoginButton;
