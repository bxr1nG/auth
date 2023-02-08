import type { MutableRefObject } from "react";

import axios from "axios";

import type Logs from "~/types/Logs";
import type LogsParams from "~/types/LogsParams";

const getLogs = async <
    T extends {
        data: Logs;
        total: number;
    }
>(
    abortController: MutableRefObject<AbortController | null>,
    params?: LogsParams
): Promise<T> => {
    const response = await axios.get("/auth/manage/logs", {
        signal: abortController.current?.signal,
        params
    });

    return response.data as T;
};

export default getLogs;
