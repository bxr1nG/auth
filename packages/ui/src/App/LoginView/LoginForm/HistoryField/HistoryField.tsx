import React, { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import type FormikFields from "~/types/FormikFields";

type HistoryFieldProps = {
    history: Array<FormikFields>;
    initialValues: FormikFields;
    setInitialValues: Dispatch<SetStateAction<FormikFields>>;
    emptyValues: FormikFields;
};

const HistoryField: React.FC<HistoryFieldProps> = (props) => {
    const { history, initialValues, setInitialValues, emptyValues } = props;

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
                {JSON.stringify(emptyValues)}
            </MenuItem>
            {history.map((state) => (
                <MenuItem
                    key={JSON.stringify(state)}
                    value={JSON.stringify(state)}
                >
                    {JSON.stringify(state)}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default HistoryField;
