import type { Request, Response } from "express";

import type Rights from "~/types/Rights";
import rightsStrategy from "~/helpers/strategies/rights";

const LoginAction = (req: Request, res: Response) => {
    res.json(rightsStrategy.login(req.body as Rights, req.session));
};

export default LoginAction;
