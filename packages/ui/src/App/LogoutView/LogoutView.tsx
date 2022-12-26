import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import StyledLink from "@mui/material/Link";

import { fetchData } from "./LogoutView.helpers";

type LogoutViewProps = Record<string, never>;

const LogoutView: React.FC<LogoutViewProps> = () => {
    useEffect(() => {
        fetchData().catch(console.error);
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            You are successfully logged out, please&nbsp;
            <StyledLink
                component={RouterLink}
                to={"/auth/login"}
            >
                click here to continue
            </StyledLink>
            .
        </Box>
    );
};

export default LogoutView;
