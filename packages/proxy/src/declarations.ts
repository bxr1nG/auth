import "express-session";

import type IRights from "~/types/IRights";

declare module "express-session" {
    export interface SessionData {
        rights: IRights;
    }
}
