import type { Request, Response } from "express";

import config from "~/config";
import store from "~/store";

const GetRightsAction = (req: Request, res: Response) => {
    res.json(config.is_scoped ? req.session.rights : store.rights);
};

export default GetRightsAction;
