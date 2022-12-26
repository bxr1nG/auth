import React from "react";
import Box from "@mui/material/Box";

import LogsTable from "./LogsTable/LogsTable";
import styles from "./LogsView.scss";

type LogsViewProps = Record<string, never>;

const LogsView: React.FC<LogsViewProps> = () => {
    return (
        <Box className={styles.tableWrapper}>
            <LogsTable />
        </Box>
    );
};

export default LogsView;
