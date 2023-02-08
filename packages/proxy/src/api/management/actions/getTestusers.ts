import type { Request, Response } from "express";

import config from "~/config";

const GetTestusersAction = (_req: Request, res: Response) => {
    res.json(config.testusers);
};

export default GetTestusersAction;
