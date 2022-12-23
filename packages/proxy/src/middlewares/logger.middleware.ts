import type { NextFunction, Request, Response } from "express";

import StateLogger from "~/helpers/StateLogger";
import store from "~/store";
import logger from "~/logger";

function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
    const startTime = process.hrtime();
    logger.info(req.originalUrl);

    res.on("finish", () => {
        const endTime = process.hrtime(startTime);
        const totalTimeInMs = endTime[0] * 1000 + endTime[1] / 1e6;
        StateLogger(store, {
            time: totalTimeInMs,
            url: req.originalUrl
        });
    });

    next();
}

export default LoggerMiddleware;
