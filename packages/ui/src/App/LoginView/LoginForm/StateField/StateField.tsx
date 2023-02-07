import React, { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useQuery } from "@tanstack/react-query";

import type Environment from "~/types/Environment";
import type FormikFields from "~/types/FormikFields";
import useAlert from "~/hooks/useAlert";

import { fetchData } from "./StateField.helpers";
import styles from "./StateField.scss";

type HistoryFieldProps = {
    initialValues: FormikFields;
    setInitialValues: Dispatch<SetStateAction<FormikFields>>;
    emptyValues: FormikFields;
    environment: Environment;
};

const StateField: React.FC<HistoryFieldProps> = (props) => {
    const { initialValues, setInitialValues, emptyValues, environment } = props;

    const { setAlert } = useAlert();

    const { data } = useQuery({
        queryKey: ["testusers"],
        queryFn: () =>
            fetchData(
                emptyValues,
                environment.ls_scope,
                environment.extra_fields
            ),
        onError: () => {
            setAlert("An error occurred during the Testusers request", "error");
        }
    });

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
            {![...(data || []), emptyValues]
                .map((state) => JSON.stringify(state))
                .includes(JSON.stringify(initialValues)) && (
                <MenuItem value={JSON.stringify(initialValues)}>
                    History values
                </MenuItem>
            )}
            <MenuItem value={JSON.stringify(emptyValues)}>
                Empty values
            </MenuItem>
            {data &&
                data.map((state) => (
                    <MenuItem
                        key={JSON.stringify(state)}
                        value={JSON.stringify(state)}
                    >
                        {state["X-Shib-Profile-UserPrincipalName"]}&nbsp;
                        <div className={styles.helpText}>
                            {state["X-Shib-Authorization-Roles"]
                                .split(", ")
                                .filter((item) => item !== "Password1")
                                .join(", ")}
                        </div>
                    </MenuItem>
                ))}
        </TextField>
    );
};

export default StateField;
