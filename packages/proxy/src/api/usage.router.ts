import type { NextFunction, Request, Response } from "express";

import { Router } from "express";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

import configModule from "~/config";
import logger from "~/logger";
import changeOriginOnRedirect from "~/helpers/changeOriginOnRedirect";
import CheckLoginMiddleware from "~/middlewares/checkLogin.middleware";
import HeadersMiddleware from "~/middlewares/headers.middleware";
import LoggerMiddleware from "~/middlewares/logger.middleware";
import ReloadConfig from "~/middlewares/reloadConfig.middleware";

const router = Router();

router.use(
    "/*",
    ReloadConfig,
    CheckLoginMiddleware,
    HeadersMiddleware,
    LoggerMiddleware,
    (req: Request, res: Response, next: NextFunction) => {
        createProxyMiddleware({
            router: (req: Request) => {
                const url = req.originalUrl;
                const router = configModule.getInstance().getConfig().router;
                for (const prop in router) {
                    if (url.startsWith(prop)) {
                        return router[prop] as string;
                    }
                }
                return "http://127.0.0.1:80/auth/error";
            },
            pathRewrite: (() => {
                const paths: Record<string, string> = {};
                for (const prop in configModule.getInstance().getConfig()
                    .router) {
                    paths[`^${prop}`] = "";
                }
                return paths;
            })(),
            changeOrigin: true,
            logLevel: "silent",
            onProxyReq: fixRequestBody,
            onProxyRes: changeOriginOnRedirect,
            onError: (err: Error) => {
                if (err.message === "Must provide a proper URL as target") {
                    logger.error(
                        'Must provide a proper URL as default router section path ("/")'
                    );
                }
            }
        })(req, res, next);
    }
);

export default router;
