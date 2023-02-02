import type { FormikProps } from "formik";

import React from "react";
import TextField from "@mui/material/TextField";

import type FormikFields from "~/types/FormikFields";

type PermissionsFieldProps = {
    formik: FormikProps<FormikFields>;
    name: string;
    label: string;
    rows?: number;
};

const PermissionsField: React.FC<PermissionsFieldProps> = (props) => {
    const { formik, name, label, rows } = props;

    return (
        <TextField
            fullWidth
            inputProps={{ spellCheck: "false" }}
            id={name}
            name={name}
            label={label}
            multiline
            maxRows={rows ?? "10"}
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

export default PermissionsField;
