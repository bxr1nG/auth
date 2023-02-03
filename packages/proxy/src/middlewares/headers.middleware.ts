import type { NextFunction, Request, Response } from "express";

import rightsStrategy from "~/helpers/strategies/rights";

function HeadersMiddleware(req: Request, _res: Response, next: NextFunction) {
    const rightsStore = rightsStrategy.getRights(req.session);

    for (const header in rightsStore) {
        const value = rightsStore[header];
        if (value) {
            req.headers[header] = value.toString();
        }
    }

    next();
}

export default HeadersMiddleware;
