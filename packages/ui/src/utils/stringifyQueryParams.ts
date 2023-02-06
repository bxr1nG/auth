const stringifyQueryParams = <T extends object>(params: T): string =>
    Object.keys(params)
        .map((param) => `${param}=${params[param as keyof T] as string}`)
        .join("&");

export default stringifyQueryParams;
