import { config as dotenv } from "dotenv";

dotenv({
    path: `./environments/.env.${process.env.NODE_ENV ?? "development"}`
});

const config = {
    mode: process.env.NODE_ENV ?? "development",
    port: process.env.PORT ? +process.env.PORT : 80,
    host_url: process.env.HOST_URL ?? "http://localhost:10000",
    client_url: process.env.HOST_URL ?? "http://localhost:8080"
};

export default config;
