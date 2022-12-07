import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    shape: {
        borderRadius: 32
    },
    palette: {
        primary: {
            light: "#ff4569",
            main: "#ff1744",
            dark: "#b2102f",
            contrastText: "#fff"
        },
        secondary: {
            light: "#91ff35",
            main: "#76ff03",
            dark: "#52b202",
            contrastText: "#000"
        }
    }
});
