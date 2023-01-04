import React from "react";
import { FormikProps } from "formik";
import StyledTextField from "@mui/material/TextField";

import type FormikFields from "~/types/FormikFields";

type TextFieldProps = {
    formik: FormikProps<FormikFields>;
    name: string;
    label: string;
    rows?: number;
};

const PermissionsField: React.FC<TextFieldProps> = (props) => {
    const { formik, name, label, rows } = props;

    return (
        <StyledTextField
            fullWidth
            inputProps={{ spellCheck: "false" }}
            id={name}
            name={name}
            label={label}
            multiline
            maxRows={rows ?? "10"}
            value={(formik.values[name as keyof typeof formik.values] as string)
                .split(";")
                .sort()
                .join("\n")}
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
