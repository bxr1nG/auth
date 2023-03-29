import type { NextFunction, Request, Response } from "express";

import config, { reload } from "~/config";

function ReloadConfig(_req: Request, _res: Response, next: NextFunction) {
    if (!config.cache) {
        reload();
    }
    next();
}

export default ReloadConfig;
