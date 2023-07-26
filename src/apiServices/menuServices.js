//api
import * as request from '~/utils/request'; 

export const getMenu = async() => {
    try {
        var res = await request.get('Food');
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}