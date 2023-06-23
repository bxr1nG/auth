import path from "path";

import createConfig from "~/helpers/config/createConfig";

const configModule = (() => {
    let instance: null | ReturnType<typeof createInstance> = null;
    let config = createConfig(path.resolve(__dirname, "."));

    const getConfig = () => config;

    const reloadConfig = () => {
        config = createConfig(path.resolve(__dirname, "."));
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
