import type { Express } from "express";
import express, { json } from "express";
import cors from "cors";

import type { IRouterFunction } from "types";
import config from "~/config";

function AppFactory(port: number, router: IRouterFunction): Express {
    const app = express();

    app.use(
        cors({
            credentials: true,
            origin: config.client_url
        })
    );
    app.use(json());
    app.use(router());

    app.listen(port, () => {
        console.log(`Server started at port ${port}`);
    });

    return app;
}

export default AppFactory;
