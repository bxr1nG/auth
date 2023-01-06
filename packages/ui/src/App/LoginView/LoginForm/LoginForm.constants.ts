import * as yup from "yup";

import { theme } from "~/theme";

export const defaultValues = {
    "X-Shib-Profile-UserPrincipalName": "user1",
    "X-Shib-Profile-BoxUserID": "1234567890",
    "X-Shib-Profile-IAMUserID": "501",
    "X-Shib-Profile-FirstName": "John",
    "X-Shib-Profile-LastName": "Doe",
    "X-Shib-Profile-Email": "user1@example.com",
    "X-Shib-Profile-Affiliation": "Affiliation",
    "X-Shib-Profile-ApplicationNames": "ApplicationNames",
    "X-Shib-Profile-AffiliatedNHLTeam-ID": "15",
    "X-Shib-Profile-AffiliatedNHLTeam-Abbrev": "NYJ",
    "X-Shib-Profile-AffiliatedNHLTeam-FullName": "AffiliatedNHLTeamFullName;",
    "X-Shib-Authorization-Roles": "admin;user;",
    "X-Shib-Authorization-Permissions": "user:list;user:create,update;role:*"
};

export const emptyValues = {
    "X-Shib-Profile-UserPrincipalName": "",
    "X-Shib-Profile-BoxUserID": "",
    "X-Shib-Profile-IAMUserID": "",
    "X-Shib-Profile-FirstName": "",
    "X-Shib-Profile-LastName": "",
    "X-Shib-Profile-Email": "",
    "X-Shib-Profile-Affiliation": "",
    "X-Shib-Profile-ApplicationNames": "",
    "X-Shib-Profile-AffiliatedNHLTeam-ID": "",
    "X-Shib-Profile-AffiliatedNHLTeam-Abbrev": "",
    "X-Shib-Profile-AffiliatedNHLTeam-FullName": "",
    "X-Shib-Authorization-Roles": "",
    "X-Shib-Authorization-Permissions": ""
};

export const validationSchema = yup.object({
    "X-Shib-Profile-UserPrincipalName": yup.string(),
    "X-Shib-Profile-BoxUserID": yup.number(),
    "X-Shib-Profile-IAMUserID": yup.number(),
    "X-Shib-Profile-FirstName": yup.string(),
    "X-Shib-Profile-LastName": yup.string(),
    "X-Shib-Profile-Email": yup.string(),
    "X-Shib-Profile-Affiliation": yup.string(),
    "X-Shib-Profile-ApplicationNames": yup.string(),
    "X-Shib-Profile-AffiliatedNHLTeam-ID": yup.number(),
    "X-Shib-Profile-AffiliatedNHLTeam-Abbrev": yup.string(),
    "X-Shib-Profile-AffiliatedNHLTeam-FullName": yup.string(),
    "X-Shib-Authorization-Roles": yup.string(),
    "X-Shib-Authorization-Permissions": yup
        .string()
        .matches(/^[^;]*$/, "Use 'new line' instead of semicolons")
});

export const sx = {
    accordion: {
        backgroundColor: "transparent",
        boxShadow: "none",
        "&::before": {
            display: "none"
        }
    },
    accordionSummary: {
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: 0
    },
    accordionDetails: {
        padding: 0,
        borderTop: `1px solid ${theme.palette.divider}`,
        paddingTop: "1.5rem"
    }
};
