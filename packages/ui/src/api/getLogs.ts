import type { MutableRefObject } from "react";

import type Logs from "~/types/Logs";
import type LogsParams from "~/types/LogsParams";

const getLogs: (
    abortController: MutableRefObject<AbortController | null>,
    params?: LogsParams
) => Promise<{
    data: Logs;
    total: number;
}> = async (abortController, params) => {
    const { page = 0, limit = 10, filter = "", search = "" } = params || {};
    const response = await fetch(
        `/auth/manage/logs?page=${page}&limit=${limit}&filter=${filter}&search=${search}`,
        {
            method: "GET",
            signal: abortController.current?.signal
        }
    );
    return (await response.json()) as {
        data: Logs;
        total: number;
    };
};

export default getLogs;
