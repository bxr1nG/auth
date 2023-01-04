import type { Request, Response } from "express";
import express, { Router } from "express";
import path from "path";

import config from "~/config";

const router = Router();

if (config.mode === "production") {
    router.use(
        express.static(path.resolve(__dirname, "../../../../ui/build/"))
    );

    router.get("*", (_req: Request, res: Response) => {
        res.sendFile(
            path.resolve(__dirname, "../../../../ui/build/", "index.html")
        );
    });
} else {
    router.get("/", (_req: Request, res: Response) => {
        res.redirect(config.client_url);
    });
}

export default router;
