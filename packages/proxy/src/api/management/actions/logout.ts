import type { Request, Response } from "express";

import rightsStrategy from "~/helpers/strategies/rights";

const LogoutAction = (req: Request, res: Response) => {
    res.json(rightsStrategy.logout(req.session) || {});
};

export default LogoutAction;
