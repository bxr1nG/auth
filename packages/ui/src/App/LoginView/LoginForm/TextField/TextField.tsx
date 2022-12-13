import React from "react";
import { FormikProps } from "formik";
import StyledTextField from "@mui/material/TextField";

import type FormikFields from "~/types/FormikFields";

type TextFieldProps = {
    formik: FormikProps<FormikFields>;
    name: string;
    label: string;
    type?: string;
};

const TextField: React.FC<TextFieldProps> = (props) => {
    const { formik, name, label, type } = props;

    return (
        <StyledTextField
            fullWidth
            id={name}
            name={name}
            label={label}
            type={type ?? "text"}
            value={formik.values[name as keyof typeof formik.values]}
            onChange={formik.handleChange}
            error={
                formik.touched[name as keyof typeof formik.touched] &&
                Boolean(formik.errors[name as keyof typeof formik.errors])
            }
            helperText={
                formik.touched[name as keyof typeof formik.touched] &&
                formik.errors[name as keyof typeof formik.errors]
            }
        />
    );
};

export default TextField;
