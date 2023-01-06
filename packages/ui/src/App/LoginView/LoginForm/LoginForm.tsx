import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type FormikFields from "~/types/FormikFields";
import config from "~/config";
import Context from "~/context";
import { stringToUsable } from "~/utils/parsePermissions";

import { emptyValues, validationSchema, sx } from "./LoginForm.constants";
import {
    getStored,
    addValues,
    fetchData,
    storeRarelyUsedValues
} from "./LoginForm.helpers";
import styles from "./LoginForm.scss";
import StateField from "./StateField/StateField";
import TextField from "./TextField/TextField";
import PermissionsField from "./PermissionsField/PermissionsField";
import LoginButton from "./LoginButton/LoginButton";
import HistoryButton from "./HistoryButton/HistoryButton";
import Link from "./Link/Link";

type LoginFormProps = Record<string, never>;

const LoginForm: React.FC<LoginFormProps> = () => {
    const { environment } = useContext(Context);
    const [history, setHistory] = useState<Array<FormikFields>>(
        getStored(environment.ls_scope)
    );
    const [initialValues, setInitialValues] =
        useState<FormikFields>(emptyValues);

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
            storeRarelyUsedValues(values);
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
            <Box className={styles.alwaysHorizontalBox}>
                <StateField
                    initialValues={initialValues}
                    setInitialValues={setInitialValues}
                    emptyValues={emptyValues}
                />
                <HistoryButton
                    history={history}
                    setInitialValues={setInitialValues}
                />
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
                    <Box className={styles.horizontalBox}>
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
                        <Box className={styles.horizontalMiniBox}>
                            <TextField
                                name="X-Shib-Profile-BoxUserID"
                                label="BoxUserID"
                                formik={formik}
                            />
                            <TextField
                                name="X-Shib-Profile-Email"
                                label="Email"
                                formik={formik}
                            />
                        </Box>
                    </Box>

                    <TextField
                        name="X-Shib-Profile-ApplicationNames"
                        label="ApplicationNames"
                        formik={formik}
                    />

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
                </AccordionDetails>
            </Accordion>

            <LoginButton />

            <Box className={styles.horizontalRightBox}>
                <Link to={"/auth/logs"}>Logs</Link>
            </Box>
        </form>
    );
};

export default LoginForm;
