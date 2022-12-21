import * as process from "process";

const config = {
    proxy_url:
        process.env.UI_APP_PROXY_URL ?? process.env.NODE_ENV === "development"
            ? "http://localhost"
            : "",
    mode: process.env.NODE_ENV ?? "development",
    ls_scope: process.env.SCOPE ? `${process.env.SCOPE}-history` : "history"
};

export default config;
