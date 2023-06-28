import type { Request, Response } from "express";

import getYamlFile from "~/helpers/getYamlFile";
import { configPath, isDev, src } from "~/config";

const loadConfig = () => {
    const config = getYamlFile<Record<any, any>>(src, configPath, isDev);
    return config;
};

const withConfig = (checker: (config: Record<any, any>) => unknown) => () => {
    const config = loadConfig() as Record<any, any>;
    return checker(config);
};

const checkProxyURL = (config: Record<any, any>) => {
    if (config.proxyURL) {
        return {
            severity: "warning",
            message:
                "The proxyURL property is no longer used, use router instead"
        };
    }
    return false;
};

const checkRouter = (config: Record<any, any>) => {
    if (!config.router) {
        return {
            severity: "error",
            message: "Missing router property, the application will not work"
        };
    }
    return false;
};

const checkTestusersFormat = (config: Record<any, any>) => {
    if (config.testusers && (config.testusers as string).endsWith(".ini")) {
        return {
            severity: "warning",
            message:
                "Using the ini format for testusers is outdated, suggest switching to the yaml format"
        };
    }
    return false;
};

const SystemHealthCheck = {
    scan: () => {
        const validationList = [
            withConfig(checkProxyURL),
            withConfig(checkRouter),
            withConfig(checkTestusersFormat)
        ];

        return validationList.map((validation) => validation()).filter(Boolean);
    }
};

const GetWarningsAction = (_req: Request, res: Response) => {
    const warnings = SystemHealthCheck.scan();
    res.json(warnings);
};

export default GetWarningsAction;
