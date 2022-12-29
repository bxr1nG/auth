import React, {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState
} from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import type FormikFields from "~/types/FormikFields";
import type TestusersFields from "~/types/TestusersFields";
import Context from "~/context";

import { fetchData, parseTestusers } from "./StateField.helpers";
import styles from "./StateField.scss";

type HistoryFieldProps = {
    initialValues: FormikFields;
    setInitialValues: Dispatch<SetStateAction<FormikFields>>;
    emptyValues: FormikFields;
};

const StateField: React.FC<HistoryFieldProps> = (props) => {
    const { initialValues, setInitialValues, emptyValues } = props;
    const [testusers, setTestusers] = useState<Array<FormikFields>>([]);
    const [rawTestusers, setRawTestusers] = useState<TestusersFields | null>(
        null
    );
    const { environment } = useContext(Context);

    useEffect(() => {
        fetchData(setRawTestusers, initialValues, environment.ls_scope).catch(
            console.error
        );
    }, []);

    useEffect(() => {
        if (rawTestusers) {
            setTestusers(
                parseTestusers(
                    rawTestusers,
                    initialValues,
                    environment.ls_scope
                )
            );
        }
    }, [initialValues, rawTestusers]);

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
                    {state["X-Shib-Profile-UserPrincipalName"]}&nbsp;
                    <div className={styles.helpText}>
                        {state["X-Shib-Authorization-Roles"]}
                    </div>
                </MenuItem>
            ))}
        </TextField>
    );
};

export default StateField;
