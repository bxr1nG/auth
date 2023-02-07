import type { MutableRefObject } from "react";

import type LogsParams from "~/types/LogsParams";
import type Logs from "~/types/Logs";
import getLogs from "~/api/getLogs";
import getSomething from "~/api/getSomething";

export const fetchLogs: (
    abortController: MutableRefObject<AbortController | null>,
    params?: LogsParams
) => Promise<{ data: Logs; total: number }> = async (
    abortController,
    params
) => {
    if (abortController.current) {
        abortController.current.abort();
    }
    abortController.current = new AbortController();
    const logs = await getLogs(abortController, params);
    return logs;
};

export const fetchClients: () => Promise<Array<string> | null> = async () => {
    const clients = await getSomething<Array<string> | null>(
        "/auth/manage/clients"
    );
    return clients;
};
