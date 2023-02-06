import path from "path";
import process from "process";
import fs from "fs";

import YAML from "yaml";

import type Config from "~/types/Config";

const mode = process.env.NODE_ENV ?? "development";
const isDev = mode === "development";

const pathToConfigFile = isDev
    ? path.resolve(__dirname, "./config.yml")
    : path.resolve(__dirname, "../../../../opt/config.yml");

let configFromFile: Config | null = null;
if (fs.existsSync(pathToConfigFile)) {
    configFromFile = YAML.parse(
        fs.readFileSync(pathToConfigFile, "utf8")
    ) as Config;
}

if (!configFromFile?.proxyURL && !process.env.PROXY_URL) {
    throw new Error("Proxy URL is not set");
}

if (!configFromFile?.testusers && !process.env.TESTUSERS_INI_FILE) {
    throw new Error("Test users file is not set");
}

const config = {
    mode,
    srcPath: path.resolve(__dirname, "."),
    port: process.env.APP_PORT && isDev ? +process.env.APP_PORT : 80,
    host_url:
        configFromFile?.proxyURL ??
        process.env.PROXY_URL ??
        (isDev ? "http://localhost:10000" : "https://www.google.com"),
    testusers_file: isDev
        ? path.resolve(__dirname, "./testusers.ini")
        : configFromFile?.testusers
        ? path.resolve(__dirname, "../../../../", configFromFile?.testusers)
        : process.env.TESTUSERS_INI_FILE
        ? path.resolve(
              __dirname,
              "../../../../",
              process.env.TESTUSERS_INI_FILE
          )
        : null,
    ls_scope: configFromFile?.localStorage
        ? `${configFromFile?.localStorage}-history`
        : process.env.LOCAL_STORAGE_SCOPE
        ? `${process.env.LOCAL_STORAGE_SCOPE}-history`
        : "history",
    scope: configFromFile?.scope
        ? ["global", "session"].includes(configFromFile?.scope)
            ? configFromFile?.scope
            : "global"
        : process.env.APP_SCOPE
        ? ["global", "session"].includes(process.env.APP_SCOPE)
            ? process.env.APP_SCOPE
            : "global"
        : "global",
    is_scoped: configFromFile?.scope
        ? configFromFile?.scope === "session"
        : process.env.APP_SCOPE
        ? process.env.APP_SCOPE === "session"
        : false,
    session_secret: "session secret",
    default_context:
        configFromFile?.defaultContext ?? process.env.DEFAULT_CONTEXT ?? "/",
    extra_fields: configFromFile?.extraFields ?? []
};

export default config;
