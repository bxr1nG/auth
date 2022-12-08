import type { Express } from "express";
import express, { json } from "express";
import cors from "cors";

import type { IRouterFunction, IStore } from "../types";
import config from "../config";

function AppFactory(
    port: number,
    store: IStore,
    router: IRouterFunction
): Express {
    const app = express();

    app.use(
        cors({
            credentials: true,
            origin: config.client_url
        })
    );
    app.use(json());
    app.use(router(store));

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });

    return app;
}

export default AppFactory;
