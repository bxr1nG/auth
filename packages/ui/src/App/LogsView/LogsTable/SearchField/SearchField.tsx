import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import type LogsParams from "~/types/LogsParams";

import styles from "./SearchField.scss";

type SearchFieldProps = {
    searchParam: string | null;
    setParams: React.Dispatch<React.SetStateAction<LogsParams>>;
    setIsSearchSynced: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchField: React.FC<SearchFieldProps> = (props) => {
    const { searchParam, setParams, setIsSearchSynced } = props;
    const [search, setSearch] = useState(searchParam ? searchParam : "");

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setParams((prevParams) => ({
                ...prevParams,
                search
            }));
            setIsSearchSynced(true);
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [search]);

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        setIsSearchSynced(false);
    };

    return (
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
    );
};

export default SearchField;
