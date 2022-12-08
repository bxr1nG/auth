import type { ILog, IStore } from "~/types";

function Logger(store: IStore, log: ILog) {
    store.logs.unshift(log);
    store.logs = store.logs.slice(0, 10000);
}

export default Logger;
