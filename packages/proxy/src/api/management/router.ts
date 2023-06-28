import { Router } from "express";

import CookiesCleanerMiddleware from "~/middlewares/cookiesCleaner.middleware";
import CacheRemoverMiddleware from "~/middlewares/cacheRemover.middleware";
import ReloadConfig from "~/middlewares/reloadConfig.middleware";

import LoginAction from "./actions/login";
import LogoutAction from "./actions/logout";
import GetLogsAction from "./actions/getLogs";
import GetClientsAction from "./actions/getClients";
import GetRightsAction from "./actions/getRights";
import GetEnvironmentAction from "./actions/getEnvironment";
import GetTestusersAction from "./actions/getTestusers";
import GetWarningsAction from "./actions/getWarnings";

const router = Router();

router.use(ReloadConfig);

router.post("/login", CookiesCleanerMiddleware, LoginAction);
router.post("/logout", CookiesCleanerMiddleware, LogoutAction);
router.get("/logs", GetLogsAction);
router.get("/clients", GetClientsAction);
router.get("/rights", GetRightsAction);
router.get("/environment", CacheRemoverMiddleware, GetEnvironmentAction);
router.get("/testusers", CacheRemoverMiddleware, GetTestusersAction);
router.get("/warnings", GetWarningsAction);

export default router;
