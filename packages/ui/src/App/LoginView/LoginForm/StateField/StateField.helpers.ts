import type FormikFields from "~/types/FormikFields";
import type TestusersFields from "~/types/TestusersFields";
import type RarelyUsedFields from "~/types/RarelyUsedFields";
import getTestusers from "~/api/getTestusers";

export const parseTestusers: (
    response: TestusersFields,
    values: FormikFields,
    ls_scope: string
) => Array<FormikFields> = (response, values, ls_scope) => {
    const { users, roles } = response;
    const rarelyUsedValues = JSON.parse(
        localStorage.getItem("rarelyUsedValues") ?? "{}"
    ) as RarelyUsedFields | Record<string, never>;
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
            "X-Shib-Profile-IAMUserID": (500 + number).toString(),
            "X-Shib-Profile-FirstName": "John",
            "X-Shib-Profile-LastName": `Doe${number}`,
            ...rarelyUsedValues,
            "X-Shib-Profile-ApplicationNames":
                ls_scope.slice(0, -8) ||
                rarelyUsedValues["X-Shib-Profile-ApplicationNames"] ||
                ""
        });
    }
    return testusers;
};

export const fetchData: (
    setTestusers: (testusers: Array<FormikFields>) => void,
    values: FormikFields,
    ls_scope: string
) => Promise<void> = async (setTestusers, values, ls_scope) => {
    const data = await getTestusers();
    if (data) {
        setTestusers(parseTestusers(data, values, ls_scope));
    }
};
