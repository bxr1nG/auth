import type FormikFields from "~/types/FormikFields";
import config from "~/config";

import { defaultValues } from "./LoginForm.constants";

export const getStored: () => Array<FormikFields> = () => {
    return localStorage.getItem("history")
        ? (JSON.parse(
              localStorage.getItem("history") as string
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

export const sendRequest: (values: FormikFields) => Promise<Response> = async (
    values
) => {
    return await fetch(`${config.proxy_url}/auth/manage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    });
};
