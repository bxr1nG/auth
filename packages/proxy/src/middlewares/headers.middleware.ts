import type { NextFunction, Request, Response } from "express";

import store from "~/store";

function HeadersMiddleware(req: Request, _res: Response, next: NextFunction) {
    req.headers["login"] = store.rights.login;
    req.headers["roles"] = store.rights.roles;
    next();
}

export default HeadersMiddleware;
