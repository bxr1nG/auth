import type { ConfigReturnType } from "~/config";

import type RightsStrategy from "./RightsStrategy";

type RightsStrategyFactory<T, S> = {
    add: (
        name: ConfigReturnType["scope"],
        strategy: RightsStrategy<T, S>
    ) => void;
    select: (strategyName: ConfigReturnType["scope"]) => RightsStrategy<T, S>;
};

export default RightsStrategyFactory;
