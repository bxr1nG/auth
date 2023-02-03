import type { NextFunction, Request, Response } from "express";

import rightsStrategy from "~/helpers/strategies/rights";

function CheckLoginMiddleware(req: Request, res: Response, next: NextFunction) {
    if (!rightsStrategy.checkLogin(req.session)) {
        res.redirect(`/auth/login?path=${req.originalUrl}`);
        return;
    }
    next();
}

export default CheckLoginMiddleware;
