import React from "react";
import Fade from "@mui/material/Fade";

import styles from "./Loader.scss";

type LogsTableProps = {
    isLoading: boolean;
    isTransparent?: boolean;
};

const Loader: React.FC<LogsTableProps> = (props) => {
    const { isLoading, isTransparent } = props;

    return (
        <Fade in={isLoading}>
            <div
                className={
                    isTransparent
                        ? styles.transparentContainer
                        : styles.container
                }
            >
                <div className={styles.loader} />
            </div>
        </Fade>
    );
};

export default Loader;
