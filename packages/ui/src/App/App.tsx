import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import LoginView from "./LoginView/LoginView";
import LogsView from "./LogsView/LogsView";
import LogoutView from "./LogoutView/LogoutView";

type AppProps = Record<string, never>;

const App: React.FC<AppProps> = () => {
    return (
        <Routes>
            <Route
                path="/auth/login"
                element={<LoginView />}
            />
            <Route
                path="/auth/logs"
                element={<LogsView />}
            />
            <Route
                path="/auth/logout"
                element={<LogoutView />}
            />
            <Route
                path="*"
                element={<Navigate to="/auth/login" />}
            />
        </Routes>
    );
};

export default App;
