import FormikFields from "~/types/FormikFields";
import config from "~/config";

const updateRights: (values: FormikFields) => Promise<FormikFields> = async (
    values
) => {
    const response = await fetch(`${config.proxy_url}/auth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    });
    return (await response.json()) as FormikFields;
};

export default updateRights;
