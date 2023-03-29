import path from "path";

import createConfig from "~/helpers/config/createConfig";

const config = createConfig(path.resolve(__dirname, "."));

export function reload() {
    const props = Object.getOwnPropertyNames(config);
    for (let i = 0; i < props.length; i++) {
        delete config[props[i] as keyof typeof config];
    }
    for (const key in config) {
        delete config[key as keyof typeof config];
    }

    Object.assign(config, createConfig(path.resolve(__dirname, ".")));
}

export default config;
