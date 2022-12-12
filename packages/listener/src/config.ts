import { config as dotenv } from "dotenv";

dotenv({
    path: `./environments/.env.${process.env.NODE_ENV ?? "development"}`
});

const config = {
    port: process.env.PORT ?? 10000
};

export default config;
