import type { IncomingMessage } from "http";
import type { Request, Response } from "express";

import config from "~/config";

const changeOriginOnRedirect = (
    proxyRes: IncomingMessage,
    req: Request,
    _res: Response
) => {
    if (proxyRes.statusCode !== 302) {
        return;
    }
    if (!proxyRes.headers["location"]) {
        return;
    }
    if (new URL(proxyRes.headers["location"]).origin !== config.host_url) {
        return;
    }
    proxyRes.headers["location"] = `${req.protocol}://${
        req.get("host") as string
    }${new URL(proxyRes.headers["location"]).pathname}`;
};
export default changeOriginOnRedirect;
