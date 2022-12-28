import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import type FormikFields from "~/types/FormikFields";
import config from "~/config";
import Context from "~/context";

import {
    defaultValues,
    emptyValues,
    validationSchema
} from "./LoginForm.constants";
import { getStored, addValues, fetchData } from "./LoginForm.helpers";
import styles from "./LoginForm.scss";
import StateField from "./StateField/StateField";
import TextField from "./TextField/TextField";
import PermissionsField from "~/App/LoginView/LoginForm/PermissionsField/PermissionsField";
import LoginButton from "./LoginButton/LoginButton";
import Link from "./Link/Link";

type LoginFormProps = Record<string, never>;

const LoginForm: React.FC<LoginFormProps> = () => {
    const { environment } = useContext(Context);
    const [history, setHistory] = useState<Array<FormikFields>>(
        getStored(environment.ls_scope)
    );
    const [initialValues, setInitialValues] = useState<FormikFields>(
        history[0] || defaultValues
    );

    const formik = useFormik<FormikFields>({
        enableReinitialize: true,
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const newHistory = addValues(values, history);
            setHistory(newHistory);
            setInitialValues(values);
            localStorage.setItem(
                environment.ls_scope,
                JSON.stringify(newHistory)
            );
            fetchData(values)
                .then(() => {
                    window.location.href = `${config.proxy_url}/`;
                })
                .catch(console.error);
        }
    });

    return (
        <form
            className={styles.form}
            onSubmit={formik.handleSubmit}
        >
            <StateField
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
            <TextField
                name="X-Shib-Authorization-Roles"
                label="Roles"
                formik={formik}
            />
            <PermissionsField
                name="X-Shib-Authorization-Permissions"
                label="Permissions"
                formik={formik}
            />

            <Divider />

            <TextField
                name="X-Shib-Profile-ApplicationNames"
                label="ApplicationNames"
                formik={formik}
            />
            <Box className={styles.horizontalBox}>
                <Box className={styles.horizontalMiniBox}>
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
                <Box className={styles.horizontalMiniBox}>
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
            </Box>

            <Box className={styles.horizontalBox}>
                <Box className={styles.horizontalMiniBox}>
                    <TextField
                        name="X-Shib-Profile-Affiliation"
                        label="Affiliation"
                        formik={formik}
                    />
                    <TextField
                        name="X-Shib-Profile-AffiliatedNHLTeam-ID"
                        label="AffiliatedNHLTeam-ID"
                        formik={formik}
                    />
                </Box>
                <Box className={styles.horizontalMiniBox}>
                    <TextField
                        name="X-Shib-Profile-AffiliatedNHLTeam-Abbrev"
                        label="AffiliatedNHLTeam-Abbrev"
                        formik={formik}
                    />
                    <TextField
                        name="X-Shib-Profile-AffiliatedNHLTeam-FullName"
                        label="AffiliatedNHLTeam-FullName"
                        formik={formik}
                    />
                </Box>
            </Box>

            <LoginButton />

            <Box className={styles.horizontalRightBox}>
                <Link to={"/auth/logs"}>Logs</Link>
            </Box>
        </form>
    );
};

export default LoginForm;
