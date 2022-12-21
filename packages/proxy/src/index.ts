import express, { json } from "express";
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
app.use("/auth", managementRouter);
app.use("/", usageRouter);

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
    console.log(`Manage rights page: http://localhost:${config.port}/auth`);
    console.log(
        `Last 10k logs page: http://localhost:${config.port}/auth/logs`
    );
    console.log(
        `Current rights page: http://localhost:${config.port}/auth/rights`
    );
    console.log(`Proxy page: http://localhost:${config.port}`);
});
