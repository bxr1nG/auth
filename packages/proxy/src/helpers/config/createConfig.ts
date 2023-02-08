import process from "process";
import path from "path";
import fs from "fs";

import ini from "ini";

import getConfigFile from "./getConfigFile";

const createConfig = (src: string) => {
    const mode = process.env.NODE_ENV ?? "development";
    const isDev = mode === "development";
    const configFile = getConfigFile(src, isDev);
    const scopes = ["global", "session"];
    const session_secret = "session secret";

    if (!configFile?.proxyURL && !process.env.PROXY_URL) {
        throw new Error("Proxy URL is not set");
    }
    if (!configFile?.testusers && !process.env.TESTUSERS_INI_FILE) {
        throw new Error("Test users file is not set");
    }

    const port = (() => {
        if (isDev && process.env.APP_PORT) {
            return parseInt(process.env.APP_PORT);
        }
        return 80;
    })();

    const host_url = (() => {
        if (configFile?.proxyURL) {
            return configFile.proxyURL;
        }
        if (process.env.PROXY_URL) {
            return process.env.PROXY_URL;
        }
        return "https://www.google.com";
    })();

    const testusers_file = (() => {
        if (isDev) {
            return path.resolve(src, "./testusers.ini");
        }
        if (configFile?.testusers) {
            return path.resolve(src, "../../../../", configFile.testusers);
        }
        if (process.env.TESTUSERS_INI_FILE) {
            const users = process.env.TESTUSERS_INI_FILE;
            return path.resolve(src, "../../../../", users);
        }
        return null;
    })();

    const testusers = (() => {
        if (testusers_file) {
            if (fs.existsSync(testusers_file)) {
                return ini.parse(fs.readFileSync(testusers_file, "utf8"));
            }
        }
        return null;
    })();

    const ls_scope = (() => {
        if (configFile?.localStorage) {
            return `${configFile.localStorage}-history`;
        }
        if (process.env.LOCAL_STORAGE_SCOPE) {
            return `${process.env.LOCAL_STORAGE_SCOPE}-history`;
        }
        return "history";
    })();

    const scope = (() => {
        if (configFile?.scope && scopes.includes(configFile.scope)) {
            return configFile.scope;
        }
        if (process.env.APP_SCOPE && scopes.includes(process.env.APP_SCOPE)) {
            return process.env.APP_SCOPE;
        }
        return "global";
    })();

    const is_scoped = scope === "session";

    const default_context = (() => {
        if (configFile?.defaultContext) {
            return configFile.defaultContext;
        }
        if (process.env.DEFAULT_CONTEXT) {
            return process.env.DEFAULT_CONTEXT;
        }
        return "/";
    })();

    const extra_fields = (() => {
        if (configFile?.extraFields) {
            return configFile.extraFields;
        }
        return [];
    })();

    return {
        src,
        mode,
        port,
        host_url,
        testusers,
        ls_scope,
        scope,
        is_scoped,
        session_secret,
        default_context,
        extra_fields
    };
};

export default createConfig;
