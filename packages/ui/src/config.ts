import * as process from "process";

const mode = process.env.NODE_ENV ?? "development";

const config = {
    mode,
    proxy_url:
        process.env.UI_APP_PROXY_URL ?? mode === "development"
            ? "http://localhost"
            : "",
    ls_scope: process.env.SCOPE ? `${process.env.SCOPE}-history` : "history"
};

export default config;
