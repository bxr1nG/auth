import type Environment from "~/types/Environment";
import config from "~/config";

const getEnvironment: () => Promise<Environment | null> = async () => {
    const response = await fetch(`${config.proxy_url}/auth/environment`);
    return (await response.json()) as Environment | null;
};

export default getEnvironment;
