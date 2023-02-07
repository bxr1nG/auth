import React from "react";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";

import Loader from "~/components/Loader/Loader";
import useAlert from "~/hooks/useAlert";

import { getEnvironment } from "./LoginView.helpers";
import styles from "./LoginView.scss";
import LoginForm from "./LoginForm/LoginForm";

type LoginViewProps = Record<string, never>;

const LoginView: React.FC<LoginViewProps> = () => {
    const { setAlert } = useAlert();

    const { isLoading, data } = useQuery({
        queryKey: ["environment"],
        queryFn: getEnvironment,
        onError: () => {
            setAlert(
                "An error occurred during the Environment request",
                "error"
            );
        }
    });

    return (
        <Box className={styles.formWrapper}>
            {isLoading && (
                <Loader
                    isLoading
                    isTransparent
                />
            )}
            {data && <LoginForm environment={data} />}
        </Box>
    );
};

export default LoginView;
