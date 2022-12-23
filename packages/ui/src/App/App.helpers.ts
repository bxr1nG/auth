import type Environment from "~/types/Environment";
import getEnvironment from "~/api/getEnvironment";

export const fetchData: (
    setEnvironment: (environment: Environment) => void
) => Promise<void> = async (setEnvironment) => {
    const environment = await getEnvironment();
    if (environment) {
        setEnvironment(environment);
    }
};
