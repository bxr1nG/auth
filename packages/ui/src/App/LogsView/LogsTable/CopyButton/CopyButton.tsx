import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";

import { handleCopyClick } from "./CopyButton.helpers";

type CopyButtonProps = {
    copyText: string;
};

const CopyButton: React.FC<CopyButtonProps> = (props) => {
    const { copyText } = props;

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton
                disabled={open}
                color="primary"
                onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                    setOpen(true);
                    handleCopyClick(copyText, setOpen);
                }}
            >
                <ContentCopyIcon />
            </IconButton>
            <Popper
                open={open}
                anchorEl={anchorEl}
                transition
                disablePortal
            >
                {({ TransitionProps }) => (
                    <Fade
                        {...TransitionProps}
                        timeout={200}
                    >
                        <Paper>
                            <Typography sx={{ p: 1 }}>Copied!</Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </>
    );
};

export default CopyButton;
