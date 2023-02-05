import axios from "axios";

const request = axios.create({
    baseURL: 'https://63d7fd535c4274b136ffc3ea.mockapi.io/cozinibi-hotel/api/users/'
});

export const get = async(path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
}

export default request;