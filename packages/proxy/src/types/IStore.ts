import type ILog from "./ILog";

type IStore = {
    rights: {
        login: string;
        roles: string;
    };
    logs: Array<ILog>;
};

export default IStore;
