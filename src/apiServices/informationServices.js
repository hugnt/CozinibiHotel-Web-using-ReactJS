//api
import * as request from '~/utils/request'; 

export const getInformation = async() => {
    try {
        var res = await request.get('Information');
        return res;
    } catch (error) {
        console.log(error);
    }
}