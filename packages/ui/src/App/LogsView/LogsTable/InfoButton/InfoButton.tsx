import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import styles from "./InfoButton.scss";
import { parseUrl } from "./InfoButton.helpers";

type InfoButtonProps = {
    url: string;
};

const InfoButton: React.FC<InfoButtonProps> = (props) => {
    const { url } = props;
    const { paths, params } = parseUrl(url);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton
                color="primary"
                onClick={handleOpen}
            >
                <InfoOutlinedIcon />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Paper className={styles.modal}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Path</TableCell>
                                <TableCell align="center">Param</TableCell>
                                <TableCell align="center">Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody
                            sx={{
                                "& tr:last-child td, & tr:last-child th": {
                                    border: 0
                                }
                            }}
                        >
                            {paths.map((path) => (
                                <TableRow key={path}>
                                    <TableCell
                                        align="center"
                                        className={styles.wordBreak}
                                    >
                                        {path}
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            ))}
                            {(params as [string, string][] | undefined)?.map(
                                (param) => (
                                    <TableRow key={`${param[0]}=${param[1]}`}>
                                        <TableCell></TableCell>
                                        <TableCell
                                            align="center"
                                            className={styles.wordBreak}
                                        >
                                            {param[0]}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            className={styles.wordBreak}
                                        >
                                            {decodeURI(param[1])}
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            </Modal>
        </>
    );
};

export default InfoButton;
