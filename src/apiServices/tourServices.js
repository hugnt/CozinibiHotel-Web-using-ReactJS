//api
import * as request from '~/utils/request'; 

export const getTour = async() => {
    try {
        const res = await request.get('tour_travels');
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const getTourDetails = async() => {
    try {
        const res = await request.get('tourDetails');
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getTripSchedule = async() => {
    try {
        const res = await request.get('tripSchedule');
        return res;
    } catch (error) {
        console.log(error);
    }
}