import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Context from "~/context";
import config from "~/config";

import { fetchData } from "./App.helpers";
import LoginView from "./LoginView/LoginView";

type AppProps = Record<string, never>;

const App: React.FC<AppProps> = () => {
    const [environment, setEnvironment] = useState({
        ls_scope: config.ls_scope
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
        </Context.Provider>
    );
};

export default App;
