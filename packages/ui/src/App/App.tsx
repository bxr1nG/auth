import React, { Suspense, lazy, useEffect, useState } from "react";

import Loader from "~/components/Loader/Loader";

import Router from "./Router/Router";

const ReactQueryDevtoolsProduction = lazy(() =>
    import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(
        (d) => ({
            default: d.ReactQueryDevtools
        })
    )
);

type AppProps = Record<string, never>;

const App: React.FC<AppProps> = () => {
    const [showDevtools, setShowDevtools] = useState(false);

    useEffect(() => {
        window.toggleDevtools = () => setShowDevtools((old) => !old);
    }, []);

    return (
        <>
            <Suspense
                fallback={
                    <Loader
                        isLoading
                        isTransparent
                    />
                }
            >
                <Router />
            </Suspense>
            {showDevtools && (
                <Suspense fallback={null}>
                    <ReactQueryDevtoolsProduction />
                </Suspense>
            )}
        </>
    );
};

export default App;
