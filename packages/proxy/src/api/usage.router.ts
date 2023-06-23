import type { NextFunction, Request, Response } from "express";

import { Router } from "express";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

import configModule from "~/config";
import CheckLoginMiddleware from "~/middlewares/checkLogin.middleware";
import HeadersMiddleware from "~/middlewares/headers.middleware";
import LoggerMiddleware from "~/middlewares/logger.middleware";
import ReloadConfig from "~/middlewares/reloadConfig.middleware";
import changeOriginOnRedirect from "~/helpers/changeOriginOnRedirect";

const router = Router();

router.use(
    "/*",
    ReloadConfig,
    CheckLoginMiddleware,
    HeadersMiddleware,
    LoggerMiddleware,
    (req: Request, res: Response, next: NextFunction) => {
        createProxyMiddleware({
            target: configModule.getInstance().getConfig().host_url,
            router: configModule.getInstance().getConfig().router,
            pathRewrite: (() => {
                const paths: Record<string, string> = {};
                for (const prop in configModule.getInstance().getConfig()
                    .router) {
                    paths[`^${prop}`] = "";
                }
                return paths;
            })(),
            changeOrigin: true,
            onProxyReq: fixRequestBody,
            onProxyRes: changeOriginOnRedirect,
            logLevel: "silent"
        })(req, res, next);
    }
);

export default router;
