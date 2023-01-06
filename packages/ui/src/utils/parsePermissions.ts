import type FormikFields from "~/types/FormikFields";

export const stringToDisplayable: (value: string) => string = (value) =>
    value
        .split(";")
        .filter((value) => !!value)
        .sort()
        .join("\n");

export const stringToUsable: (value: string) => string = (value) =>
    value
        .split("")
        .filter((value) => value !== ";")
        .join("")
        .split("\n")
        .filter((value) => !!value)
        .sort()
        .join(";");

export const objectToDisplayable: (value: FormikFields) => FormikFields = (
    value
) => ({
    ...value,
    "X-Shib-Authorization-Permissions": stringToDisplayable(
        value["X-Shib-Authorization-Permissions"]
    )
});

export const objectToUsable: (value: FormikFields) => FormikFields = (
    value
) => ({
    ...value,
    "X-Shib-Authorization-Permissions": stringToUsable(
        value["X-Shib-Authorization-Permissions"]
    )
});
