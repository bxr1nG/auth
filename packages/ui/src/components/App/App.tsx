import React from "react";
import Box from "@mui/material/Box";

import LoginForm from "~/components/LoginForm";

import styles from "./App.scss";

type AppProps = Record<string, never>;

const App: React.FC<AppProps> = () => {
    return (
        <Box className={styles.formWrapper}>
            <LoginForm />
        </Box>
    );
};

export default App;
