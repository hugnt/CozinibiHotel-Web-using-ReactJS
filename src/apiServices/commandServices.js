//api
import * as request from '~/utils/request'; 

export const getCommand = async() => {
    try {
        var res = await request.get('Custommer');
        res = res.filter(x => x.comment != null || x.comment !="")
        return res;
    } catch (error) {
        console.log(error);
    }
}