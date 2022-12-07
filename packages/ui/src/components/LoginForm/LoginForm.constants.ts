import * as yup from "yup";

export const initialValues = {
    login: "loginlogin",
    roles: "role1, role2, role3"
};

export const validationSchema = yup.object({
    login: yup.string().required("Login is required"),
    roles: yup.string().required("Roles are required")
});
