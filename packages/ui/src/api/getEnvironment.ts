import type Environment from "~/types/Environment";

const getEnvironment: () => Promise<Environment | null> = async () => {
    const response = await fetch("/auth/manage/environment");
    return (await response.json()) as Environment | null;
};

export default getEnvironment;
