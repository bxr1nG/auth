import type TestusersFields from "~/types/TestusersFields";

const getTestusers: () => Promise<TestusersFields | null> = async () => {
    const response = await fetch("/auth/manage/testusers");
    return (await response.json()) as TestusersFields | null;
};

export default getTestusers;
