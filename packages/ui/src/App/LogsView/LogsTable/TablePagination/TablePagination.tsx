import React from "react";
import StyledTablePagination from "@mui/material/TablePagination";

import type LogsParams from "~/types/LogsParams";

import styles from "./TablePagination.scss";

type TablePaginationProps = {
    total: number;
    page: number;
    limit: number;
    setParams: React.Dispatch<React.SetStateAction<LogsParams>>;
};

const TablePagination: React.FC<TablePaginationProps> = (props) => {
    const { total, page, limit, setParams } = props;

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

    return (
        <StyledTablePagination
            className={styles.tablePagination}
            rowsPerPageOptions={[10, 25, 50, 100, { label: "All", value: -1 }]}
            component="div"
            count={total}
            rowsPerPage={limit}
            page={total === 0 ? 0 : page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
};

export default TablePagination;
