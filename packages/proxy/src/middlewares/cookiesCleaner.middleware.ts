import type { NextFunction, Request, Response } from "express";
function CookiesCleanerMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    for (const prop in req.cookies) {
        res.cookie(prop, "", {
            expires: new Date(0)
        });
    }
    next();
}

export default CookiesCleanerMiddleware;
