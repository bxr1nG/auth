import type { Request, Response } from "express";

import store from "~/store";

const GetClientsAction = (_req: Request, res: Response) => {
    const clients = store.logs
        .map((log) => log.client)
        .filter((v, i, a) => a.indexOf(v) === i)
        .filter((client) => client !== "global");
    res.json(clients.length ? clients : null);
};

export default GetClientsAction;
