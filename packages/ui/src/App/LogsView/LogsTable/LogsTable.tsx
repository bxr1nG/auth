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
import { useQuery } from "@tanstack/react-query";

import type LogsParams from "~/types/LogsParams";
import Loader from "~/components/Loader/Loader";
import useAlert from "~/hooks/useAlert";
import api from "~/api";

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

    const { setAlert } = useAlert();

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

    useEffect(() => {
        setSearchParams({
            page: params.page.toString(),
            limit: params.limit.toString(),
            filter: params.filter,
            search: params.search
        });
    }, [params]);

    const [isSearchSynced, setIsSearchSynced] = useState(true);

    const { isLoading: isLogsLoading, data: logs } = useQuery({
        queryKey: ["logs", params],
        queryFn: async () => {
            if (abortController.current) {
                abortController.current.abort();
            }
            abortController.current = new AbortController();
            const data = await api.logs.get({
                signal: abortController.current?.signal,
                params
            });
            return data;
        },
        onError: () => {
            setAlert("An error occurred during the Logs request", "error");
        },
        keepPreviousData: true,
        enabled: isSearchSynced
    });

    const { isLoading: isClientsLoading, data: clients } = useQuery({
        queryKey: ["clients"],
        queryFn: api.clients.get,
        onError: () => {
            setAlert("An error occurred during the Clients request", "error");
        }
    });

    useEffect(() => {
        if (logs?.data.length === 0 && params.page !== 0) {
            setParams((prevParams) => ({
                ...prevParams,
                page: 0
            }));
        }
    }, [logs?.data]);

    return (
        <Paper className={styles.paper}>
            <Box className={styles.horizontalBox}>
                <SearchField
                    searchParam={searchParam}
                    setParams={setParams}
                    setIsSearchSynced={setIsSearchSynced}
                />
                {!isClientsLoading && clients && (
                    <ClientSelect
                        clients={clients}
                        filter={params.filter}
                        setParams={setParams}
                    />
                )}
            </Box>
            <TableContainer className={styles.tableContainer}>
                <Loader isLoading={isLogsLoading || !isSearchSynced} />
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
                        {logs &&
                            logs.data.map((log) => (
                                <TableRow key={`${log.at}${log.time}`}>
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
                total={logs?.total || 0}
                page={
                    params.page > (logs?.total || 1) / params.limit
                        ? 0
                        : params.page
                }
                limit={params.limit}
                setParams={setParams}
            />
        </Paper>
    );
};

export default LogsTable;
