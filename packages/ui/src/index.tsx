import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { AlertProvider } from "~/contexts/AlertContext";
import AlertPopup from "~/components/AlertPopup/AlertPopup";

import App from "./App/App";
import "./styles.css";
import theme from "./theme";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

const root = ReactDOM.createRoot(
    document.querySelector("#root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AlertProvider>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <AlertPopup />
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </AlertProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
