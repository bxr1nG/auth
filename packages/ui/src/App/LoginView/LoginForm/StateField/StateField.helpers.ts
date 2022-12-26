import type FormikFields from "~/types/FormikFields";
import type TestusersFields from "~/types/TestusersFields";
import getTestusers from "~/api/getTestusers";
import config from "~/config";

export const parseTestusers: (
    response: TestusersFields,
    values: FormikFields
) => Array<FormikFields> = (response, values) => {
    const { users, roles } = response;
    const testusers: Array<FormikFields> = [];
    for (const key in users) {
        let go = true;
        const permissions = (users[key] as string)
            .replace(/\s/g, "")
            .split(",")
            .filter((role) => roles[role])
            .map((role) => (roles[role] as string).replace(/\s/g, ""))
            .join(",")
            .split("")
            .map((char) => {
                // eslint-disable-next-line quotes
                if (char === '"') {
                    go = !go;
                    return;
                }
                if (char === "," && go) {
                    return ";";
                }
                return char;
            })
            .join("");

        const number = +(key.match(/\d/g) ?? [0]).join("");

        testusers.push({
            ...values,
            "X-Shib-Profile-UserPrincipalName": key,
            "X-Shib-Authorization-Roles": users[key] as string,
            "X-Shib-Authorization-Permissions": permissions,
            "X-Shib-Profile-IAMUserID": 500 + number,
            "X-Shib-Profile-LastName": `Doe${number}`,
            "X-Shib-Profile-ApplicationNames":
                config.ls_scope.slice(0, -7) || "none"
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
