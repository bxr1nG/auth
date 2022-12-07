import type { Request, Response, NextFunction } from "express";
import { Router } from "express";
import proxy from "express-http-proxy";
import config from "./config";

const rootRouter = Router();

rootRouter.use(
    "/",
    (req: Request, _res: Response, next: NextFunction) => {
        req.headers["Proxy-Authorization"] = `Basic auth`;
        delete req.headers["user-agent"];
        next();
    },
    proxy(config.host)
);

export default rootRouter;
