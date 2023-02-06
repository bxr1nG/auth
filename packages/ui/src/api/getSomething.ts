import axios from "axios";

const getSomething = async <T>(url: string): Promise<T> => {
    const response = await axios.get(url);
    return response.data as T;
};

export default getSomething;
