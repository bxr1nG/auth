import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMutation } from "@tanstack/react-query";

import type Environment from "~/types/Environment";
import type FormikFields from "~/types/FormikFields";
import { stringToUsable } from "~/utils/parsePermissions";
import useAlert from "~/hooks/useAlert";
import api from "~/api";

import { sx } from "./LoginForm.constants";
import {
    getStored,
    addValues,
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

type LoginFormProps = {
    environment: Environment;
};

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { environment } = props;
    const [searchParams] = useSearchParams();
    const { setAlert } = useAlert();

    const mutation = useMutation({
        mutationFn: api.auth.login,
        onError: () => {
            setAlert("An error occurred during the Login", "error");
        },
        onSuccess: () => {
            const path = searchParams.get("path");
            window.location.href = path || environment.default_context;
        }
    });

    const [history, setHistory] = useState<Array<FormikFields>>(
        getStored(environment.ls_scope)
    );
    const [initialValues, setInitialValues] = useState<FormikFields>(
        createEmptyValues(environment.extra_fields)
    );

    const formik = useFormik<FormikFields>({
        enableReinitialize: true,
        initialValues,
        validationSchema: createValidationSchema(environment.extra_fields),
        onSubmit: (loginValues) => {
            const values = {
                ...loginValues,
                "X-Shib-Authorization-Permissions": stringToUsable(
                    loginValues["X-Shib-Authorization-Permissions"]
                )
            };
            storeRarelyUsedValues(
                values,
                environment.extra_fields,
                environment.ls_scope
            );
            const newHistory = addValues(values, history);
            setHistory(newHistory);
            localStorage.setItem(
                environment.ls_scope,
                JSON.stringify(newHistory)
            );
            mutation.mutate(values);
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
