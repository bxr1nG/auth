import path from "path";
import process from "process";

import createConfig from "~/helpers/config/createConfig";

export const src = path.resolve(__dirname, ".");
export const mode = process.env.NODE_ENV ?? "development";
export const isDev = mode === "development";
export const configPath = isDev ? "config.yml" : "/opt/config.yml";

const configModule = (() => {
    let instance: null | ReturnType<typeof createInstance> = null;
    let config = createConfig(src, mode, isDev, configPath);

    const getConfig = () => config;

    const reloadConfig = () => {
        config = createConfig(src, mode, isDev, configPath);
    };

    const createInstance = () => ({
        getConfig,
        reloadConfig
    });

    return {
        getInstance: () => instance || (instance = createInstance())
    };
})();

export default configModule;

export type ConfigReturnType = ReturnType<typeof createConfig>;
