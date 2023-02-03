import type config from "~/config";

import type RightsStrategy from "./RightsStrategy";

type RightsStrategyFactory<T, S> = {
    add: (name: typeof config.scope, strategy: RightsStrategy<T, S>) => void;
    select: (strategyName: typeof config.scope) => RightsStrategy<T, S>;
};

export default RightsStrategyFactory;
