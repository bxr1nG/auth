import AppFactory from "~/helpers/AppFactory";
import managementRouter from "~/api/management.routes";
import usageRouter from "~/api/usage.routes";
import config from "~/config";

AppFactory(config.management_port, managementRouter);
AppFactory(config.usage_port, usageRouter);
