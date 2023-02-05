//api
import * as request from '~/utils/request'; 

export const getCommand = async() => {
    try {
        const res = await request.get('commands');
        return res;
    } catch (error) {
        console.log(error);
    }
}