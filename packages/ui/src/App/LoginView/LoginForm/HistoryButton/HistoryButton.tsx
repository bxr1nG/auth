import React, { Dispatch, SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import HistoryIcon from "@mui/icons-material/History";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import type FormikFields from "~/types/FormikFields";
import theme from "~/theme";

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
                <Paper
                    className={styles.modal}
                    sx={{
                        backgroundColor: theme.palette.background.default
                    }}
                >
                    <Typography variant="h6">History</Typography>
                    {history.map((item, index) => (
                        <Box
                            key={index}
                            className={styles.item}
                        >
                            <Table
                                size="small"
                                sx={{
                                    borderRadius: 1,
                                    backgroundColor: "#fff"
                                }}
                            >
                                <TableBody>
                                    {Object.keys(item)
                                        .filter(
                                            (key) =>
                                                item[key as keyof FormikFields]
                                        )
                                        .map((key, index) => (
                                            <TableRow key={index}>
                                                <TableCell
                                                    className={
                                                        styles.tableLeftColumn
                                                    }
                                                >
                                                    <Typography
                                                        variant="subtitle2"
                                                        className={
                                                            styles.wordBreak
                                                        }
                                                    >
                                                        {key
                                                            .split("-")
                                                            .splice(3)
                                                            .join("-")}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableRightColumn
                                                    }
                                                >
                                                    {formatFields(
                                                        key as keyof FormikFields,
                                                        item
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    <TableRow>
                                        <TableCell
                                            colSpan={2}
                                            sx={{
                                                padding: 0,
                                                border: 0
                                            }}
                                        >
                                            <Button
                                                fullWidth
                                                onClick={() => {
                                                    setInitialValues(item);
                                                    handleClose();
                                                }}
                                            >
                                                Use
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    ))}
                </Paper>
            </Modal>
        </>
    );
};

export default HistoryButton;
