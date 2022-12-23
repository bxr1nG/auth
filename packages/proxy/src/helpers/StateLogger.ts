import type ILog from "~/types/ILog";
import type IStore from "~/types/IStore";

function StateLogger(store: IStore, log: ILog): void {
    store.logs.unshift(log);
    store.logs = store.logs.slice(0, 10000);
}

export default StateLogger;
