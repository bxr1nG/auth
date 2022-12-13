import IStore from "~/types/IStore";

const store: IStore = {
    rights: {
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
        "X-Shib-Profile-AffiliatedNHLTeam-FullName":
            "AffiliatedNHLTeamFullName;",
        "X-Shib-Authorization-Roles": "admin;user;",
        "X-Shib-Authorization-Permissions":
            "user:list;user:create,update;role:*"
    },
    logs: []
};

export default store;
