//css
import './TripSchedule.css'

function TripSchedule(props) {
    let { schedule } = props;
    return (
        <div className="trip_schedule">
            <table>
                <tbody>
                    {
                        schedule.map((part, i) => {
                            return (
                                <tr key={i}>
                                    <th>{part.startTime.slice(0,5)}</th>
                                    <td>{part.content}</td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </div>
    );
}

export default TripSchedule;