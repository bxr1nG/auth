import type { Request, Response } from "express";

import path from "path";

import express, { Router } from "express";

import configModule from "~/config";
import CacheRemoverMiddleware from "~/middlewares/cacheRemover.middleware";

const router = Router();

router.use(
    express.static(
        path.resolve(
            configModule.getInstance().getConfig().src,
            "../../ui/build/"
        )
    )
);

router.get("*", CacheRemoverMiddleware, (_req: Request, res: Response) => {
    res.sendFile(
        path.resolve(
            configModule.getInstance().getConfig().src,
            "../../ui/build/",
            "index.html"
        )
    );
});

export default router;
