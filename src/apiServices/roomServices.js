//api
import * as request from '~/utils/request'; 

export const getRoom = async() => {
    try {
        var res = await request.get('RoomCategory');
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const getRoomDetails = async(id) => {
    try {
        const res = await request.get(`RoomCategory/${id}`);
        if(res.isActive == true) return res;
        return null;
    } catch (error) {
        console.log(error);
    }
}


export const getRoomsByName= async(roomName) => {
    try {
        var res = await request.get(`RoomCategory/Name/${roomName}`);
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}