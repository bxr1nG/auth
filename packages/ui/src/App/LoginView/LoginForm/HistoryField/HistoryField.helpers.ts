import type FormikFields from "~/types/FormikFields";
import type TestusersFields from "~/types/TestusersFields";
import config from "~/config";

export const sendRequest: () => Promise<TestusersFields | null | void> =
    async () => {
        const response = await fetch(`${config.proxy_url}/auth/testusers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            return (await response.json()) as TestusersFields | null;
        } else {
            alert(`HTTP error: ${response.status}`);
            return undefined;
        }
    };

export const parseResponse: (
    response: TestusersFields,
    values: FormikFields
) => Array<FormikFields> = (response, values) => {
    const { users, roles } = response;
    const testusersArray: Array<FormikFields> = [];
    for (const key in users) {
        const permissions = (users[key] as string)
            .replace(/\s/g, "")
            .split(",")
            .filter((role) => roles[role])
            .map((role) => (roles[role] as string).replace(/\s/g, ""))
            .join(",");

        testusersArray.push({
            ...values,
            "X-Shib-Profile-UserPrincipalName": key,
            "X-Shib-Authorization-Roles": users[key] as string,
            "X-Shib-Authorization-Permissions": permissions
        });
    }
    return testusersArray;
};
