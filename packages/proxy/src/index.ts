import express, { json } from "express";

import managementRouter from "~/api/management.routes";
import usageRouter from "~/api/usage.routes";
import config from "~/config";
import ClientPicker from "~/helpers/ClientPicker";

const app = express();

app.use(json());
ClientPicker(app);
app.use("/auth/manage", managementRouter());
app.use("/proxy", usageRouter());

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
});
