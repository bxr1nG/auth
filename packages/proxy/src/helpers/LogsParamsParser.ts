import type LogsParams from "~/types/LogsParams";
import type ParsedLogsParams from "~/types/ParsedLogsParams";

const LogsParamsParser = (params: LogsParams): ParsedLogsParams => {
    return {
        page: params.page ? +params.page : 0,
        limit: params.limit ? +params.limit : 10,
        filter: params.filter || "",
        search: params.search || ""
    };
};

export default LogsParamsParser;
