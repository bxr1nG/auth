import type { Request, Response } from "express";

import configModule from "~/config";

const GetEnvironmentAction = (_req: Request, res: Response) => {
    res.json({
        ls_scope: configModule.getInstance().getConfig().ls_scope,
        default_context: configModule.getInstance().getConfig().default_context,
        extra_fields: configModule.getInstance().getConfig().extra_fields
    });
};

export default GetEnvironmentAction;
