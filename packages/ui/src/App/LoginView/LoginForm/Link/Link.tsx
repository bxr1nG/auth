import React from "react";
import { Link as RouterLink } from "react-router-dom";
import StyledButton from "@mui/material/Button";
import StyledLink from "@mui/material/Link";

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
    internal?: boolean;
};

const Link: React.FC<LinkProps> = (props) => {
    const { to, children, color, internal } = props;

    return internal ? (
        <StyledButton
            component={RouterLink}
            variant="outlined"
            to={to}
            color={color}
        >
            {children}
        </StyledButton>
    ) : (
        <StyledButton
            component={StyledLink}
            variant="outlined"
            href={to}
            target="_blank"
            color={color}
        >
            {children}
        </StyledButton>
    );
};

export default Link;
