import type { Request } from "express";

interface IManagementRequest extends Request {
    body: {
        login: string;
        roles: string;
    };
}

export default IManagementRequest;
