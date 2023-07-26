//api
import * as request from '~/utils/request'; 

export const getService = async() => {
    try {
        var res = await request.get('Service');
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}