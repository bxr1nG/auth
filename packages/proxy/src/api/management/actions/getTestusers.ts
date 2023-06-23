import type { Request, Response } from "express";

import configModule from "~/config";

const GetTestusersAction = (_req: Request, res: Response) => {
    res.json(configModule.getInstance().getConfig().testusers);
};

export default GetTestusersAction;
