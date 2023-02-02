import type Log from "./Log";
import type Rights from "./Rights";

type Store = {
    rights: Rights | null;
    logs: Array<Log>;
};

export default Store;
