import type { MutableRefObject } from "react";

import axios from "axios";

import type Logs from "~/types/Logs";
import type LogsParams from "~/types/LogsParams";
import stringifyQueryParams from "~/utils/stringifyQueryParams";

const getLogs = async <
    T extends {
        data: Logs;
        total: number;
    }
>(
    abortController: MutableRefObject<AbortController | null>,
    params?: LogsParams
): Promise<T> => {
    const paramsString = stringifyQueryParams({
        page: 0,
        limit: 10,
        filter: "",
        search: "",
        ...params
    });

    const response = await axios.get(`/auth/manage/logs?${paramsString}`, {
        signal: abortController.current?.signal
    });

    return response.data as T;
};

export default getLogs;
