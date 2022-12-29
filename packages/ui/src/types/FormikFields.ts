type FormikFields = {
    "X-Shib-Profile-UserPrincipalName": string;
    "X-Shib-Profile-BoxUserID": string | number;
    "X-Shib-Profile-IAMUserID": string | number;
    "X-Shib-Profile-FirstName": string;
    "X-Shib-Profile-LastName": string;
    "X-Shib-Profile-Email": string;
    "X-Shib-Profile-Affiliation": string;
    "X-Shib-Profile-ApplicationNames": string;
    "X-Shib-Profile-AffiliatedNHLTeam-ID": string | number;
    "X-Shib-Profile-AffiliatedNHLTeam-Abbrev": string;
    "X-Shib-Profile-AffiliatedNHLTeam-FullName": string;
    "X-Shib-Authorization-Roles": string;
    "X-Shib-Authorization-Permissions": string;
};

export default FormikFields;
