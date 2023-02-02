import type Log from "~/types/Log";

import store from "~/store";

function StateLogger(log: Log): void {
    store.logs.unshift(log);
    store.logs = store.logs.slice(0, 10000);
}

export default StateLogger;
