type IRights = {
    "X-Shib-Profile-UserPrincipalName": string | undefined;
    "X-Shib-Profile-BoxUserID": string | undefined;
    "X-Shib-Profile-IAMUserID": string | undefined;
    "X-Shib-Profile-FirstName": string | undefined;
    "X-Shib-Profile-LastName": string | undefined;
    "X-Shib-Profile-Email": string | undefined;
    "X-Shib-Profile-Affiliation": string | undefined;
    "X-Shib-Profile-ApplicationNames": string | undefined;
    "X-Shib-Profile-AffiliatedNHLTeam-ID": string | undefined;
    "X-Shib-Profile-AffiliatedNHLTeam-Abbrev": string | undefined;
    "X-Shib-Profile-AffiliatedNHLTeam-FullName": string | undefined;
    "X-Shib-Authorization-Roles": string | undefined;
    "X-Shib-Authorization-Permissions": string | undefined;
};

export default IRights;
