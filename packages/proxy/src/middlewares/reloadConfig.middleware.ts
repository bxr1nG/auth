import type { NextFunction, Request, Response } from "express";

import configModule from "~/config";

function ReloadConfig(_req: Request, _res: Response, next: NextFunction) {
    if (!configModule.getInstance().getConfig().cache) {
        configModule.getInstance().reloadConfig();
    }
    next();
}

export default ReloadConfig;
