import { config as dotenv } from "dotenv";
import path from "path";
import * as process from "process";

const mode = process.env.NODE_ENV ?? "development";

dotenv({
    path: `./environments/.env.${mode}`
});

const config = {
    mode,
    port: process.env.APP_PORT ? +process.env.APP_PORT : 80,
    host_url: process.env.PROXY_URL ?? "http://localhost:10000",
    client_url: "http://localhost:8080",
    testusers_file: process.env.TESTUSERS_INI_FILE
        ? path.resolve(
              __dirname,
              "../../../../",
              process.env.TESTUSERS_INI_FILE
          )
        : mode === "development"
        ? path.resolve(__dirname, "./testusers.ini")
        : null,
    ls_scope: process.env.LOCAL_STORAGE_SCOPE
        ? `${process.env.LOCAL_STORAGE_SCOPE}-history`
        : "history",
    session_secret: process.env.SESSION_SECRET ?? "session secret",
    is_scoped: process.env.APP_SCOPE === "session",
    default_context: process.env.DEFAULT_CONTEXT ?? "/"
};

export default config;
