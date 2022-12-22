import { config as dotenv } from "dotenv";
import path from "path";

dotenv({
    path: `./environments/.env.${process.env.NODE_ENV ?? "development"}`
});

const mode = process.env.NODE_ENV ?? "development";

const config = {
    mode,
    port: process.env.PROXY_APP_PORT ? +process.env.PROXY_APP_PORT : 80,
    host_url: process.env.PROXY_APP_HOST_URL ?? "http://localhost:10000",
    client_url: process.env.PROXY_APP_CLIENT_URL ?? "http://localhost:8080",
    testusers_file: process.env.TESTUSERS_INI_FILE
        ? path.resolve(
              __dirname,
              "../../../../",
              process.env.TESTUSERS_INI_FILE
          )
        : mode === "development"
        ? path.resolve(__dirname, "./testusers.ini")
        : null
};

export default config;
