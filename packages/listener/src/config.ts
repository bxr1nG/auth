import process from "process";

const mode = process.env.NODE_ENV ?? "development";
const isDev = mode === "development";

const config = {
    port:
        process.env.LISTENER_APP_PORT && isDev
            ? +process.env.LISTENER_APP_PORT
            : 10000
};

export default config;
