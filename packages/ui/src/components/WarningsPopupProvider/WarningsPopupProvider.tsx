import React, { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useQuery } from "@tanstack/react-query";

import type Warnings from "~/types/Warnings";
import useAlert from "~/hooks/useAlert";
import api from "~/api";

import styles from "./WarningsPopupProvider.scss";

type HistoryFieldProps = {
    children: ReactNode;
};

const WarningsPopupProvider: React.FC<HistoryFieldProps> = (props) => {
    const { children } = props;
    const [warnings, setWarnings] = useState<Warnings>([]);

    const { setAlert } = useAlert();

    useQuery({
        queryKey: ["warnings"],
        queryFn: async () => await api.warnings.get(),
        onError: () => {
            setAlert("An error occurred during the Warnings request", "error");
        },
        onSuccess: setWarnings
    });

    const handleClose = (message: string) => {
        if (warnings) {
            setWarnings(
                warnings.filter((warning) => !(warning.message === message))
            );
        }
    };

    return (
        <>
            {warnings && (
                <Snackbar open={true}>
                    <Box className={styles.snackbar}>
                        {warnings.map((warning) => (
                            <Alert
                                key={warning.message}
                                variant="filled"
                                severity={warning.severity}
                                onClose={() => {
                                    handleClose(warning.message);
                                }}
                            >
                                {warning.message}
                            </Alert>
                        ))}
                    </Box>
                </Snackbar>
            )}
            {children}
        </>
    );
};

export default WarningsPopupProvider;
