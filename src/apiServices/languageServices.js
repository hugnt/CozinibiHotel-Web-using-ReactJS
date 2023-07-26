//api
import * as request from '~/utils/request'; 

export const getLanguage = async() => {
    try {
        const res = await request.get('Language');
        return res;
    } catch (error) {
        console.log(error);
    }
}