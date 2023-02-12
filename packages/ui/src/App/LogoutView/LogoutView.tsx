import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import StyledLink from "@mui/material/Link";
import { useMutation } from "@tanstack/react-query";

import useAlert from "~/hooks/useAlert";
import api from "~/api";

type LogoutViewProps = Record<string, never>;

const LogoutView: React.FC<LogoutViewProps> = () => {
    const { setAlert } = useAlert();

    const mutation = useMutation({
        mutationFn: api.auth.logout,
        onError: () => {
            setAlert("An error occurred during the Logout", "error");
        }
    });

    useEffect(() => {
        mutation.mutate();
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
