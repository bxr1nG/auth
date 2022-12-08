import React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { validationSchema, initialValues } from "./LoginForm.constants";
import styles from "./LoginForm.scss";

type LoginFormProps = Record<string, never>;
type FormikProps = {
    login: string;
    roles: string;
};

const LoginForm: React.FC<LoginFormProps> = () => {
    const formik = useFormik<FormikProps>({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            const url = process.env.PROXY_URL ?? "http://localhost:8080";
            const response = await fetch(url, {
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
