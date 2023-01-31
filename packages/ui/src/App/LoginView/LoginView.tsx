import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import type Environment from "~/types/Environment";
import config from "~/config";

import { fetchData } from "./LoginView.helpers";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./LoginView.scss";

type LoginViewProps = Record<string, never>;

const LoginView: React.FC<LoginViewProps> = () => {
    const [environment, setEnvironment] = useState<Environment>({
        ls_scope: config.ls_scope,
        default_context: config.default_context,
        extra_fields: []
    });

    useEffect(() => {
        fetchData(setEnvironment).catch(console.error);
    }, []);

    return (
        <Box className={styles.formWrapper}>
            <LoginForm environment={environment} />
        </Box>
    );
};

export default LoginView;
