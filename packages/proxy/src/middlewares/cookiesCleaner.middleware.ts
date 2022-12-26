import type { NextFunction, Request, Response } from "express";
function CookiesCleanerMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    for (const prop in req.cookies) {
        res.clearCookie(prop);
    }
    next();
}

export default CookiesCleanerMiddleware;
