import type LogsObject from "~/types/LogsObject";
import type Environment from "~/types/Environment";
import type TestusersFields from "~/types/TestusersFields";
import type FormikFields from "~/types/FormikFields";
import type Warnings from "~/types/Warnings";
import RequestBuilder from "~/utils/RequestBuilder";

const request = RequestBuilder("/auth/manage");

const api = {
    logs: {
        get: request.get<LogsObject>("/logs")
    },
    testusers: {
        get: request.get<TestusersFields | null>("/testusers")
    },
    environment: {
        get: request.get<Environment>("/environment")
    },
    clients: {
        get: request.get<Array<string> | null>("/clients")
    },
    warnings: {
        get: request.get<Warnings>("/warnings")
    },
    auth: {
        login: request.post<FormikFields, FormikFields>("/login"),
        logout: request.post<void, FormikFields>("/logout")
    }
};

export default api;
