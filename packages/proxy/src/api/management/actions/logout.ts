import type { Request, Response } from "express";

import type Rights from "~/types/Rights";
import config from "~/config";
import store from "~/store";

const LogoutAction = (req: Request, res: Response) => {
    let rights: Rights | null | undefined;
    if (config.is_scoped) {
        rights = req.session.rights;
        req.session.rights = undefined;
    } else {
        rights = store.rights;
        store.rights = null;
    }
    res.json(rights);
};

export default LogoutAction;
