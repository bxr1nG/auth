import type Rights from "~/types/Rights";
import type RightsStrategy from "~/types/RightsStrategy";
import type RightsStrategyFactory from "~/types/RightsStrategyFactory";

const StrategyFactory = <T, S>(): RightsStrategyFactory<T, S> => {
    const strategies: {
        [key: string]: RightsStrategy<T, S>;
    } = {};

    return {
        add: (name, strategy) => {
            strategies[name] = strategy;
        },
        select: (strategyName) => {
            const strategy = strategies[strategyName] as RightsStrategy<T, S>;
            return {
                checkLogin(arg0: T): boolean {
                    return strategy.checkLogin(arg0);
                },
                getRights(arg0: T): Rights | S {
                    return strategy.getRights(arg0);
                },
                getClient(arg0: T): string {
                    return strategy.getClient(arg0);
                },
                login(rights: Rights, arg0: T): Rights {
                    return strategy.login(rights, arg0);
                },
                logout(arg0: T): Rights | S {
                    return strategy.logout(arg0);
                }
            };
        }
    };
};

export default StrategyFactory;
