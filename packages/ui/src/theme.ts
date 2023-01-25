import { createTheme } from "@mui/material/styles";

import theme from "./theme.scss";

export default createTheme({
    palette: {
        background: {
            default: "#f0f2f5"
        },
        primary: {
            light: theme.primaryLight as string,
            main: theme.primaryMain as string,
            dark: theme.primaryDark as string,
            contrastText: "#fff"
        },
        secondary: {
            light: theme.secondaryLight as string,
            main: theme.secondaryMain as string,
            dark: theme.secondaryDark as string,
            contrastText: "#000"
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff"
                }
            }
        }
    }
});
