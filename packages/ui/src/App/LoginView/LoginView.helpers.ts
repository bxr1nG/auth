import type Environment from "~/types/Environment";
import getSomething from "~/api/getSomething";

export const getEnvironment: () => Promise<Environment> = async () => {
    return await getSomething<Environment>("/auth/manage/environment");
};
