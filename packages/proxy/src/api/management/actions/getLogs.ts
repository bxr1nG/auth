import type { Request, Response } from "express";

import type ILogsParams from "~/types/ILogsParams";
import LogsParamsParser from "~/helpers/LogsParamsParser";
import store from "~/store";

const GetLogsAction = (req: Request, res: Response) => {
    const { page, limit, filter, search } = LogsParamsParser(
        req.query as ILogsParams
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
