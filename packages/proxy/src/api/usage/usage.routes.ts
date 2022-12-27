import { Router } from "express";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

import config from "~/config";
import HeadersMiddleware from "~/middlewares/headers.middleware";
import LoggerMiddleware from "~/middlewares/logger.middleware";

const router = Router();

router.use(
    "/*",
    LoggerMiddleware,
    HeadersMiddleware,
    createProxyMiddleware({
        target: config.host_url,
        changeOrigin: true,
        onProxyReq: fixRequestBody
    })
);

export default router;
