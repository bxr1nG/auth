import React from "react";

import type Environment from "~/types/Environment";
import getEnvironment from "~/api/getEnvironment";

export const fetchData: (
    setEnvironment: React.Dispatch<React.SetStateAction<Environment>>
) => Promise<void> = async (setEnvironment) => {
    const environment = await getEnvironment();
    if (environment) {
        setEnvironment(environment);
    }
};
