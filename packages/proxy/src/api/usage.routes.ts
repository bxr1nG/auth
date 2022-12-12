import { Router } from "express";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

import config from "~/config";
import HeadersMiddleware from "~/middlewares/headers.middleware";
import LoggerMiddleware from "~/middlewares/logger.middleware";

function usageRouter() {
    const router = Router();

    router.use(
        "/api/*",
        LoggerMiddleware,
        HeadersMiddleware,
        createProxyMiddleware({
            target: config.host_url,
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/"
            },
            onProxyReq: fixRequestBody
        })
    );

    return router;
}

export default usageRouter;
