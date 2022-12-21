import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import LoginView from "./LoginView/LoginView";

type AppProps = Record<string, never>;

const App: React.FC<AppProps> = () => {
    return (
        <Routes>
            <Route
                path="/auth"
                element={<LoginView />}
            >
                <Route
                    path="login"
                    element={<LoginView />}
                />
                <Route
                    path="logs"
                    element={<LoginView />}
                />
            </Route>
            <Route
                path="*"
                element={<Navigate to="/auth" />}
            />
        </Routes>
    );
};

export default App;
