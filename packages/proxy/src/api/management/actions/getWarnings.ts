import type { Request, Response } from "express";

import getYamlFile from "~/helpers/getYamlFile";
import configModule, { configPath, isDev, src } from "~/config";

const loadConfig = () => {
    const config = getYamlFile<Record<any, any>>(src, configPath, isDev);
    return config;
};

const withConfig =
    (
        checker: (
            config: Record<any, any>
        ) => { severity: string; message: string } | false
    ) =>
    () => {
        const config = loadConfig() as Record<any, any>;
        return checker(config);
    };

const checkProxyURL = (config: Record<any, any>) => {
    if (config.proxyURL) {
        return {
            severity: "warning",
            message:
                "The proxyURL property is no longer supported, define router section instead or downgrade to bxr1ng/auth@1.1.18"
        };
    }
    return false;
};

const checkRouter = (config: Record<any, any>) => {
    if (!config.router) {
        return {
            severity: "error",
            message:
                "Missing router property, the application will not work, please use bxr1ng/auth@1.1.18"
        };
    }
    return false;
};

const checkRouterDefaultPath = (config: Record<any, any>) => {
    if (config.router && !(config.router as Record<string, string>)["/"]) {
        return {
            severity: "warning",
            message:
                'Default path ("/") is not specified in the router section, this may cause errors in the application'
        };
    }
    return false;
};

const checkTestusers = (config: Record<any, any>) => {
    if (!config.testusers) {
        return {
            severity: "warning",
            message: "Testusers file is not specified"
        };
    }
    return false;
};

const checkTestusersFile = (config: Record<any, any>) => {
    const testusers = configModule.getInstance().getConfig().testusers;
    if (config.testusers && !testusers) {
        return {
            severity: "warning",
            message: "Error reading testusers file"
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

export const SystemHealthCheck = {
    scan: (): Array<{ severity: string; message: string }> => {
        const validationList = [
            withConfig(checkProxyURL),
            withConfig(checkRouter),
            withConfig(checkRouterDefaultPath),
            withConfig(checkTestusers),
            withConfig(checkTestusersFile),
            withConfig(checkTestusersFormat)
        ];

        return validationList
            .map((validation) => validation())
            .filter(Boolean) as Array<{ severity: string; message: string }>;
    }
};

const GetWarningsAction = (_req: Request, res: Response) => {
    const warnings = SystemHealthCheck.scan();
    res.json(warnings);
};

export default GetWarningsAction;
