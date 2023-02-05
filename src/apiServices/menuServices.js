//api
import * as request from '~/utils/request'; 

export const getMenu = async() => {
    try {
        const res = await request.get('foods');
        return res;
    } catch (error) {
        console.log(error);
    }
}