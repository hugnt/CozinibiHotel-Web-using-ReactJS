//api
import * as request from '~/utils/request'; 

export const getBanner = async() => {
    try {
        const res = await request.get('banner');
        return res;
    } catch (error) {
        console.log(error);
    }
}