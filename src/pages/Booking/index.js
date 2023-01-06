//css
import { FormBooking, SectionPart, Title } from '~/components';
import './Booking.css';

function Booking() {
    return ( 
        <SectionPart bgColor="bg-gold">
            <Title name="Booking infomation"/>
            <FormBooking type1 />
        </SectionPart>
     );
}

export default Booking;