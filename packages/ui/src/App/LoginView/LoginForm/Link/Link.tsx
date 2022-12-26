import React from "react";
import { Link as RouterLink } from "react-router-dom";
import StyledButton from "@mui/material/Button";

type LinkProps = {
    to: string;
    children: string;
    color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "success"
        | "error"
        | "info"
        | "warning"
        | undefined;
};

const Link: React.FC<LinkProps> = (props) => {
    const { to, children, color } = props;

    return (
        <StyledButton
            component={RouterLink}
            variant="outlined"
            to={to}
            color={color}
        >
            {children}
        </StyledButton>
    );
};

export default Link;
