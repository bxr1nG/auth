import type Logs from "~/types/Logs";
import getLogs from "~/api/getLogs";

export const fetchData: (
    setLogs: (logs: Logs) => void
) => Promise<void> = async (setLogs) => {
    const logs = await getLogs();
    setLogs(logs);
};
