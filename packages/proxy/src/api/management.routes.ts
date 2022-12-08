import type { Response } from "express";
import { Router } from "express";

import type { IManagementRequest } from "~/types";
import store from "~/store";
import config from "~/config";

function managementRouter() {
    const router = Router();

    router.post("/", (req: IManagementRequest, res: Response) => {
        store.rights = {
            login: req.body.login,
            roles: req.body.roles
        };
        res.json(req.body);
    });

    router.get("/", (_req: IManagementRequest, res: Response) => {
        res.redirect(config.client_url);
    });

    router.get("/logs", (_req: IManagementRequest, res: Response) => {
        res.json(store.logs);
    });

    return router;
}

export default managementRouter;
