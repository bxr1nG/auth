import React, { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const LoginView = lazy(() => import("../LoginView/LoginView"));
const LogsView = lazy(() => import("../LogsView/LogsView"));
const LogoutView = lazy(() => import("../LogoutView/LogoutView"));

type RouterProps = Record<string, never>;

const Router: React.FC<RouterProps> = () => {
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

export default Router;
