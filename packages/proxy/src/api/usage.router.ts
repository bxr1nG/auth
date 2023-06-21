import { Router } from "express";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

import config from "~/config";
import CheckLoginMiddleware from "~/middlewares/checkLogin.middleware";
import HeadersMiddleware from "~/middlewares/headers.middleware";
import LoggerMiddleware from "~/middlewares/logger.middleware";
import changeOriginOnRedirect from "~/helpers/changeOriginOnRedirect";

const router = Router();

router.use(
    "/*",
    CheckLoginMiddleware,
    HeadersMiddleware,
    LoggerMiddleware,
    createProxyMiddleware({
        target: config.host_url,
        router: config.router,
        pathRewrite: (() => {
            const paths: Record<string, string> = {};
            for (const prop in config.router) {
                paths[`^${prop}`] = "";
            }
            return paths;
        })(),
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        onProxyRes: changeOriginOnRedirect
    })
);

export default router;
