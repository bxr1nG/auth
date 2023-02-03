import type { SessionData, Session } from "express-session";

type RequestSession = Session & Partial<SessionData>;

export default RequestSession;
