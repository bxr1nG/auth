import type { NextFunction, Request, Response } from "express";

import type Rights from "~/types/Rights";
import config from "~/config";
import store from "~/store";

function HeadersMiddleware(req: Request, _res: Response, next: NextFunction) {
    const rightsStore = config.is_scoped ? req.session.rights : store.rights;

    for (const header in rightsStore) {
        const value = rightsStore[header as keyof Rights];
        if (value) {
            req.headers[header] = value.toString();
        }
    }

    next();
}

export default HeadersMiddleware;
