export const parseUrl = (
    url: string
): {
    paths: Array<string>;
    params: string[][] | undefined;
} => {
    const paths = url
        .split("/")
        .map((path) => path.split("?")[0] || "")
        .filter((path) => path);
    const params = url
        .split("?")[1]
        ?.split("&")
        .filter((param) => param)
        .map((param) => param.split("="));
    return {
        paths,
        params
    };
};
