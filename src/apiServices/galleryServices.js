//api
import * as request from '~/utils/request'; 

export const getGallery= async() => {
    try {
        var res = await request.get('Gallery');
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getGalleryByCategory = async(cateName) => {
    try {
        var res = await request.get(`Gallery/Category/${cateName}`);
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}