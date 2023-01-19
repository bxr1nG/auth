import type { Request, Response } from "express";
import express, { Router } from "express";
import path from "path";

const router = Router();

router.use(express.static(path.resolve(__dirname, "../../../../ui/build/")));

router.get("*", (_req: Request, res: Response) => {
    res.sendFile(
        path.resolve(__dirname, "../../../../ui/build/", "index.html")
    );
});

export default router;
