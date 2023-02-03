import type Rights from "~/types/Rights";
import type RequestSession from "~/types/RequestSession";
import type RightsStrategy from "~/types/RightsStrategy";

const sessionStrategy: RightsStrategy<RequestSession, undefined> = {
    checkLogin: (session: RequestSession) => !!session.rights,
    getRights: (session: RequestSession) => session.rights,
    getClient: (session: RequestSession) =>
        `${
            session.rights
                ? session.rights["X-Shib-Profile-UserPrincipalName"] ||
                  "Unnamed"
                : "Unnamed"
        }: ${session.id}`,
    login: (rights: Rights, session: RequestSession) =>
        (session.rights = rights),
    logout: (session: RequestSession) => {
        const rights = session.rights;
        session.rights = undefined;
        return rights;
    }
};

export default sessionStrategy;
