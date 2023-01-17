import * as process from "process";

const mode = process.env.NODE_ENV ?? "development";

const config = {
    mode,
    proxy_url: mode === "development" ? "http://localhost" : "",
    ls_scope: "history",
    default_context: "/"
};

export default config;
