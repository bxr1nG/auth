import type FormikFields from "~/types/FormikFields";
import type TestusersFields from "~/types/TestusersFields";
import type ExtraField from "~/types/ExtraField";
import { objectToDisplayable } from "~/utils/parsePermissions";
import getSomething from "~/api/getSomething";

export const parseTestusers: (
    response: TestusersFields,
    emptyValues: FormikFields,
    ls_scope: string,
    extraFields: Array<ExtraField>
) => Array<FormikFields> = (response, emptyValues, ls_scope, extraFields) => {
    const { users, roles } = response;
    const values = JSON.parse(
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

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const scope = ls_scope.slice(0, -8);
        const index = +(key.match(/\d/g) ?? [0]).join("");

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
                ...emptyValues,
                "X-Shib-Profile-IAMUserID": (500 + index).toString(),
                "X-Shib-Profile-UserPrincipalName": key,
                "X-Shib-Authorization-Roles": users[key] as string,
                "X-Shib-Authorization-Permissions": permissions,
                ...values,
                ...extraFieldsValues
            })
        );
    }
    return testusers;
};

export const fetchData: (
    setTestusers: (testusers: Array<FormikFields>) => void,
    emptyValues: FormikFields,
    ls_scope: string,
    extraFields: Array<ExtraField>
) => Promise<void> = async (
    setTestusers,
    emptyValues,
    ls_scope,
    extraFields
) => {
    const data = await getSomething<TestusersFields | null>(
        "/auth/manage/testusers"
    );
    if (data) {
        setTestusers(parseTestusers(data, emptyValues, ls_scope, extraFields));
    }
};
