import { createContext } from "react";

import type Environment from "~/types/Environment";
import config from "~/config";

const Context = createContext<{
    environment: Environment;
    setEnvironment: (environment: Environment) => void;
}>({
    environment: {
        ls_scope: config.ls_scope,
        default_context: config.default_context
    },
    setEnvironment: () => {
        return;
    }
});

export default Context;
