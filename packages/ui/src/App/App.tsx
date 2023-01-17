import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Context from "~/context";
import config from "~/config";

import { fetchData } from "./App.helpers";
import LoginView from "./LoginView/LoginView";
import LogsView from "./LogsView/LogsView";
import LogoutView from "./LogoutView/LogoutView";

type AppProps = Record<string, never>;

const App: React.FC<AppProps> = () => {
    const [environment, setEnvironment] = useState({
        ls_scope: config.ls_scope,
        default_context: config.default_context
    });

    useEffect(() => {
        fetchData(setEnvironment).catch(console.error);
    }, []);

    return (
        <Context.Provider
            value={{
                environment,
                setEnvironment
            }}
        >
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
        </Context.Provider>
    );
};

export default App;
