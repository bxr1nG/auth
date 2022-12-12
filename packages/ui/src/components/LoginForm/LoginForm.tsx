import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import config from "~/config";

import {
    defaultValues,
    emptyValues,
    validationSchema
} from "./LoginForm.constants";
import styles from "./LoginForm.scss";

type LoginFormProps = Record<string, never>;
type FormikFields = {
    login: string;
    roles: string;
};

const LoginForm: React.FC<LoginFormProps> = () => {
    const stored = localStorage.getItem("history")
        ? (JSON.parse(
              localStorage.getItem("history") as string
          ) as FormikFields)
        : [defaultValues];
    const [history, setHistory] = useState<Array<FormikFields>>(
        stored as Array<FormikFields>
    );
    const [initialValues, setInitialValues] = useState<FormikFields>(
        history[0] || defaultValues
    );

    const formik = useFormik<FormikFields>({
        enableReinitialize: true,
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            const newHistory = [
                ...new Set([
                    JSON.stringify(values),
                    ...history.map((state) => JSON.stringify(state))
                ])
            ]
                .map((state) => JSON.parse(state) as FormikFields)
                .slice(0, 10);

            setHistory(newHistory);
            setInitialValues(values);
            localStorage.setItem("history", JSON.stringify(newHistory));

            const response = await fetch(config.proxy_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

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
            <TextField
                select
                label="State"
                value={JSON.stringify(initialValues)}
                onChange={(event) => {
                    const cred = JSON.parse(event.target.value) as FormikFields;
                    setInitialValues(cred);
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

            <TextField
                fullWidth
                id="login"
                name="login"
                label="Login"
                value={formik.values.login}
                onChange={formik.handleChange}
                error={formik.touched.login && Boolean(formik.errors.login)}
                helperText={formik.touched.login && formik.errors.login}
            />
            <TextField
                fullWidth
                id="roles"
                name="roles"
                label="Roles"
                value={formik.values.roles}
                onChange={formik.handleChange}
                error={formik.touched.roles && Boolean(formik.errors.roles)}
                helperText={formik.touched.roles && formik.errors.roles}
            />
            <Button
                color="primary"
                variant="contained"
                fullWidth
                size="large"
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
};

export default LoginForm;
