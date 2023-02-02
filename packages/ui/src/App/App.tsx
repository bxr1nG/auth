import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Loader from "~/components/Loader/Loader";

const LoginView = lazy(() => import("./LoginView/LoginView"));
const LogsView = lazy(() => import("./LogsView/LogsView"));
const LogoutView = lazy(() => import("./LogoutView/LogoutView"));

type AppProps = Record<string, never>;

const App: React.FC<AppProps> = () => {
    return (
        <Suspense
            fallback={
                <Loader
                    isLoading
                    isTransparent
                />
            }
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
        </Suspense>
    );
};

export default App;
