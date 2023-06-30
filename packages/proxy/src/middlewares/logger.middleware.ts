import type { NextFunction, Request, Response } from "express";

import logger from "~/logger";
import StateLogger from "~/helpers/StateLogger";
import rightsStrategy from "~/helpers/strategies/rights";
import configModule from "~/config";

const findRoute = (url: string) => {
    const router = configModule.getInstance().getConfig().router;
    for (const prop in router) {
        if (url.startsWith(prop)) {
            return url.replace(prop, `${router[prop] as string}/`);
        }
    }
    return null;
};

function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
    const parsed = findRoute(req.originalUrl) || "error";
    logger.info(`${req.originalUrl} => ${parsed}`);

    const startTime = process.hrtime();

    res.on("finish", () => {
        const endTime = process.hrtime(startTime);
        const totalTimeInMs = endTime[0] * 1000 + endTime[1] / 1e6;
        StateLogger({
            time: totalTimeInMs,
            url: req.originalUrl,
            at: Date.now(),
            client: rightsStrategy.getClient(req.session)
        });
    });

    next();
}

export default LoggerMiddleware;
