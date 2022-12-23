import type FormikFields from "~/types/FormikFields";
import type TestusersFields from "~/types/TestusersFields";
import getTestusers from "~/api/getTestusers";

export const parseTestusers: (
    response: TestusersFields,
    values: FormikFields
) => Array<FormikFields> = (response, values) => {
    const { users, roles } = response;
    const testusers: Array<FormikFields> = [];
    for (const key in users) {
        const permissions = (users[key] as string)
            .replace(/\s/g, "")
            .split(",")
            .filter((role) => roles[role])
            .map((role) => (roles[role] as string).replace(/\s/g, ""))
            .join(",");

        testusers.push({
            ...values,
            "X-Shib-Profile-UserPrincipalName": key,
            "X-Shib-Authorization-Roles": users[key] as string,
            "X-Shib-Authorization-Permissions": permissions
        });
    }
    return testusers;
};

export const fetchData: (
    setTestusers: (testusers: Array<FormikFields>) => void,
    values: FormikFields
) => Promise<void> = async (setTestusers, values) => {
    const data = await getTestusers();
    if (data) {
        setTestusers(parseTestusers(data, values));
    }
};
