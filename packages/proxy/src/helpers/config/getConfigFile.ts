import path from "path";
import fs from "fs";

import yaml from "js-yaml";

import type Config from "~/types/Config";

const getConfigFile = (src: string, isDev: boolean): Config | null => {
    const pathToConfigFile = path.resolve(
        src,
        isDev ? "./" : "../../../../opt/",
        "config.yml"
    );

    if (fs.existsSync(pathToConfigFile)) {
        return yaml.load(fs.readFileSync(pathToConfigFile, "utf8")) as Config;
    }

    return null;
};

export default getConfigFile;
