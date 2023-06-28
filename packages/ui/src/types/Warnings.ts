import type { AlertColor } from "@mui/material/Alert";

type Warnings = Array<{
    severity: AlertColor;
    message: string;
}>;

export default Warnings;
