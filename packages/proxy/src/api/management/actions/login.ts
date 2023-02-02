import type { Request, Response } from "express";

import type IRights from "~/types/IRights";
import config from "~/config";
import store from "~/store";

const LoginAction = (req: Request, res: Response) => {
    if (config.is_scoped) {
        req.session.rights = req.body as IRights;
    } else {
        store.rights = req.body as IRights;
    }
    res.json(req.body);
};

export default LoginAction;
