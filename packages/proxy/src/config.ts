import { config as dotenv } from "dotenv";

dotenv({
    path: `src/environments/.env.${process.env.NODE_ENV ?? "development"}`
});

const config = {
    management_port: process.env.MANAGEMENT_PORT
        ? +process.env.MANAGEMENT_PORT
        : 8081,
    usage_port: process.env.USAGE_PORT ? +process.env.USAGE_PORT : 80,
    host_url: process.env.HOST_URL || "www.google.com",
    client_url: process.env.CLIENT_URL || "www.google.com"
};

export default config;
