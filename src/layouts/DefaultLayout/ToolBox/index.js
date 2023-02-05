//hooks
import { useEffect, useState, memo} from 'react';
import { Cart } from '~/components';

//redux
import { connect } from 'react-redux';

//css
import './ToolBox.css'

function ToolBox(props) {
    let {foodPicked} = props;
    let [showBackToTop, setShowBackToTop] = useState(false);
    let [showCart, setShowCart] = useState(false);
    let [showLoading, setShowLoading] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY >= 1100);
        }
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        });
    }, []);

    useEffect(() =>{
        setShowLoading(true);

        const handler = setTimeout(()=>{
            setShowLoading(false);
        },3000);

        // cleanup function
        return ()=>clearTimeout(handler);
    },[foodPicked])

    return (
        <div className="tool-box">
            <div className={`menu-foods-box circle-wrap ${showLoading&&"loading"}`}> 
                <div className="circle" onClick={()=>setShowCart(!showCart)}>
                    <div className="mask full">
                        <div className="fill"></div>
                    </div>
                    <div className="mask half">
                        <div className="fill"></div>
                    </div>
                    <div className='inside-circle'><img src={require("~/assets/images/menu.png")} alt="message-img" className="img-fit" /></div>
                </div>
                {showCart&&<div className='menu-cart-wrapper'>
                    <Cart setShowCart={setShowCart}/>
                </div>}
            </div>
            <div className="message-box box-item" >
                <img src={require("~/assets/images/message.png")} alt="message-img" className="img-fit" />
            </div>
            <div className="call-box box-item" onClick={() => window.open('tel:0946928815', '_self')}>
                <img src={require("~/assets/images/calling.png")} alt="call-img" className="img-fit" />
            </div>
            {showBackToTop && (<div className="backToTop-btn box-item" onClick={() => window.scrollTo(0, 0)}>
                <img src={require("~/assets/images/backToTop.png")} alt="backToTop-img" className="img-fit" />
            </div>)}
        </div>
    );
}

const mapStateToProps = (state) => ({foodPicked:state.foodPicked});
export default memo(connect(mapStateToProps)(ToolBox));