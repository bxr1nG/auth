import type ExtraField from "~/types/ExtraField";

type Config = {
    testusersIni: string | undefined;
    testusersYaml: string | undefined;
    localStorage: string | undefined;
    proxyURL: string | undefined;
    defaultContext: string | undefined;
    scope: "global" | "session" | undefined;
    cache: boolean | undefined;
    extraFields: Array<ExtraField> | undefined;
    router: Record<string, string> | undefined;
};

export default Config;
