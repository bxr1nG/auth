import type FormikFields from "~/types/FormikFields";
import config from "~/config";

import { defaultValues } from "./LoginForm.constants";

export const getStored: () => Array<FormikFields> = () => {
    return localStorage.getItem(config.ls_scope)
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

export const sendRequest: (values: FormikFields) => void = (values) => {
    void (async () => {
        const response = await fetch(`${config.proxy_url}/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        });
        if (response.ok) {
            alert(JSON.stringify(await response.json(), null, 2));
        } else {
            alert(`HTTP error: ${response.status}`);
        }
    })();
};
