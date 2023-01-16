import type ILog from "~/types/ILog";

import store from "~/store";

function StateLogger(log: ILog): void {
    store.logs.unshift(log);
    store.logs = store.logs.slice(0, 10000);
}

export default StateLogger;
