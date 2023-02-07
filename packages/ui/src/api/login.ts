import axios from "axios";

import type FormikFields from "~/types/FormikFields";

const login = async (values: FormikFields): Promise<FormikFields> => {
    const response = await axios.post("/auth/manage/login", values);

    return response.data as FormikFields;
};

export default login;
