import type RequestSession from "~/types/RequestSession";
import config from "~/config";

import globalStrategy from "./global";
import sessionStrategy from "./session";
import StrategyFactory from "./factory";

const strategyFactory = StrategyFactory<
    RequestSession | never,
    undefined | null
>();

strategyFactory.add("global", globalStrategy);
strategyFactory.add("session", sessionStrategy);

const selectedStrategy = strategyFactory.select(config.scope);

export default selectedStrategy;
