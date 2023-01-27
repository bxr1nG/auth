type IConfig = {
    testusers: string | undefined;
    localStorage: string | undefined;
    proxyURL: string | undefined;
    defaultContext: string | undefined;
    identity: {
        scope: "global" | "session" | undefined;
        secret: string | undefined;
    };
    extraFields: string[] | undefined;
};

export default IConfig;
