import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Logs from "~/types/Logs";

import { fetchData } from "./LogsTable.helpers";
import styles from "./LogsTable.scss";

type LogsTableProps = Record<string, never>;

const LogsTable: React.FC<LogsTableProps> = () => {
    const [logs, setLogs] = useState<Logs>([]);

    useEffect(() => {
        fetchData(setLogs).catch(console.error);
    }, []);

    return (
        <TableContainer
            component={Paper}
            className={styles.table}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>URL</TableCell>
                        <TableCell align="right">Time (ms)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.map((log) => (
                        <TableRow key={log.at}>
                            <TableCell>{log.url}</TableCell>
                            <TableCell align="right">{log.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LogsTable;
