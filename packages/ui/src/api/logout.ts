import FormikFields from "~/types/FormikFields";

const logout: () => Promise<FormikFields> = async () => {
    const response = await fetch("/auth/manage/logout", {
        method: "POST"
    });
    return (await response.json()) as FormikFields;
};

export default logout;
