import type TestusersFields from "~/types/TestusersFields";
import config from "~/config";

const getTestusers: () => Promise<TestusersFields | null> = async () => {
    const response = await fetch(`${config.proxy_url}/auth/testusers`);
    return (await response.json()) as TestusersFields | null;
};

export default getTestusers;
