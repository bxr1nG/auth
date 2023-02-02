import { Router } from "express";

import CookiesCleanerMiddleware from "~/middlewares/cookiesCleaner.middleware";

import LoginAction from "./actions/login";
import LogoutAction from "./actions/logout";
import GetLogsAction from "./actions/getLogs";
import GetClientsAction from "./actions/getClients";
import GetRightsAction from "./actions/getRights";
import GetEnvironmentAction from "./actions/getEnvironment";
import GetTestusersAction from "./actions/getTestusers";

const router = Router();

router.post("/login", CookiesCleanerMiddleware, LoginAction);
router.post("/logout", CookiesCleanerMiddleware, LogoutAction);
router.get("/logs", GetLogsAction);
router.get("/clients", GetClientsAction);
router.get("/rights", GetRightsAction);
router.get("/environment", GetEnvironmentAction);
router.get("/testusers", GetTestusersAction);

export default router;
