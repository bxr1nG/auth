import React, { Dispatch, SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import HistoryIcon from "@mui/icons-material/History";

import type FormikFields from "~/types/FormikFields";

import styles from "./HistoryButton.scss";
import { formatFields } from "./HistoryButton.helpers";

type HistoryButtonProps = {
    history: Array<FormikFields>;
    setInitialValues: Dispatch<SetStateAction<FormikFields>>;
};

const HistoryButton: React.FC<HistoryButtonProps> = (props) => {
    const { history, setInitialValues } = props;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box className={styles.container}>
                <IconButton
                    onClick={handleOpen}
                    color="primary"
                    size="large"
                >
                    <HistoryIcon />
                </IconButton>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box
                    className={styles.modal}
                    sx={{
                        borderRadius: 1,
                        backgroundColor: "background.paper"
                    }}
                >
                    <Typography variant="h6">History</Typography>
                    {history
                        .filter(
                            (item) =>
                                Object.keys(item).filter(
                                    (key) => item[key as keyof FormikFields]
                                ).length > 0
                        )
                        .map((item, index) => (
                            <Box
                                key={index}
                                className={styles.item}
                            >
                                {Object.keys(item)
                                    .filter(
                                        (key) => item[key as keyof FormikFields]
                                    )
                                    .map((key, index) => (
                                        <Box key={index}>
                                            <Typography
                                                display="inline"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {key
                                                    .split("-")
                                                    .splice(3)
                                                    .join("-")}
                                                :&nbsp;
                                            </Typography>
                                            {formatFields(
                                                key as keyof FormikFields,
                                                item
                                            )}
                                        </Box>
                                    ))}
                                <Button
                                    fullWidth
                                    onClick={() => {
                                        setInitialValues(item);
                                        handleClose();
                                    }}
                                >
                                    Use
                                </Button>
                            </Box>
                        ))}
                </Box>
            </Modal>
        </>
    );
};

export default HistoryButton;
