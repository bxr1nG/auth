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
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import type Logs from "~/types/Logs";
import type LogsParams from "~/types/LogsParams";

import { fetchLogs, fetchClients } from "./LogsTable.helpers";
import { sx } from "./LogsTable.constants";
import styles from "./LogsTable.scss";
import CopyButton from "./CopyButton/CopyButton";
import InfoButton from "./InfoButton/InfoButton";

type LogsTableProps = Record<string, never>;

const LogsTable: React.FC<LogsTableProps> = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const abortController = useRef<AbortController | null>(null);

    const [logs, setLogs] = useState<{
        data: Logs;
        total: number;
        isLoading: boolean;
    }>({
        data: [],
        total: 0,
        isLoading: true
    });

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
    const [search, setSearch] = useState(searchParam ? searchParam : "");

    useEffect(() => {
        fetchLogs(setLogs, abortController).catch(console.error);
        fetchClients(setClients).catch(console.error);
    }, []);

    useEffect(() => {
        if (search === params.search) {
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
            fetchLogs(setLogs, abortController, params).catch(console.error);
        }
    }, [params.page, params.limit, params.filter, params.search]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setParams((prevParams) => ({
                ...prevParams,
                search,
                page: 0
            }));
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [search]);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setParams((prevParams) => ({
            ...prevParams,
            page: newPage
        }));
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setParams((prevParams) => ({
            ...prevParams,
            limit: +event.target.value,
            page: 0
        }));
    };

    const handleChangeClient = (event: SelectChangeEvent) => {
        setParams((prevParams) => ({
            ...prevParams,
            filter: event.target.value,
            page: 0
        }));
    };

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        setLogs((prevLogs) => ({
            ...prevLogs,
            isLoading: true
        }));
    };

    return (
        <Paper className={styles.paper}>
            <Box className={styles.horizontalBox}>
                <Box className={styles.searchContainer}>
                    <TextField
                        fullWidth
                        variant="standard"
                        value={search}
                        onChange={handleChangeSearch}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
                {clients && (
                    <FormControl
                        size="small"
                        sx={sx.clientSelectControl}
                        className={styles.clientSelectControl}
                    >
                        <Select
                            value={params.filter}
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
            </Box>
            <TableContainer className={styles.tableContainer}>
                <Fade in={logs.isLoading || search !== params.search}>
                    <div className={styles.loaderContainer}>
                        <div className={styles.loader} />
                    </div>
                </Fade>
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
                className={styles.tablePagination}
                rowsPerPageOptions={[
                    10,
                    25,
                    50,
                    100,
                    { label: "All", value: -1 }
                ]}
                component="div"
                count={logs.total}
                rowsPerPage={params.limit}
                page={params.page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default LogsTable;
