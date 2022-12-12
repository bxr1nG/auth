import React from "react";
import Button from "@mui/material/Button";

type SubmitButtonProps = Record<string, never>;

const SubmitButton: React.FC<SubmitButtonProps> = () => {
    return (
        <Button
            color="primary"
            variant="contained"
            fullWidth
            size="large"
            type="submit"
        >
            Submit
        </Button>
    );
};

export default SubmitButton;
