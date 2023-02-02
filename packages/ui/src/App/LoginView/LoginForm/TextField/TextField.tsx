import type { FormikProps } from "formik";

import React from "react";
import StyledTextField from "@mui/material/TextField";

import type FormikFields from "~/types/FormikFields";

import styles from "./TextField.scss";

type TextFieldProps = {
    formik: FormikProps<FormikFields>;
    name: keyof FormikFields;
    label: string;
    fullWidth?: boolean;
    size?: "small" | "medium" | "large";
};

const TextField: React.FC<TextFieldProps> = (props) => {
    const { formik, name, label, fullWidth, size } = props;

    return (
        <StyledTextField
            fullWidth={fullWidth ?? true}
            className={size ? styles[size] : ""}
            id={name as string}
            name={name as string}
            label={label}
            value={formik.values[name]}
            onChange={formik.handleChange}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
        />
    );
};

export default TextField;
