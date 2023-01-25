const getClients: () => Promise<Array<string> | null> = async () => {
    const response = await fetch("/auth/manage/clients");
    return (await response.json()) as Array<string> | null;
};

export default getClients;
