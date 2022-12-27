import type { Request, Response } from "express";
import { Router } from "express";
import fs from "fs";
import ini from "ini";

import type IManagementRequest from "~/types/IManagementRequest";
import store from "~/store";
import config from "~/config";
import CookiesCleanerMiddleware from "~/middlewares/cookiesCleaner.middleware";

const router = Router();

router.post(
    "/login",
    CookiesCleanerMiddleware,
    (req: IManagementRequest, res: Response) => {
        store.rights = req.body;
        res.json(req.body);
    }
);

router.get("/environment", (_req: Request, res: Response) => {
    res.json({
        ls_scope: config.ls_scope
    });
});

router.get("/testusers", (_req: Request, res: Response) => {
    if (config.testusers_file) {
        try {
            if (fs.existsSync(config.testusers_file)) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                const data = ini.parse(
                    fs.readFileSync(config.testusers_file, "utf8")
                );
                res.json(data);
            }
        } catch (e) {
            res.json(null);
        }
    } else {
        res.json(null);
    }
});

router.post(
    "/logout",
    CookiesCleanerMiddleware,
    (_req: Request, res: Response) => {
        const rights = store.rights;
        store.rights = null;
        res.json(rights);
    }
);

router.get("/logs", (_req: Request, res: Response) => {
    res.json(store.logs);
});

router.get("/rights", (_req: Request, res: Response) => {
    res.json(store.rights);
});

export default router;
