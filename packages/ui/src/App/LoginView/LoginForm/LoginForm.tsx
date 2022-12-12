import React, { useState } from "react";
import { useFormik } from "formik";

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
                name="login"
                label="Login"
                formik={formik}
            />
            <TextField
                name="roles"
                label="Roles"
                formik={formik}
            />

            <SubmitButton />
        </form>
    );
};

export default LoginForm;
