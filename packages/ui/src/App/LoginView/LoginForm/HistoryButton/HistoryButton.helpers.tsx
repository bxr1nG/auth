import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import type FormikFields from "~/types/FormikFields";

import styles from "./HistoryButton.scss";

const sortMap = (item: Array<string>) =>
    item.sort().map((roles, index) => (
        <Typography
            key={index}
            variant="body2"
            className={styles.wordBreak}
        >
            {roles}
        </Typography>
    ));

export const formatFields = (key: keyof FormikFields, item: FormikFields) => {
    switch (key) {
        case "X-Shib-Authorization-Roles":
            return (
                <Box className={styles.authFieldContainer}>
                    {sortMap(item[key].split(", "))}
                </Box>
            );
        case "X-Shib-Authorization-Permissions":
            return (
                <Box className={styles.authFieldContainer}>
                    {sortMap(item[key].split("\n"))}
                </Box>
            );
        default:
            return (
                <Typography
                    variant="body2"
                    className={styles.wordBreak}
                >
                    {item[key]}
                </Typography>
            );
    }
};
