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

    if (!configFile?.router) {
        throw new Error("Proxy URL is not set");
    }
    if (!configFile?.testusers) {
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
        return "";
    })();

    const cache = (() => {
        if (configFile?.cache !== undefined) {
            return configFile.cache;
        }
        return true;
    })();

    const testusers_file = (() => {
        if (configFile?.testusers && configFile.testusers.endsWith(".ini")) {
            return isDev
                ? path.resolve(src, configFile.testusers)
                : path.resolve(src, "../../../../", configFile.testusers);
        }
        return null;
    })();

    const testusers = (() => {
        if (
            configFile?.testusers &&
            (configFile.testusers.endsWith(".yml") ||
                configFile.testusers.endsWith(".yaml"))
        ) {
            const yaml = getYamlFile<{
                users_roles: Record<string, string[]>;
                roles_permissions: Record<string, string[]>;
            }>(src, configFile.testusers, isDev);
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
        return "history";
    })();

    const scope = (() => {
        if (configFile?.scope && scopes.includes(configFile.scope)) {
            return configFile.scope;
        }
        return "global";
    })();

    const is_scoped = scope === "session";

    const default_context = (() => {
        if (configFile?.defaultContext) {
            return configFile.defaultContext;
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
