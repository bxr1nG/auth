import * as yup from "yup";

export const defaultValues = {
    "X-Shib-Profile-UserPrincipalName": "user1",
    "X-Shib-Profile-BoxUserID": 1234567890,
    "X-Shib-Profile-IAMUserID": 501,
    "X-Shib-Profile-FirstName": "John",
    "X-Shib-Profile-LastName": "Doe",
    "X-Shib-Profile-Email": "user1@example.com",
    "X-Shib-Profile-Affiliation": "Affiliation",
    "X-Shib-Profile-ApplicationNames": "ApplicationNames",
    "X-Shib-Profile-AffiliatedNHLTeam-ID": 15,
    "X-Shib-Profile-AffiliatedNHLTeam-Abbrev": "NYJ",
    "X-Shib-Profile-AffiliatedNHLTeam-FullName": "AffiliatedNHLTeamFullName;",
    "X-Shib-Authorization-Roles": "admin;user;",
    "X-Shib-Authorization-Permissions": "user:list;user:create,update;role:*"
};

export const emptyValues = {
    "X-Shib-Profile-UserPrincipalName": "",
    "X-Shib-Profile-BoxUserID": 0,
    "X-Shib-Profile-IAMUserID": 0,
    "X-Shib-Profile-FirstName": "",
    "X-Shib-Profile-LastName": "",
    "X-Shib-Profile-Email": "",
    "X-Shib-Profile-Affiliation": "",
    "X-Shib-Profile-ApplicationNames": "",
    "X-Shib-Profile-AffiliatedNHLTeam-ID": 0,
    "X-Shib-Profile-AffiliatedNHLTeam-Abbrev": "",
    "X-Shib-Profile-AffiliatedNHLTeam-FullName": "",
    "X-Shib-Authorization-Roles": "",
    "X-Shib-Authorization-Permissions": ""
};

export const validationSchema = yup.object({
    "X-Shib-Profile-UserPrincipalName": yup
        .string()
        .required("UserPrincipalName is required"),
    "X-Shib-Profile-BoxUserID": yup.number().required("BoxUserID is required"),
    "X-Shib-Profile-IAMUserID": yup.number().required("IAMUserID is required"),
    "X-Shib-Profile-FirstName": yup.string().required("FirstName is required"),
    "X-Shib-Profile-LastName": yup.string().required("LastName is required"),
    "X-Shib-Profile-Email": yup.string().required("Email is required"),
    "X-Shib-Profile-Affiliation": yup
        .string()
        .required("Affiliation is required"),
    "X-Shib-Profile-ApplicationNames": yup
        .string()
        .required("ApplicationNames is required"),
    "X-Shib-Profile-AffiliatedNHLTeam-ID": yup
        .number()
        .required("AffiliatedNHLTeam-ID is required"),
    "X-Shib-Profile-AffiliatedNHLTeam-Abbrev": yup
        .string()
        .required("AffiliatedNHLTeam-Abbrev is required"),
    "X-Shib-Profile-AffiliatedNHLTeam-FullName": yup
        .string()
        .required("AffiliatedNHLTeam-FullName is required"),
    "X-Shib-Authorization-Roles": yup.string().required("Roles is required"),
    "X-Shib-Authorization-Permissions": yup
        .string()
        .required("Permissions is required")
});
