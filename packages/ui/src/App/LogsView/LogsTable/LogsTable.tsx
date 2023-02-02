import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Link from "@mui/material/Link";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import type LogsObject from "~/types/LogsObject";
import type LogsParams from "~/types/LogsParams";
import Loader from "~/components/Loader/Loader";

import { fetchLogs, fetchClients } from "./LogsTable.helpers";
import { sx } from "./LogsTable.constants";
import styles from "./LogsTable.scss";
import CopyButton from "./CopyButton/CopyButton";
import InfoButton from "./InfoButton/InfoButton";
import TablePagination from "./TablePagination/TablePagination";
import SearchField from "./SearchField/SearchField";
import ClientSelect from "./ClientSelect/ClientSelect";

type LogsTableProps = Record<string, never>;

const LogsTable: React.FC<LogsTableProps> = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const abortController = useRef<AbortController | null>(null);

    const [logs, setLogs] = useState<LogsObject>({
        data: [],
        total: 0,
        isLoading: true
    });
    const [isSearchSynced, setIsSearchSynced] = useState(true);

    const filterParam = searchParams.get("filter");
    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");
    const searchParam = searchParams.get("search");

    const [params, setParams] = useState<LogsParams>({
        page: pageParam ? +pageParam : 0,
        limit: limitParam ? +limitParam : 10,
        filter: filterParam ? filterParam : "All",
        search: searchParam ? searchParam : ""
    });

    const [clients, setClients] = useState<string[] | null>(null);

    useEffect(() => {
        fetchLogs(setLogs, abortController).catch(console.error);
        fetchClients(setClients).catch(console.error);
    }, []);

    useEffect(() => {
        if (isSearchSynced) {
            setSearchParams({
                page: params.page.toString(),
                limit: params.limit.toString(),
                filter: params.filter,
                search: params.search
            });
            setLogs((prevLogs) => ({
                ...prevLogs,
                isLoading: true
            }));
            fetchLogs(setLogs, abortController, params)
                .then((newLogs) => {
                    if (newLogs.data.length === 0 && params.page !== 0) {
                        setParams((prevParams) => ({
                            ...prevParams,
                            page: 0
                        }));
                    }
                })
                .catch(console.error);
        }
    }, [params.page, params.limit, params.filter, params.search]);

    return (
        <Paper className={styles.paper}>
            <Box className={styles.horizontalBox}>
                <SearchField
                    searchParam={searchParam}
                    setParams={setParams}
                    setLogs={setLogs}
                    setIsSearchSynced={setIsSearchSynced}
                />
                {clients && (
                    <ClientSelect
                        clients={clients}
                        filter={params.filter}
                        setParams={setParams}
                    />
                )}
            </Box>
            <TableContainer className={styles.tableContainer}>
                <Loader isLoading={logs.isLoading || !isSearchSynced} />
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={sx.whiteBackground}>URL</TableCell>
                            <TableCell
                                align="center"
                                sx={{ ...sx.whiteBackground, width: "1.5rem" }}
                            >
                                Info
                            </TableCell>
                            <TableCell
                                className={styles.iconColumn}
                                align="center"
                                sx={{ ...sx.whiteBackground, width: "1.5rem" }}
                            >
                                Copy
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{
                                    ...sx.whiteBackground,
                                    whiteSpace: "nowrap",
                                    width: "4rem"
                                }}
                            >
                                Time (ms)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {logs.data.map((log) => (
                            <TableRow key={log.at}>
                                <TableCell className={styles.urlColumn}>
                                    <Link href={log.url}>
                                        {decodeURI(log.url)}
                                    </Link>
                                </TableCell>
                                <TableCell align="center">
                                    <InfoButton url={log.url} />
                                </TableCell>
                                <TableCell align="center">
                                    <CopyButton copyText={log.url} />
                                </TableCell>
                                <TableCell align="right">
                                    <Typography
                                        className={styles.timeColumn}
                                        variant="body2"
                                    >
                                        {Math.round(log.time * 1e3) / 1e3}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                total={logs.total}
                page={params.page}
                limit={params.limit}
                setParams={setParams}
            />
        </Paper>
    );
};

export default LogsTable;
