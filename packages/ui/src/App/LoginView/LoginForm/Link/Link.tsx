import React from "react";
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
};

const Link: React.FC<LinkProps> = (props) => {
    const { to, children, color } = props;

    return (
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
