import type { SelectChangeEvent } from "@mui/material/Select";

import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import type LogsParams from "~/types/LogsParams";

import { sx } from "./ClientSelect.constants";
import styles from "./ClientSelect.scss";

type ClientSelectProps = {
    clients: string[];
    filter: string;
    setParams: React.Dispatch<React.SetStateAction<LogsParams>>;
};

const ClientSelect: React.FC<ClientSelectProps> = (props) => {
    const { clients, filter, setParams } = props;

    const handleChangeClient = (event: SelectChangeEvent) => {
        setParams((prevParams) => ({
            ...prevParams,
            filter: event.target.value,
            page: 0
        }));
    };

    return (
        <FormControl
            size="small"
            sx={sx.clientSelectControl}
            className={styles.clientSelectControl}
        >
            <Select
                value={filter}
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
    );
};

export default ClientSelect;
