import { config as dotenv } from "dotenv";

dotenv({
    path: `src/environments/.env.${process.env.NODE_ENV ?? "development"}`
});

const config = {
    port: process.env.PORT || 4000,
    host: process.env.HOST || "www.google.com"
};

export default config;
