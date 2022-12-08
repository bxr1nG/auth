import type { Request, Response, NextFunction } from "express";
import { Router } from "express";
import proxy from "express-http-proxy";

import type { IStore } from "~/types";
import config from "~/config";

function usageRouter(store: IStore) {
    const router = Router();

    router.use(
        "*",
        (req: Request, res: Response, next: NextFunction) => {
            const startTime = process.hrtime();

            res.on("finish", () => {
                const totalTime = process.hrtime(startTime);
                const totalTimeInMs = totalTime[0] * 1000 + totalTime[1] / 1e6;
                console.log(totalTimeInMs, req.originalUrl);
            });

            next();
        },
        (req: Request, _res: Response, next: NextFunction) => {
            req.headers["login"] = store.rights.login;
            req.headers["roles"] = store.rights.roles;
            next();
        },
        proxy(config.host_url)
    );

    return router;
}

export default usageRouter;
