const config = {
    proxy_url:
        process.env.PROXY_URL ?? process.env.NODE_ENV === "development"
            ? "http://localhost/auth/manage"
            : "/auth/manage"
};

export default config;
