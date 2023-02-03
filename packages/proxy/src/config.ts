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

const config = {
    mode,
    srcPath: path.resolve(__dirname, "."),
    port: process.env.APP_PORT && isDev ? +process.env.APP_PORT : 80,
    host_url:
        configFromFile?.proxyURL ??
        (isDev ? "http://localhost:10000" : "https://www.google.com"),
    testusers_file: isDev
        ? path.resolve(__dirname, "./testusers.ini")
        : configFromFile?.testusers
        ? path.resolve(__dirname, "../../../../", configFromFile?.testusers)
        : null,
    ls_scope: configFromFile?.localStorage
        ? `${configFromFile?.localStorage}-history`
        : "history",
    scope: configFromFile?.scope
        ? ["global", "session"].includes(configFromFile?.scope)
            ? configFromFile?.scope
            : "global"
        : "global",
    is_scoped: configFromFile?.scope === "session",
    session_secret: "session secret",
    default_context: configFromFile?.defaultContext ?? "/",
    extra_fields: configFromFile?.extraFields ?? []
};

export default config;
