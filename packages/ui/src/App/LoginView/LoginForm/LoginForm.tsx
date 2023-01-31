import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type Environment from "~/types/Environment";
import type FormikFields from "~/types/FormikFields";
import { stringToUsable } from "~/utils/parsePermissions";

import { sx } from "./LoginForm.constants";
import {
    getStored,
    addValues,
    fetchData,
    storeRarelyUsedValues,
    createEmptyValues,
    createValidationSchema
} from "./LoginForm.helpers";
import styles from "./LoginForm.scss";
import StateField from "./StateField/StateField";
import TextField from "./TextField/TextField";
import PermissionsField from "./PermissionsField/PermissionsField";
import LoginButton from "./LoginButton/LoginButton";
import HistoryButton from "./HistoryButton/HistoryButton";
import Link from "./Link/Link";
import { OptionalObjectSchema } from "yup/lib/object";
import StringSchema from "yup/lib/string";

type LoginFormProps = {
    environment: Environment;
};

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { environment } = props;
    const [searchParams] = useSearchParams();

    const [history, setHistory] = useState<Array<FormikFields>>(
        getStored(environment.ls_scope)
    );
    const [initialValues, setInitialValues] = useState<FormikFields>(
        createEmptyValues(environment.extra_fields)
    );
    const [validationSchema, setValidationSchema] = useState<
        OptionalObjectSchema<{ [key: string]: StringSchema }>
    >(createValidationSchema(environment.extra_fields));

    useEffect(() => {
        setInitialValues(createEmptyValues(environment.extra_fields));
        setValidationSchema(createValidationSchema(environment.extra_fields));
        setHistory(getStored(environment.ls_scope));
    }, [environment]);

    const formik = useFormik<FormikFields>({
        enableReinitialize: true,
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            values["X-Shib-Authorization-Permissions"] = stringToUsable(
                values["X-Shib-Authorization-Permissions"]
            );
            const newHistory = addValues(values, history);
            setHistory(newHistory);
            storeRarelyUsedValues(
                values,
                environment.extra_fields,
                environment.ls_scope
            );
            localStorage.setItem(
                environment.ls_scope,
                JSON.stringify(newHistory)
            );
            fetchData(values)
                .then(() => {
                    const path = searchParams.get("path");
                    window.location.href = path || environment.default_context;
                })
                .catch(console.error);
        }
    });

    return (
        <form
            className={styles.form}
            onSubmit={formik.handleSubmit}
        >
            <Box className={styles.alwaysHorizontalBox}>
                <StateField
                    initialValues={initialValues}
                    setInitialValues={setInitialValues}
                    emptyValues={createEmptyValues(environment.extra_fields)}
                    environment={environment}
                />
                {history.length > 0 && (
                    <HistoryButton
                        history={history}
                        setInitialValues={setInitialValues}
                    />
                )}
            </Box>

            <Box className={styles.horizontalMiniBox}>
                <TextField
                    name="X-Shib-Profile-IAMUserID"
                    label="IAMUserID"
                    formik={formik}
                    fullWidth={false}
                />
                <TextField
                    name="X-Shib-Profile-UserPrincipalName"
                    label="UserPrincipalName"
                    formik={formik}
                />
            </Box>

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

            {!!environment.extra_fields.length && (
                <Accordion
                    disableGutters
                    sx={sx.accordion}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={sx.accordionSummary}
                    >
                        <Typography
                            variant="button"
                            color="grey"
                        >
                            Extra fields
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        className={styles.verticalBox}
                        sx={sx.accordionDetails}
                    >
                        {environment.extra_fields
                            .filter(
                                (field) =>
                                    formik.values[field.name] !== undefined
                            )
                            .map((field) => (
                                <TextField
                                    key={field.name}
                                    name={field.name}
                                    label={field.label}
                                    size={field.size ?? "large"}
                                    formik={formik}
                                />
                            ))}
                    </AccordionDetails>
                </Accordion>
            )}

            <LoginButton />

            <Box className={styles.horizontalRightBox}>
                <Link to={"/auth/logs"}>Logs</Link>
            </Box>
        </form>
    );
};

export default LoginForm;
