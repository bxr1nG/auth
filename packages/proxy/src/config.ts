import { config as dotenv } from "dotenv";

dotenv({
    path: `./environments/.env.${process.env.NODE_ENV ?? "development"}`
});

const config = {
    mode: process.env.NODE_ENV ?? "development",
    port: process.env.PROXY_APP_PORT ? +process.env.PROXY_APP_PORT : 80,
    host_url: process.env.PROXY_APP_HOST_URL ?? "http://localhost:10000",
    client_url: process.env.PROXY_APP_CLIENT_URL ?? "http://localhost:8080"
};

export default config;
