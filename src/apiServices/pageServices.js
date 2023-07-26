//api
import * as request from '~/utils/request'; 

export const getPages = async() => {
    try {
        var res = await request.get('Page');
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}