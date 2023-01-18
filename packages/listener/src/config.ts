import { config as dotenv } from "dotenv";
import process from "process";

const mode = process.env.NODE_ENV ?? "development";

dotenv({
    path: `./environments/.env.${mode}`
});

const config = {
    port: process.env.LISTENER_APP_PORT ? +process.env.LISTENER_APP_PORT : 10000
};

export default config;
