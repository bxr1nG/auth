import type Logs from "~/types/Logs";
import config from "~/config";

const getLogs: () => Promise<Logs> = async () => {
    const response = await fetch(`${config.proxy_url}/auth/manage/logs`);
    return (await response.json()) as Logs;
};

export default getLogs;
