import process from "process";
import path from "path";
import fs from "fs";

import ini from "ini";
import yaml from "js-yaml";

import logger from "~/logger";

import getConfigFile from "./getConfigFile";

const flattenObjectArrayToString = (obj: Record<string, Array<string>>) => {
    const result: Record<string, string> = {};
    for (const prop in obj) {
        const values = obj[prop];
        if (values) {
            result[prop] = values
                .map((value) => (value.includes(",") ? `"${value}"` : value))
                .join(", ");
        }
    }
    return result;
};

const createConfig = (src: string) => {
    const mode = process.env.NODE_ENV ?? "development";
    const isDev = mode === "development";
    const configFile = getConfigFile(src, isDev);
    const scopes = ["global", "session"];
    const session_secret = "session secret";

    if (!configFile?.proxyURL && !process.env.PROXY_URL) {
        throw new Error("Proxy URL is not set");
    }
    if (!configFile?.testusers && !process.env.TESTUSERS_FILE) {
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

    const cache = (() => {
        if (configFile?.cache !== undefined) {
            return configFile.cache;
        }
        if (process.env.CACHE) {
            return process.env.CACHE !== "false";
        }
        return true;
    })();

    const testusers_file = (() => {
        if (isDev) {
            return path.resolve(src, "./testusers.ini");
        }
        if (configFile?.testusers) {
            return path.resolve(src, "../../../../", configFile.testusers);
        }
        if (process.env.TESTUSERS_FILE) {
            const users = process.env.TESTUSERS_FILE;
            return path.resolve(src, "../../../../", users);
        }
        return null;
    })();

    const testusers = (() => {
        if (testusers_file) {
            if (fs.existsSync(testusers_file)) {
                if (testusers_file.endsWith(".ini")) {
                    logger.warn(
                        "Using the ini format for testusers is outdated, suggest switching to the yaml format"
                    );
                    return ini.parse(fs.readFileSync(testusers_file, "utf8"));
                } else {
                    const file = yaml.load(
                        fs.readFileSync(testusers_file, "utf8")
                    ) as {
                        users_roles: Record<string, Array<string>>;
                        roles_permissions: Record<string, Array<string>>;
                    };
                    return {
                        users: flattenObjectArrayToString(file.users_roles),
                        roles: flattenObjectArrayToString(
                            file.roles_permissions
                        )
                    };
                }
            } else {
                logger.warn("Test users file not found");
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
        cache,
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
