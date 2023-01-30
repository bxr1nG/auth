import type { MutableRefObject } from "react";

import type LogsObject from "~/types/LogsObject";
import type LogsParams from "~/types/LogsParams";
import type Logs from "~/types/Logs";
import getLogs from "~/api/getLogs";
import getClients from "~/api/getClients";

export const fetchLogs: (
    setLogs: (logs: LogsObject) => void,
    abortController: MutableRefObject<AbortController | null>,
    params?: LogsParams
) => Promise<{ data: Logs; total: number }> = async (
    setLogs,
    abortController,
    params
) => {
    if (abortController.current) {
        abortController.current.abort();
    }
    abortController.current = new AbortController();
    const logs = await getLogs(abortController, params);
    setLogs({
        ...logs,
        isLoading: false
    });
    return logs;
};

export const fetchClients: (
    setClients: (clients: Array<string> | null) => void
) => Promise<void> = async (setClients) => {
    const clients = await getClients();
    setClients(clients);
};
