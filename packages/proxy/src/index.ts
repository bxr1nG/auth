import express, { json, Request, Response } from "express";
import cors from "cors";

import managementRouter from "~/api/management.routes";
import usageRouter from "~/api/usage.routes";
import config from "~/config";

const app = express();

app.use(json());
app.use(
    cors({
        credentials: true,
        origin: config.client_url
    })
);
app.use("/auth/manage", managementRouter());
app.use("/proxy", usageRouter());
if (config.mode === "production") {
    app.use("/auth", express.static(__dirname + "/../../ui/build"));
} else {
    app.use("/auth", (_req: Request, res: Response) => {
        res.redirect(config.client_url);
    });
}

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
});
