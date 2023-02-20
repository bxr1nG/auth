import type { NextFunction, Request, Response } from "express";

function CacheRemoverMiddleware(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    res.setHeader("Surrogate-Control", "no-store");
    res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    next();
}

export default CacheRemoverMiddleware;
