import FormikFields from "~/types/FormikFields";
import config from "~/config";

const logout: () => Promise<FormikFields> = async () => {
    const response = await fetch(`${config.proxy_url}/auth/manage/logout`, {
        method: "POST"
    });
    return (await response.json()) as FormikFields;
};

export default logout;
