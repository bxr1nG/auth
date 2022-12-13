type IRights = {
    "X-Shib-Profile-UserPrincipalName": string;
    "X-Shib-Profile-BoxUserID": number;
    "X-Shib-Profile-IAMUserID": number;
    "X-Shib-Profile-FirstName": string;
    "X-Shib-Profile-LastName": string;
    "X-Shib-Profile-Email": string;
    "X-Shib-Profile-Affiliation": string;
    "X-Shib-Profile-ApplicationNames": string;
    "X-Shib-Profile-AffiliatedNHLTeam-ID": number;
    "X-Shib-Profile-AffiliatedNHLTeam-Abbrev": string;
    "X-Shib-Profile-AffiliatedNHLTeam-FullName": string;
    "X-Shib-Authorization-Roles": string;
    "X-Shib-Authorization-Permissions": string;
};

export default IRights;
