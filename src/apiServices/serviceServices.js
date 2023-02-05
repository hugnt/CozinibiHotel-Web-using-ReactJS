//api
import * as request from '~/utils/request'; 

export const getService = async() => {
    try {
        const res = await request.get('services');
        return res;
    } catch (error) {
        console.log(error);
    }
}