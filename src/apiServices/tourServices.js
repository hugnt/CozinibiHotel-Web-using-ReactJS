//api
import * as request from '~/utils/request'; 

export const getTour = async() => {
    try {
        var res = await request.get('TourTravel');
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const getTourDetails = async(id) => {
    try {
        var res = await request.get(`TourTravel/${id}`);
        if(res.isActive == true) return res;
        return null;
    } catch (error) {
        console.log(error);
    }
}

export const getToursByName = async(tourName) => {
    try {
        var res = await request.get(`TourTravel/Name/${tourName}`);
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}

