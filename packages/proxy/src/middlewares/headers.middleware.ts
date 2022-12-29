import type { NextFunction, Request, Response } from "express";

import store from "~/store";
import IRights from "~/types/IRights";
import config from "~/config";

function HeadersMiddleware(req: Request, res: Response, next: NextFunction) {
    if (!store.rights) {
        res.redirect(
            config.mode === "production" ? "/auth/login" : config.client_url
        );
        return;
    }
    for (const header in store.rights) {
        const value = store.rights[header as keyof IRights];
        if (value) {
            req.headers[header] = value.toString();
        }
    }
    next();
}

export default HeadersMiddleware;
