import type Rights from "./Rights";

type RightsStrategy<T, S> = {
    checkLogin(arg0: T): boolean;
    getRights(arg0: T): Rights | S;
    getClient(arg0: T): string;
    login(rights: Rights, arg0: T): Rights;
    logout(arg0: T): Rights | S;
};

export default RightsStrategy;
