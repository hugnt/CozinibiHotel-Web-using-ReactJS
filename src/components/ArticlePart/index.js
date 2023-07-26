
//Link Router
import { Link } from "react-router-dom";

//css
import './ArticlePart.css'
var sampleParam = `<p> Thing lesser replenish evening called void a sea blessed meat fourth
                    called moveth place behold night own night third in they’re abundant
                    and don’t you’re the upon fruit. Divided open divided appear also
                    saw may fill. whales seed creepeth. Open lessegether he also morning
                    land i saw don’t you’re the upon fruit. Divided open divided appear also
                    saw may fill. whales seed creepeth. Open lessegether he also morning
                    land i saw. </p>`

function ArticlePart(props) {
    var {title, param, subTitle,subTitleBottom, textAlign, color, width, ending,
         classname, paramColor, textAlignParam, fontTitle,limitLine, link} = props;
    var textStyle = {
        textAlign: textAlign,
        color:color,
        fontSize:fontTitle
    }
    var paramStyle = {
        color:paramColor,
        textAlign:textAlignParam,
    }
    var limitWorld = {
        overflow:"hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: limitLine,
                lineClamp: limitLine, 
        WebkitBoxOrient:" vertical",
    }
    if(limitLine){
        paramStyle = {...paramStyle,...limitWorld}
    }
    if(param){
        console.log(param)
        param = param.slice(0, 2) + ` style="color:${paramColor};text-align:${textAlignParam}"` + param.slice(2);
    }
    else{
        sampleParam = sampleParam.slice(0, 2) + ` style="color:${paramColor};text-align:${textAlignParam}"` + sampleParam.slice(2);

    }
   
    return ( 
        <div className={"article "+ width+" "+classname}>
            <div className="title" style={textStyle}>
                { 
                    subTitle&&<div className="sub-title" style={textStyle}>{subTitle}</div>
                }
                <span className="main-title" style={textStyle}>{title}</span>
                { 
                    subTitleBottom&&<div className="sub-title" style={textStyle}>{subTitleBottom}</div>
                }
            </div>
            <div className={"param"} dangerouslySetInnerHTML={{ __html: param?param:sampleParam }} />
            <div className="read-more" style={textStyle}>
                <Link to={link} style={paramStyle}>
                    {ending}
                </Link>
            </div>
        </div>
     );
}

export default ArticlePart;