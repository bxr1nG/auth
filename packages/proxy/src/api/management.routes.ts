import type { Request, Response } from "express";
import { Router } from "express";

import type IManagementRequest from "~/types/IManagementRequest";
import store from "~/store";

function managementRouter() {
    const router = Router();

    router.post("/", (req: IManagementRequest, res: Response) => {
        store.rights = req.body;
        res.json(req.body);
    });

    router.get("/logs", (_req: Request, res: Response) => {
        res.json(store.logs);
    });

    router.get("/rights", (_req: Request, res: Response) => {
        res.json(store.rights);
    });

    return router;
}

export default managementRouter;
