import type Rights from "~/types/Rights";
import type RequestSession from "~/types/RequestSession";
import type RightsStrategy from "~/types/RightsStrategy";
import type RightsStrategyFactory from "~/types/RightsStrategyFactory";

const StrategyFactory = (): RightsStrategyFactory<
    RequestSession | never,
    undefined | null
> => {
    const strategies: {
        [key: string]: RightsStrategy<RequestSession | never, undefined | null>;
    } = {};

    return {
        add: (name, strategy) => {
            strategies[name] = strategy;
        },
        select: (strategyName) => {
            const strategy = strategies[strategyName] as RightsStrategy<
                RequestSession | never,
                undefined | null
            >;
            return {
                checkLogin(arg0: RequestSession | never): boolean {
                    return strategy.checkLogin(arg0);
                },
                getRights(
                    arg0: RequestSession | never
                ): Rights | undefined | null {
                    return strategy.getRights(arg0);
                },
                getClient(arg0: RequestSession | never): string {
                    return strategy.getClient(arg0);
                },
                login(rights: Rights, arg0: RequestSession | never): Rights {
                    return strategy.login(rights, arg0);
                },
                logout(
                    arg0: RequestSession | never
                ): Rights | undefined | null {
                    return strategy.logout(arg0);
                }
            };
        }
    };
};

export default StrategyFactory;
