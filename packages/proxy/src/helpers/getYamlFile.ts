import path from "path";
import fs from "fs";

import yaml from "js-yaml";

const getYamlFile = <ReturnType>(
    src: string,
    filename: string,
    isDev: boolean
): ReturnType | null => {
    const pathToConfigFile = path.resolve(
        src,
        isDev ? "./" : "../../../..",
        filename
    );

    if (fs.existsSync(pathToConfigFile)) {
        return yaml.load(
            fs.readFileSync(pathToConfigFile, "utf8")
        ) as ReturnType;
    }

    return null;
};

export default getYamlFile;
