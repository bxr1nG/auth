import React from "react";
import StyledButton from "@mui/material/Button";
import StyledLink from "@mui/material/Link";

type LinkProps = {
    to: string;
    children: string;
};

const Link: React.FC<LinkProps> = (props) => {
    const { to, children } = props;

    return (
        <StyledButton
            component={StyledLink}
            variant="outlined"
            href={to}
            target="_blank"
        >
            {children}
        </StyledButton>
    );
};

export default Link;
