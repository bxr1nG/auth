import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

import useAlert from "~/hooks/useAlert";

import styles from "./AlertPopup.scss";

type AlertPopupProps = Record<string, never>;

const AlertPopup: React.FC<AlertPopupProps> = () => {
    const { text, type } = useAlert();

    const [params, setParams] = useState<{
        text: string;
        type: typeof type;
    }>({
        text: "",
        type: ""
    });

    useEffect(() => {
        if (text && type) {
            setParams({
                text,
                type
            });
        }
    }, [text, type]);

    return (
        <Fade in={!!text && !!type}>
            <Alert
                variant="filled"
                severity={params.type || undefined}
                className={styles.popup}
            >
                {params.text}
            </Alert>
        </Fade>
    );
};

export default AlertPopup;
