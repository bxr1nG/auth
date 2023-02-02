import process from "process";

const mode = process.env.NODE_ENV ?? "development";

const config = {
    mode,
    ls_scope: "history",
    default_context: "/"
};

export default config;
