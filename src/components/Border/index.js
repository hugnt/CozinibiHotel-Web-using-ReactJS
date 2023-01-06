//css
import './Border.css'

function Border(props) {
    let {color, reverse, classname, bgNow} = props;
    return (
        <div className={`border-item ${color} ${reverse} ${classname}`}>
            {bgNow&&<img src={bgNow} alt='' className='w-100 bgNow' />}
            <div className="border-top-bt"></div>
            {props.children}
        </div>
 
    );
}

export default Border;