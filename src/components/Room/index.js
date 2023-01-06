
//css
import './Room.css'

//Link
import { Link } from "react-router-dom";

function Room(props) {
    let {imgSrc, width, className, name, link} = props;
    return (
        <Link to={link} className={`${className} room ${width}`}>
            <img
                src={imgSrc}
                alt=""
                className="w-100"
            />
            <div className={name&&"desc"}>
                <span className="">{name}</span>
            </div>
        </Link>
    );
}

export default Room;