import React from "react";

import LoginView from "./LoginView/LoginView";

type AppProps = Record<string, never>;

const App: React.FC<AppProps> = () => {
    return <LoginView />;
};

export default App;
