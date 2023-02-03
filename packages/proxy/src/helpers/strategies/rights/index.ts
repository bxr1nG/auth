import config from "~/config";

import globalStrategy from "./global";
import sessionStrategy from "./session";
import StrategyFactory from "./factory";

const strategyFactory = StrategyFactory();

strategyFactory.add("global", globalStrategy);
strategyFactory.add("session", sessionStrategy);

const selectedStrategy = strategyFactory.select(config.scope);

export default selectedStrategy;
