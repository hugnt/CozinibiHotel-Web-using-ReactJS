//api
import * as request from '~/utils/request'; 

export const getHightlight = async() => {
    try {
        const res = await request.get('hightlights');
        return res;
    } catch (error) {
        console.log(error);
    }
}