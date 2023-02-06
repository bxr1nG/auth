import React from "react";

import type Environment from "~/types/Environment";
import getSomething from "~/api/getSomething";

export const fetchData: (
    setEnvironment: React.Dispatch<React.SetStateAction<Environment>>
) => Promise<void> = async (setEnvironment) => {
    const environment = await getSomething<Environment | null>(
        "/auth/manage/environment"
    );
    if (environment) {
        setEnvironment(environment);
    }
};
