//api
import * as request from '~/utils/request'; 


export const postContact = async(contact) => {
    try {
        var res = await request.post("Contact", contact);
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const postBooking = async(booking) => {
    try {
        var res = await request.post("Booking", booking);
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}