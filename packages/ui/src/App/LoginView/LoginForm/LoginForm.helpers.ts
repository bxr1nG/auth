import type { OptionalObjectSchema } from "yup/lib/object";
import * as yup from "yup";

import type ExtraField from "~/types/ExtraField";
import type FormikFields from "~/types/FormikFields";
import login from "~/api/login";
import { objectToDisplayable } from "~/utils/parsePermissions";

export const getStored: (ls_scope: string) => Array<FormikFields> = (
    ls_scope
) => {
    return localStorage.getItem(ls_scope)
        ? (
              JSON.parse(
                  localStorage.getItem(ls_scope) as string
              ) as Array<FormikFields>
          ).map(objectToDisplayable)
        : ([] as Array<FormikFields>);
};

export const addValues: (
    values: FormikFields,
    history: Array<FormikFields>
) => Array<FormikFields> = (values, history) => {
    return [
        ...new Set([
            JSON.stringify(values),
            ...history.map((state) => JSON.stringify(state))
        ])
    ]
        .map((state) => JSON.parse(state) as FormikFields)
        .filter(
            (item) =>
                Object.keys(item).filter(
                    (key) => item[key as keyof FormikFields]
                ).length > 0
        )
        .slice(0, 10);
};

export const fetchData: (values: FormikFields) => Promise<void> = async (
    values
) => {
    await login(values);
};

export const storeRarelyUsedValues: (
    values: FormikFields,
    extraFields: Array<ExtraField>,
    scope: string
) => void = (values, extraFields, scope) => {
    const names = extraFields.map((field) => field.name);
    localStorage.setItem(
        `${scope}-rarelyUsedValues`,
        JSON.stringify(names.map((key) => values[key]))
    );
};

export const createEmptyValues: (
    extraFields: Array<ExtraField>
) => FormikFields = (extraFields) => {
    const obj: { [key: string]: string } = {};
    const names = extraFields.map((field) => field.name);
    names.forEach((key) => {
        obj[key] = "";
    });
    return {
        ...obj,
        "X-Shib-Profile-IAMUserID": "",
        "X-Shib-Profile-UserPrincipalName": "",
        "X-Shib-Authorization-Roles": "",
        "X-Shib-Authorization-Permissions": ""
    };
};

export const createValidationSchema: (
    extraFields: Array<ExtraField>
) => OptionalObjectSchema<{ [key: string]: yup.StringSchema }> = (
    extraFields
) => {
    const obj: { [key: string]: yup.StringSchema } = {};
    const names = extraFields.map((field) => field.name);
    names.forEach((key) => {
        obj[key] = yup.string();
    });
    return yup.object({
        ...obj,
        "X-Shib-Profile-IAMUserID": yup.string(),
        "X-Shib-Profile-UserPrincipalName": yup.string(),
        "X-Shib-Authorization-Roles": yup.string(),
        "X-Shib-Authorization-Permissions": yup
            .string()
            .matches(/^[^;]*$/, "Use 'new line' instead of semicolons")
    });
};
