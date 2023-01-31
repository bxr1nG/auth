import type FormikFields from "~/types/FormikFields";
import type TestusersFields from "~/types/TestusersFields";
import type ExtraField from "~/types/ExtraField";
import getTestusers from "~/api/getTestusers";
import { objectToDisplayable } from "~/utils/parsePermissions";

export const parseTestusers: (
    response: TestusersFields,
    values: FormikFields,
    ls_scope: string,
    extraFields: Array<ExtraField>
) => Array<FormikFields> = (response, values, ls_scope, extraFields) => {
    const { users, roles } = response;
    const rarelyUsedValues = JSON.parse(
        localStorage.getItem(`${ls_scope}-rarelyUsedValues`) ?? "{}"
    ) as { [objKey: string]: string };
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

        // Variables can be used in config file (lsScope, number)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const lsScope = ls_scope.slice(0, -8);
        const number = +(key.match(/\d/g) ?? [0]).join("");

        const extraFieldsValues = extraFields
            .filter((field) => field.value)
            .reduce(
                (obj, item) =>
                    Object.assign(obj, {
                        [item.name]: eval(item.value as string) as string
                    }),
                {}
            );

        testusers.push(
            objectToDisplayable({
                ...values,
                "X-Shib-Profile-IAMUserID": (500 + number).toString(),
                "X-Shib-Profile-UserPrincipalName": key,
                "X-Shib-Authorization-Roles": users[key] as string,
                "X-Shib-Authorization-Permissions": permissions,
                ...rarelyUsedValues,
                ...extraFieldsValues
            })
        );
    }
    return testusers;
};

export const fetchData: (
    setTestusers: (testusers: Array<FormikFields>) => void,
    values: FormikFields,
    ls_scope: string,
    extraFields: Array<ExtraField>
) => Promise<void> = async (setTestusers, values, ls_scope, extraFields) => {
    const data = await getTestusers();
    if (data) {
        setTestusers(parseTestusers(data, values, ls_scope, extraFields));
    }
};
