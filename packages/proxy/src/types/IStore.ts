import type ILog from "./ILog";
import type IRights from "./IRights";

type IStore = {
    rights: IRights;
    logs: Array<ILog>;
};

export default IStore;
