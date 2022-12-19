import { config as dotenv } from "dotenv";

dotenv({
    path: `./environments/.env.${process.env.NODE_ENV ?? "development"}`
});

const config = {
    port: process.env.LISTENER_APP_PORT ? +process.env.LISTENER_APP_PORT : 10000
};

export default config;
