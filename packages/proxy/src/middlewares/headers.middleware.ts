import type { NextFunction, Request, Response } from "express";

import store from "~/store";
import IRights from "~/types/IRights";

function HeadersMiddleware(req: Request, _res: Response, next: NextFunction) {
    for (const header in store.rights) {
        req.headers[header] = store.rights[header as keyof IRights].toString();
    }
    next();
}

export default HeadersMiddleware;
