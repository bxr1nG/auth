const config = {
    proxy_url:
        process.env.UI_APP_PROXY_URL ?? process.env.NODE_ENV === "development"
            ? "http://localhost"
            : ""
};

export default config;
