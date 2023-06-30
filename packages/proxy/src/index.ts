import express, { json } from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MemoryStoreFactory from "memorystore";
import cors from "cors";

import { SystemHealthCheck } from "~/api/management/actions/getWarnings";
import logger from "~/logger";
import managementRouter from "~/api/management/router";
import errorRouter from "~/api/error.router";
import clientRouter from "~/api/client.router";
import usageRouter from "~/api/usage.router";
import configModule from "~/config";
import "~/declarations";

const app = express();

app.use(cookieParser());

if (configModule.getInstance().getConfig().is_scoped) {
    const MemoryStore = MemoryStoreFactory(session);

    app.use(
        session({
            name: configModule.getInstance().getConfig().session_name,
            secret: configModule.getInstance().getConfig().session_secret,
            saveUninitialized: false,
            store: new MemoryStore({
                checkPeriod: 1000 * 60 * 60 * 24
            }),
            resave: false,
            cookie: { maxAge: 1000 * 60 * 60 * 24 }
        })
    );
}

app.use(json());
app.use(cors());

app.use("/auth/error", errorRouter);
app.use("/auth/manage", managementRouter);
app.use("/auth", clientRouter);
app.use("/", usageRouter);

const server = app.listen(configModule.getInstance().getConfig().port, () => {
    console.log(
        `Server started at port ${configModule.getInstance().getConfig().port}`
    );
    console.log(
        `Login page: http://localhost:${
            configModule.getInstance().getConfig().port
        }/auth/login`
    );
});

const warnings = SystemHealthCheck.scan();
warnings.map((warning) => logger.warn(warning.message));

const startGracefulShutdown = () => {
    console.log("Received kill signal, shutting down gracefully");
    server.close(() => {
        console.log("Closed out remaining connections");
    });
};

process.on("SIGTERM", startGracefulShutdown);
process.on("SIGINT", startGracefulShutdown);
