import axios from "axios";

import FormikFields from "~/types/FormikFields";

const logout = async (): Promise<FormikFields> => {
    const response = await axios.post("/auth/manage/logout");

    return response.data as FormikFields;
};

export default logout;
