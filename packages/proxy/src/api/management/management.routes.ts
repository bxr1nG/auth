import type { Request, Response } from "express";
import { Router } from "express";
import fs from "fs";
import ini from "ini";

import type IRights from "~/types/IRights";
import type ILogsParams from "~/types/ILogsParams";
import store from "~/store";
import config from "~/config";
import CookiesCleanerMiddleware from "~/middlewares/cookiesCleaner.middleware";

const router = Router();

router.post(
    "/login",
    CookiesCleanerMiddleware,
    (req: Request, res: Response) => {
        if (config.is_scoped) {
            req.session.rights = req.body as IRights;
        } else {
            store.rights = req.body as IRights;
        }
        res.json(req.body);
    }
);

router.post(
    "/logout",
    CookiesCleanerMiddleware,
    (req: Request, res: Response) => {
        let rights: IRights | null | undefined;
        if (config.is_scoped) {
            rights = req.session.rights;
            req.session.rights = undefined;
        } else {
            rights = store.rights;
            store.rights = null;
        }
        res.json(rights);
    }
);

router.get("/logs", (req: Request, res: Response) => {
    const {
        page = "0",
        limit = "10",
        filter = "",
        search = ""
    } = req.query as ILogsParams;
    const logs = store.logs
        .filter((log) =>
            filter && filter !== "All" ? log.client === filter : true
        )
        .filter((log) => (search ? decodeURI(log.url).includes(search) : true));
    res.json({
        data:
            +limit > 0
                ? logs.slice(+page * +limit, (+page + 1) * +limit)
                : logs,
        total: logs.length
    });
});

router.get("/clients", (_req: Request, res: Response) => {
    const clients = store.logs
        .map((log) => log.client)
        .filter((v, i, a) => a.indexOf(v) === i)
        .filter((client) => client !== "global");
    res.json(clients.length ? clients : null);
});

router.get("/rights", (req: Request, res: Response) => {
    res.json(config.is_scoped ? req.session.rights : store.rights);
});

router.get("/environment", (_req: Request, res: Response) => {
    res.json({
        ls_scope: config.ls_scope,
        default_context: config.default_context
    });
});

router.get("/testusers", (_req: Request, res: Response) => {
    if (config.testusers_file) {
        try {
            if (fs.existsSync(config.testusers_file)) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                const data = ini.parse(
                    fs.readFileSync(config.testusers_file, "utf8")
                );
                res.json(data);
            }
        } catch (e) {
            res.json(null);
        }
    } else {
        res.json(null);
    }
});

export default router;
