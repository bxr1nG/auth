import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import type FormikFields from "~/types/FormikFields";

import { fetchData } from "./HistoryField.helpers";

type HistoryFieldProps = {
    history: Array<FormikFields>;
    initialValues: FormikFields;
    setInitialValues: Dispatch<SetStateAction<FormikFields>>;
    emptyValues: FormikFields;
};

const HistoryField: React.FC<HistoryFieldProps> = (props) => {
    const { history, initialValues, setInitialValues, emptyValues } = props;
    const [testusers, setTestusers] = useState<Array<FormikFields>>([]);

    useEffect(() => {
        fetchData(setTestusers, initialValues).catch(console.error);
    }, [initialValues]);

    return (
        <TextField
            fullWidth
            select
            label="State"
            value={JSON.stringify(initialValues)}
            onChange={(event) => {
                const state = JSON.parse(event.target.value) as FormikFields;
                setInitialValues(state);
            }}
        >
            <MenuItem
                key={JSON.stringify(emptyValues)}
                value={JSON.stringify(emptyValues)}
            >
                Empty values
            </MenuItem>
            {testusers.map((state) => (
                <MenuItem
                    key={JSON.stringify(state)}
                    value={JSON.stringify(state)}
                >
                    {`(ini) Name: ${state["X-Shib-Profile-UserPrincipalName"]}; Roles: ${state["X-Shib-Authorization-Roles"]}`}
                </MenuItem>
            ))}
            {history.map((state) => (
                <MenuItem
                    key={JSON.stringify(state)}
                    value={JSON.stringify(state)}
                >
                    {`Name: ${state["X-Shib-Profile-UserPrincipalName"]}; Roles: ${state["X-Shib-Authorization-Roles"]}`}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default HistoryField;
