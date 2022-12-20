import type { Request, Response } from "express";
import express, { Router } from "express";

import type IManagementRequest from "~/types/IManagementRequest";
import store from "~/store";
import config from "~/config";
import * as path from "path";

function managementRouter() {
    const router = Router();

    router.post("/", (req: IManagementRequest, res: Response) => {
        store.rights = req.body;
        res.json(req.body);
    });

    if (config.mode === "production") {
        router.use(
            express.static(path.resolve(__dirname, "../../../ui/build/"))
        );
    } else {
        router.get("/", (_req: Request, res: Response) => {
            res.redirect(config.client_url);
        });
    }

    router.get("/logout", (_req: Request, res: Response) => {
        const rights = store.rights;
        store.rights = null;
        res.json(rights);
    });

    router.get("/logs", (_req: Request, res: Response) => {
        res.json(store.logs);
    });

    router.get("/rights", (_req: Request, res: Response) => {
        res.json(store.rights);
    });

    router.get("*", (_req: Request, res: Response) => {
        res.sendFile(
            path.resolve(__dirname, "../../../ui/build/", "index.html")
        );
    });

    return router;
}

export default managementRouter;
