import type { Request } from "express";
import IRights from "./IRights";

interface IManagementRequest extends Request {
    body: IRights;
}

export default IManagementRequest;
