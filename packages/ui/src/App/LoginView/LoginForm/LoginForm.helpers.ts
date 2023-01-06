import type FormikFields from "~/types/FormikFields";
import login from "~/api/login";
import config from "~/config";
import { objectToDisplayable } from "~/utils/parsePermissions";

import { defaultValues } from "./LoginForm.constants";

export const getStored: (ls_scope: string) => Array<FormikFields> = (
    ls_scope
) => {
    return localStorage.getItem(ls_scope)
        ? (
              JSON.parse(
                  localStorage.getItem(config.ls_scope) as string
              ) as Array<FormikFields>
          ).map(objectToDisplayable)
        : ([defaultValues] as Array<FormikFields>);
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

export function storeRarelyUsedValues(values: FormikFields): void {
    const rarelyUsedValues = {
        "X-Shib-Profile-BoxUserID": values["X-Shib-Profile-BoxUserID"],
        "X-Shib-Profile-Email": values["X-Shib-Profile-Email"],
        "X-Shib-Profile-Affiliation": values["X-Shib-Profile-Affiliation"],
        "X-Shib-Profile-ApplicationNames":
            values["X-Shib-Profile-ApplicationNames"],
        "X-Shib-Profile-AffiliatedNHLTeam-ID":
            values["X-Shib-Profile-AffiliatedNHLTeam-ID"],
        "X-Shib-Profile-AffiliatedNHLTeam-Abbrev":
            values["X-Shib-Profile-AffiliatedNHLTeam-Abbrev"],
        "X-Shib-Profile-AffiliatedNHLTeam-FullName":
            values["X-Shib-Profile-AffiliatedNHLTeam-FullName"]
    };
    localStorage.setItem("rarelyUsedValues", JSON.stringify(rarelyUsedValues));
}
