import type { NextFunction, Request, Response } from "express";
import { Logger } from "~/helpers";
import store from "~/store";

function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
    const startTime = process.hrtime();

    res.on("finish", () => {
        const endTime = process.hrtime(startTime);
        const totalTimeInMs = endTime[0] * 1000 + endTime[1] / 1e6;
        Logger(store, {
            time: totalTimeInMs,
            url: req.originalUrl
        });
    });

    next();
}

export default LoggerMiddleware;
