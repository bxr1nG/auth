import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import Link from "@mui/material/Link";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import type Logs from "~/types/Logs";
import config from "~/config";

import { fetchData } from "./LogsTable.helpers";
import styles from "./LogsTable.scss";
import { sx } from "./LogsTable.constants";
import CopyButton from "./CopyButton/CopyButton";
import InfoButton from "./InfoButton/InfoButton";

type LogsTableProps = Record<string, never>;

const LogsTable: React.FC<LogsTableProps> = () => {
    const [logs, setLogs] = useState<Logs>([]);
    const [currentClient, setCurrentClient] = useState("All");
    const [clients, setClients] = useState<string[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        fetchData(setLogs).catch(console.error);
    }, []);

    useEffect(() => {
        setClients([...new Set(logs.map((log) => log.client))]);
    }, [logs]);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangeClient = (event: SelectChangeEvent) => {
        setCurrentClient(event.target.value);
        setPage(0);
    };

    return (
        <Paper className={styles.paper}>
            {!(clients.length === 1 && clients[0] === "global") && (
                <FormControl
                    size="small"
                    sx={sx.clientSelectControl}
                >
                    <Select
                        value={currentClient}
                        onChange={handleChangeClient}
                        sx={sx.clientSelect}
                    >
                        <MenuItem value={"All"}>All</MenuItem>
                        {clients.map((client) => (
                            <MenuItem
                                key={client}
                                value={client}
                            >
                                {client}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}
            <TableContainer className={styles.tableContainer}>
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
                        {logs
                            .filter((log) =>
                                currentClient === "All"
                                    ? true
                                    : log.client === currentClient
                            )
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((log) => (
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
            <TablePagination
                className={styles.tablePagination}
                rowsPerPageOptions={[
                    10,
                    25,
                    50,
                    100,
                    { label: "All", value: -1 }
                ]}
                component="div"
                count={
                    logs.filter((log) =>
                        currentClient === "All"
                            ? true
                            : log.client === currentClient
                    ).length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default LogsTable;
