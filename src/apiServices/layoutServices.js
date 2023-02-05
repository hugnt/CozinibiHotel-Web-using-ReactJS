//api
import * as request from '~/utils/request'; 

export const getMenuItem = async() => {
    try {
        const res = await request.get('menuItem');
        return res;
    } catch (error) {
        console.log(error);
    }
}