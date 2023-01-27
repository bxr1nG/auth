import express, { json } from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MemoryStoreFactory from "memorystore";
import cors from "cors";

import managementRouter from "~/api/management/management.routes";
import clientRouter from "~/api/management/client.routes";
import usageRouter from "~/api/usage/usage.routes";
import config from "~/config";
import "~/declarations";

const app = express();
const MemoryStore = MemoryStoreFactory(session);

app.use(cookieParser());
if (config.is_scoped) {
    app.use(
        session({
            secret: config.session_secret,
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
app.use("/auth/manage", managementRouter);
app.use("/auth", clientRouter);
app.use("/", usageRouter);

const server = app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
    console.log(`Login page: http://localhost:${config.port}/auth/login`);
});

const startGracefulShutdown = () => {
    console.log("Received kill signal, shutting down gracefully");
    server.close(() => {
        console.log("Closed out remaining connections");
    });
};

process.on("SIGTERM", startGracefulShutdown);
process.on("SIGINT", startGracefulShutdown);
