import type ILog from "./ILog";
import type IRights from "./IRights";

type IStore = {
    rights: IRights | null;
    logs: Array<ILog>;
};

export default IStore;
