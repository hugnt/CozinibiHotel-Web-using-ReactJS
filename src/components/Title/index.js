
//css
import './Title.css';

function Title(props) {
    let {name, type, color, classname, pos, fontSize, subTitle, textTransform} = props;
    const textStyle = {
        color:color,
        fontSize: fontSize,
        textTransform: textTransform
    }
    return ( 
        <div className={`head-title ${classname} ${pos}`}>
            <span className={type} style={textStyle} >{name}</span>
            <div className="sub-title" style={textStyle}>{subTitle}</div>
        </div>
     );
}

export default Title; 