import express, { json } from "express";
import rootRouter from "./routing";
import config from "./config";

export const app = express();

app.use(json());
app.use(rootRouter);

const server = app.listen(config.port, () => {
    console.info(`Server started at port ${config.port}`);
});

const startGracefulShutdown = () => {
    console.log("Received kill signal, shutting down gracefully");
    server.close(() => {
        console.log("Closed out remaining connections");
    });
};

process.on("SIGTERM", startGracefulShutdown);
process.on("SIGINT", startGracefulShutdown);
