import type { IncomingMessage } from "http";
import type { Request, Response } from "express";

import configModule from "~/config";

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
    if (
        Object.values(configModule.getInstance().getConfig().router)
            .map((value) =>
                value.includes(
                    new URL(proxyRes.headers["location"] as string).origin
                )
            )
            .indexOf(true) === -1
    ) {
        return;
    }
    proxyRes.headers["location"] = `${req.protocol}://${
        req.get("host") as string
    }${new URL(proxyRes.headers["location"]).pathname}`;
};
export default changeOriginOnRedirect;
