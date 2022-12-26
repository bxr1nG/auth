import logout from "~/api/logout";

export const fetchData: () => Promise<void> = async () => {
    await logout();
};
