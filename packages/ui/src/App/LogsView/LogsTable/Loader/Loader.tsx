import React from "react";
import Fade from "@mui/material/Fade";

import styles from "./Loader.scss";

type LogsTableProps = {
    isLoading: boolean;
};

const Loader: React.FC<LogsTableProps> = (props) => {
    const { isLoading } = props;

    return (
        <Fade in={isLoading}>
            <div className={styles.loaderContainer}>
                <div className={styles.loader} />
            </div>
        </Fade>
    );
};

export default Loader;
