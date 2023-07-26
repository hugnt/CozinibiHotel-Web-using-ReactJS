//api
import * as request from '~/utils/request'; 

export const getHightlight = async() => {
    try {
        var res = await request.get('NewsCategory');
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}