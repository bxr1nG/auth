import type { NextFunction, Request, Response } from "express";

import logger from "~/logger";
import StateLogger from "~/helpers/StateLogger";
import rightsStrategy from "~/helpers/strategies/rights";

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
            client: rightsStrategy.getClient(req.session)
        });
    });

    next();
}

export default LoggerMiddleware;
