import type { MutableRefObject } from "react";

import type Logs from "~/types/Logs";
import type LogsParams from "~/types/LogsParams";
import getLogs from "~/api/getLogs";
import getClients from "~/api/getClients";

export const fetchLogs: (
    setLogs: (logs: { data: Logs; total: number; isLoading: boolean }) => void,
    abortController: MutableRefObject<AbortController | null>,
    params?: LogsParams
) => Promise<void> = async (setLogs, abortController, params) => {
    if (abortController.current) {
        abortController.current.abort();
    }
    abortController.current = new AbortController();
    const logs = await getLogs(abortController, params);
    setLogs({
        ...logs,
        isLoading: false
    });
};

export const fetchClients: (
    setClients: (clients: Array<string> | null) => void
) => Promise<void> = async (setClients) => {
    const clients = await getClients();
    setClients(clients);
};
