import type { NextFunction, Request, Response } from "express";

import type IRights from "~/types/IRights";
import config from "~/config";
import store from "~/store";

function HeadersMiddleware(req: Request, res: Response, next: NextFunction) {
    const rightsStore = config.is_scoped ? req.session.rights : store.rights;

    if (!rightsStore) {
        res.redirect(
            config.mode === "production"
                ? `/auth/login?path=${req.originalUrl}`
                : `${config.client_url}/auth/login?path=${req.originalUrl}`
        );
        return;
    }

    for (const header in rightsStore) {
        const value = rightsStore[header as keyof IRights];
        if (value) {
            req.headers[header] = value.toString();
        }
    }

    next();
}

export default HeadersMiddleware;
