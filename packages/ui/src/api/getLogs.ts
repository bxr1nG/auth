import type Logs from "~/types/Logs";

const getLogs: () => Promise<Logs> = async () => {
    const response = await fetch("/auth/manage/logs");
    return (await response.json()) as Logs;
};

export default getLogs;
