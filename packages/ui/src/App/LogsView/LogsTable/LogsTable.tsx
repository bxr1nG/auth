import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import Link from "@mui/material/Link";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Logs from "~/types/Logs";
import config from "~/config";

import { fetchData } from "./LogsTable.helpers";
import styles from "./LogsTable.scss";
import { sx } from "./LogsTable.constants";
import CopyButton from "./CopyButton/CopyButton";
import InfoButton from "./InfoButton/InfoButton";

type LogsTableProps = Record<string, never>;

const LogsTable: React.FC<LogsTableProps> = () => {
    const [logs, setLogs] = useState<Logs>([]);

    useEffect(() => {
        fetchData(setLogs).catch(console.error);
    }, []);

    return (
        <TableContainer
            component={Paper}
            className={styles.tableContainer}
        >
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell sx={sx.whiteBackground}>URL</TableCell>
                        <TableCell
                            align="center"
                            sx={sx.whiteBackground}
                        >
                            Info
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={sx.whiteBackground}
                        >
                            Copy
                        </TableCell>
                        <TableCell
                            align="right"
                            sx={{
                                ...sx.whiteBackground,
                                whiteSpace: "nowrap"
                            }}
                        >
                            Time (ms)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logs.map((log) => (
                        <TableRow key={log.at}>
                            <TableCell className={styles.urlColumn}>
                                <Link href={config.proxy_url + log.url}>
                                    {log.url}
                                </Link>
                            </TableCell>
                            <TableCell align="center">
                                <InfoButton url={log.url} />
                            </TableCell>
                            <TableCell align="center">
                                <CopyButton copyText={log.url} />
                            </TableCell>
                            <TableCell align="right">
                                {Math.round(log.time * 1e3) / 1e3}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LogsTable;
