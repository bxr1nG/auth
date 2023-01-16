import type { NextFunction, Request, Response } from "express";

import StateLogger from "~/helpers/StateLogger";
import logger from "~/logger";
import config from "~/config";

function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
    logger.info(req.originalUrl);
    const startTime = process.hrtime();

    res.on("finish", () => {
        const endTime = process.hrtime(startTime);
        const totalTimeInMs = endTime[0] * 1000 + endTime[1] / 1e6;
        StateLogger({
            time: totalTimeInMs,
            url: req.originalUrl,
            at: Date.now(),
            client: config.is_scoped ? req.session.id : "global"
        });
    });

    next();
}

export default LoggerMiddleware;
