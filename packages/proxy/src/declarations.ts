import "express-session";

import type Rights from "~/types/Rights";

declare module "express-session" {
    export interface SessionData {
        rights: Rights;
    }
}
