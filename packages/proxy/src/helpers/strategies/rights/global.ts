import type Rights from "~/types/Rights";
import type RightsStrategy from "~/types/RightsStrategy";
import store from "~/store";

const globalStrategy: RightsStrategy<never, null> = {
    checkLogin: () => !!store.rights,
    getRights: () => store.rights,
    getClient: () => "global",
    login: (rights: Rights) => (store.rights = rights),
    logout: () => {
        const rights = store.rights;
        store.rights = null;
        return rights;
    }
};

export default globalStrategy;
