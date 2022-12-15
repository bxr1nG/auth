import type { Request, Response, Express } from "express";
import express from "express";
import cors from "cors";

import config from "~/config";

function ClientPicker(app: Express): void {
    if (config.mode === "production") {
        app.use("/auth", express.static(__dirname + "/../../ui/build"));
    } else {
        app.use(
            cors({
                credentials: true,
                origin: config.client_url
            })
        );
        app.use("/auth", (_req: Request, res: Response) => {
            res.redirect(config.client_url);
        });
    }
}

export default ClientPicker;
