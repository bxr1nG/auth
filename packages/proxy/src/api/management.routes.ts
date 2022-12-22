import type { Request, Response } from "express";
import express, { Router } from "express";

import type IManagementRequest from "~/types/IManagementRequest";
import store from "~/store";
import config from "~/config";
import * as path from "path";
import * as fs from "fs";
import * as ini from "ini";

const router = Router();

router.post("/", (req: IManagementRequest, res: Response) => {
    store.rights = req.body;
    res.json(req.body);
});

router.get("/testusers", (_req: Request, res: Response) => {
    if (config.testusers_file) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        const data = ini.parse(
            fs.readFileSync(
                path.resolve(__dirname, "../../", config.testusers_file),
                "utf8"
            )
        );
        res.json(data);
    } else {
        res.json(null);
    }
});

if (config.mode === "production") {
    router.use(express.static(path.resolve(__dirname, "../../../ui/build/")));
} else {
    router.get("/", (_req: Request, res: Response) => {
        res.redirect(config.client_url);
    });
}

router.get("/logout", (_req: Request, res: Response) => {
    const rights = store.rights;
    store.rights = null;
    res.json(rights);
});

router.get("/logs", (_req: Request, res: Response) => {
    res.json(store.logs);
});

router.get("/rights", (_req: Request, res: Response) => {
    res.json(store.rights);
});

router.get("*", (_req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../../../ui/build/", "index.html"));
});

export default router;
