import type { Request, Response } from "express";

import path from "path";

import express, { Router } from "express";

import config from "~/config";

const router = Router();

router.use(express.static(path.resolve(config.srcPath, "../../ui/build/")));

router.get("*", (_req: Request, res: Response) => {
    res.sendFile(path.resolve(config.srcPath, "../../ui/build/", "index.html"));
});

export default router;
