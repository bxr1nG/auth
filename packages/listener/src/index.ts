import express, { json } from "express";
import rootRouter from "./routing";
import config from "./config";

export const app = express();

app.use(json());
app.use(rootRouter);

app.listen(config.port, () => {
    console.info(`Server started at port ${config.port}`);
});
