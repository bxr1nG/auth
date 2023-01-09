import Typography from "@mui/material/Typography";

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
            return sortMap(item[key].split(", "));
        case "X-Shib-Authorization-Permissions":
            return sortMap(item[key].split("\n"));
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
