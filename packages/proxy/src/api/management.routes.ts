import type { Response } from "express";
import { Router } from "express";

import type { IStore, IManagementRequest } from "../types";

function managementRouter(store: IStore) {
    const router = Router();

    router.post("/", (req: IManagementRequest, res: Response) => {
        store.rights.login = req.body.login;
        store.rights.roles = req.body.roles;
        res.json(req.body);
    });

    return router;
}

export default managementRouter;
