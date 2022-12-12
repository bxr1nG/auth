import React from "react";
import Box from "@mui/material/Box";

import LoginForm from "./LoginForm/LoginForm";
import styles from "./LoginView.scss";

type LoginViewProps = Record<string, never>;

const LoginView: React.FC<LoginViewProps> = () => {
    return (
        <Box className={styles.formWrapper}>
            <LoginForm />
        </Box>
    );
};

export default LoginView;
