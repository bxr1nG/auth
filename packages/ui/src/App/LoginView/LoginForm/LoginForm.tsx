import React, { useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";

import type FormikFields from "~/types/FormikFields";

import {
    defaultValues,
    emptyValues,
    validationSchema
} from "./LoginForm.constants";
import { getStored, addValues, sendRequest } from "./LoginForm.helpers";
import styles from "./LoginForm.scss";
import TextField from "./TextField/TextField";
import HistoryField from "./HistoryField/HistoryField";
import SubmitButton from "./SubmitButton/SubmitButton";

type LoginFormProps = Record<string, never>;

const LoginForm: React.FC<LoginFormProps> = () => {
    const [history, setHistory] = useState<Array<FormikFields>>(getStored());
    const [initialValues, setInitialValues] = useState<FormikFields>(
        history[0] || defaultValues
    );

    const formik = useFormik<FormikFields>({
        enableReinitialize: true,
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            const newHistory = addValues(values, history);
            setHistory(newHistory);
            setInitialValues(values);
            localStorage.setItem("history", JSON.stringify(newHistory));

            const response = await sendRequest(values);
            if (response.ok) {
                alert(JSON.stringify(await response.json(), null, 2));
            } else {
                alert(`HTTP error: ${response.status}`);
            }
        }
    });

    return (
        <form
            className={styles.form}
            onSubmit={formik.handleSubmit}
        >
            <HistoryField
                history={history}
                initialValues={initialValues}
                setInitialValues={setInitialValues}
                emptyValues={emptyValues}
            />

            <TextField
                name="X-Shib-Profile-UserPrincipalName"
                label="UserPrincipalName"
                formik={formik}
            />
            <Box className={styles.horizontalBox}>
                <TextField
                    name="X-Shib-Profile-BoxUserID"
                    label="BoxUserID"
                    type={"number"}
                    formik={formik}
                />
                <TextField
                    name="X-Shib-Profile-IAMUserID"
                    label="IAMUserID"
                    type={"number"}
                    formik={formik}
                />
            </Box>
            <Box className={styles.horizontalBox}>
                <TextField
                    name="X-Shib-Profile-FirstName"
                    label="FirstName"
                    formik={formik}
                />
                <TextField
                    name="X-Shib-Profile-LastName"
                    label="LastName"
                    formik={formik}
                />
            </Box>
            <TextField
                name="X-Shib-Profile-Email"
                label="Email"
                formik={formik}
            />
            <TextField
                name="X-Shib-Profile-Affiliation"
                label="Affiliation"
                formik={formik}
            />
            <TextField
                name="X-Shib-Profile-ApplicationNames"
                label="ApplicationNames"
                formik={formik}
            />
            <Box className={styles.horizontalBox}>
                <TextField
                    name="X-Shib-Profile-AffiliatedNHLTeam-ID"
                    label="AffiliatedNHLTeam-ID"
                    formik={formik}
                />
                <TextField
                    name="X-Shib-Profile-AffiliatedNHLTeam-Abbrev"
                    label="AffiliatedNHLTeam-Abbrev"
                    formik={formik}
                />
            </Box>
            <TextField
                name="X-Shib-Profile-AffiliatedNHLTeam-FullName"
                label="AffiliatedNHLTeam-FullName"
                formik={formik}
            />
            <TextField
                name="X-Shib-Authorization-Roles"
                label="Roles"
                formik={formik}
            />
            <TextField
                name="X-Shib-Authorization-Permissions"
                label="Permissions"
                formik={formik}
            />

            <SubmitButton />
        </form>
    );
};

export default LoginForm;
