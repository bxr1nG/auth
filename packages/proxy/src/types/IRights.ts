type IRights = {
    "X-Shib-Profile-IAMUserID": string | undefined;
    "X-Shib-Profile-UserPrincipalName": string | undefined;
    "X-Shib-Authorization-Roles": string | undefined;
    "X-Shib-Authorization-Permissions": string | undefined;
    [key: string]: string | undefined;
};

export default IRights;
