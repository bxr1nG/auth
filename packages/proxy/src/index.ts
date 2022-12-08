import { AppFactory } from "~/helpers";
import managementRouter from "~/api/management.routes";
import usageRouter from "~/api/usage.routes";
import config from "~/config";
import store from "~/store";

AppFactory(config.management_port, store, managementRouter);
AppFactory(config.usage_port, store, usageRouter);
