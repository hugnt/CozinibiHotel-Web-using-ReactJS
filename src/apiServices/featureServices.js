//api
import * as request from '~/utils/request'; 

export const getFeature = async() => {
    try {
        const res = await request.get('features');
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getNews = async() => {
    try {
        var res = await request.get('News');
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getPicture = async() => {
    try {
        const res = await request.get('pictures');
        return res;
    } catch (error) {
        console.log(error);
    }
}