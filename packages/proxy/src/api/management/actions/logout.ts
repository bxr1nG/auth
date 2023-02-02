import type { Request, Response } from "express";

import type IRights from "~/types/IRights";
import config from "~/config";
import store from "~/store";

const LogoutAction = (req: Request, res: Response) => {
    let rights: IRights | null | undefined;
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
