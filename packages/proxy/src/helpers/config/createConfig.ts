import process from "process";
import path from "path";
import fs from "fs";

import ini from "ini";

import type Config from "~/types/Config";
import getYamlFile from "~/helpers/getYamlFile";

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

const makeid = (length: number) => {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
    }
    return result;
};

const createConfig = (
    src: string,
    mode: string,
    isDev: boolean,
    configPath: string
) => {
    const configFile = getYamlFile<Config>(src, configPath, isDev);
    const scopes = ["global", "session"];
    const session_secret = "session secret";
    const session_name = `auth_session_${makeid(10)}`;

    if (
        !configFile?.proxyURL &&
        !process.env.PROXY_URL &&
        !configFile?.router
    ) {
        throw new Error("Proxy URL is not set");
    }
    if (
        !configFile?.testusersIni &&
        !process.env.TESTUSERS_INI_FILE &&
        !configFile?.testusersYaml &&
        !process.env.TESTUSERS_YAML_FILE
    ) {
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
        return "";
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
        if (configFile?.testusersIni) {
            return path.resolve(src, "../../../../", configFile.testusersIni);
        }
        if (process.env.TESTUSERS_INI_FILE) {
            const users = process.env.TESTUSERS_INI_FILE;
            return path.resolve(src, "../../../../", users);
        }
        return null;
    })();

    const testusers = (() => {
        if (configFile?.testusersYaml) {
            const yaml = getYamlFile<{
                users_roles: Record<string, string[]>;
                roles_permissions: Record<string, string[]>;
            }>(src, configFile.testusersYaml, isDev);
            if (yaml)
                return {
                    roles: flattenObjectArrayToString(yaml.roles_permissions),
                    users: flattenObjectArrayToString(yaml.users_roles)
                };
        }
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

    const router = (() => {
        if (configFile?.router) {
            return configFile.router;
        }
        return {};
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
        session_name,
        default_context,
        extra_fields,
        router
    };
};

export default createConfig;
