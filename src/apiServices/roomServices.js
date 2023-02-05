//api
import * as request from '~/utils/request'; 

export const getRoom = async() => {
    try {
        const res = await request.get('rooms');
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const getRoomDetails = async() => {
    try {
        const res = await request.get('roomDetails');
        return res;
    } catch (error) {
        console.log(error);
    }
}