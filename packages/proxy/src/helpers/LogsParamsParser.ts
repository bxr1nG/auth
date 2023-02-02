import type ILogsParams from "~/types/ILogsParams";
import type IParsedLogsParams from "~/types/IParsedLogsParams";

const LogsParamsParser = (params: ILogsParams): IParsedLogsParams => {
    return {
        page: params.page ? +params.page : 0,
        limit: params.limit ? +params.limit : 10,
        filter: params.filter || "",
        search: params.search || ""
    };
};

export default LogsParamsParser;
