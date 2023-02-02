import type { Request, Response } from "express";

import type LogsParams from "~/types/LogsParams";
import LogsParamsParser from "~/helpers/LogsParamsParser";
import store from "~/store";

const GetLogsAction = (req: Request, res: Response) => {
    const { page, limit, filter, search } = LogsParamsParser(
        req.query as LogsParams
    );

    const logs = store.logs
        .filter((log) =>
            filter && filter !== "All" ? log.client === filter : true
        )
        .filter((log) => (search ? decodeURI(log.url).includes(search) : true));

    res.json({
        data: limit > 0 ? logs.slice(page * limit, (page + 1) * limit) : logs,
        total: logs.length
    });
};

export default GetLogsAction;
