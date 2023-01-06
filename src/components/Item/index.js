//Link
import { Link } from "react-router-dom";

//css
import './Item.css'


function Item(props) {
    let {
            className,imgSrc, mainTitle, subTitle, icon, textPos,
            textTransform, fontSize,fontFamily, color,link,
            width, imgWidth, contentWidth, bgTitle, imgHeight,
        } = props; 

    const textStyle = {
        fontSize: fontSize,
        color: color,
        textTransform: textTransform,
        fontFamily: fontFamily,
    }
    // console.log(textStyle);
    return ( 
        <Link to={link} className={`${className} ${width} ${textPos}`}>
            <div className={"item-image "+imgWidth} style={{height:imgHeight}}>
                <img src={imgSrc} alt="item-img" className="w-100"/>
            </div>
            <div className={"item-content "+contentWidth}>
                <div className={"item-title"}>
                    <span className={`main-title  ${bgTitle&&" bg-title"}`} style={textStyle}>
                        {mainTitle}
                    </span>
                    <div className={"sub-title"} style={{fontSize:"1.2rem", textTransform:"capitalize", color:color}}>
                        {subTitle}
                    </div>
                </div>
                <span className={"icon "+icon}>
                    {props.children}
                    {icon==="corner"&&<span>Details</span>}
                </span>
            </div>
            
        </Link>
     );
}

export default Item;