import { Router } from "express";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

import config from "~/config";
import CheckLoginMiddleware from "~/middlewares/checkLogin.middleware";
import HeadersMiddleware from "~/middlewares/headers.middleware";
import LoggerMiddleware from "~/middlewares/logger.middleware";

const router = Router();

router.use(
    "/*",
    CheckLoginMiddleware,
    HeadersMiddleware,
    LoggerMiddleware,
    createProxyMiddleware({
        target: config.host_url,
        changeOrigin: true,
        onProxyReq: fixRequestBody
    })
);

export default router;
