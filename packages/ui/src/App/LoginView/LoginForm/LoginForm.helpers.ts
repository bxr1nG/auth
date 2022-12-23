import type FormikFields from "~/types/FormikFields";
import updateRights from "~/api/updateRights";
import config from "~/config";

import { defaultValues } from "./LoginForm.constants";

export const getStored: (ls_scope: string) => Array<FormikFields> = (
    ls_scope
) => {
    return localStorage.getItem(ls_scope)
        ? (JSON.parse(
              localStorage.getItem(config.ls_scope) as string
          ) as Array<FormikFields>)
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
        .slice(0, 10);
};

export const fetchData: (values: FormikFields) => Promise<void> = async (
    values
) => {
    alert(JSON.stringify(await updateRights(values), null, 2));
};
