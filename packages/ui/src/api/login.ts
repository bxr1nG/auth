import type FormikFields from "~/types/FormikFields";

const login: (values: FormikFields) => Promise<FormikFields> = async (
    values
) => {
    const response = await fetch("/auth/manage/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    });
    return (await response.json()) as FormikFields;
};

export default login;
