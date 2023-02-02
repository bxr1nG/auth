import type { Request, Response } from "express";

import type Rights from "~/types/Rights";
import config from "~/config";
import store from "~/store";

const LoginAction = (req: Request, res: Response) => {
    if (config.is_scoped) {
        req.session.rights = req.body as Rights;
    } else {
        store.rights = req.body as Rights;
    }
    res.json(req.body);
};

export default LoginAction;
