//api
import * as request from '~/utils/request'; 

export const getMenuItem = async() => {
    try {
        var res = await request.get('Page');
        res = res.filter(e => e.isActive == true && e.isMenuActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}