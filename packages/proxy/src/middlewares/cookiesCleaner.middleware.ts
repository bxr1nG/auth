import type { NextFunction, Request, Response } from "express";
function CookiesCleanerMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    for (const prop in req.cookies) {
        if (!prop.startsWith("auth_session_")) {
            res.cookie(prop, "", {
                expires: new Date(0)
            });
        }
    }
    next();
}

export default CookiesCleanerMiddleware;
