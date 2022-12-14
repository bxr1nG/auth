import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        background: {
            default: "#f0f2f5"
        },
        primary: {
            light: "#0299ff",
            main: "#0183da",
            dark: "#006db7",
            contrastText: "#fff"
        },
        secondary: {
            light: "#91ff35",
            main: "#76ff03",
            dark: "#52b202",
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
