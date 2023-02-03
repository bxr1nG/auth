import type { Request, Response } from "express";

import rightsStrategy from "~/helpers/strategies/rights";

const GetRightsAction = (req: Request, res: Response) => {
    res.json(rightsStrategy.getRights(req.session));
};

export default GetRightsAction;
