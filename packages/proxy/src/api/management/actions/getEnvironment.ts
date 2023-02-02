import type { Request, Response } from "express";

import config from "~/config";

const GetEnvironmentAction = (_req: Request, res: Response) => {
    res.json({
        ls_scope: config.ls_scope,
        default_context: config.default_context,
        extra_fields: config.extra_fields
    });
};

export default GetEnvironmentAction;
