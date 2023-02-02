import type { NextFunction, Request, Response } from "express";

import config from "~/config";
import store from "~/store";

function CheckLoginMiddleware(req: Request, res: Response, next: NextFunction) {
    const rightsStore = config.is_scoped ? req.session.rights : store.rights;

    if (!rightsStore) {
        res.redirect(`/auth/login?path=${req.originalUrl}`);
        return;
    }

    next();
}

export default CheckLoginMiddleware;
