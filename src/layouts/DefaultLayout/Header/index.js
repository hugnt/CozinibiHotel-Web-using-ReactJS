
//Router DOm
import { Link } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { handleActiveMenu } from '~/utils';

//hooks
import { useState, useEffect } from 'react';

//data 
import { menuItem, languages, Icon } from '~/utils';

//css
import './header.css';
import { SearchBox } from '~/components';

const initActive = (window.innerWidth <=991)?true:false;
const initDisplay = [false, false, false];
function Header(props) {
    let { activeMenu, handleActiveMenu } = props;

    let [currLang, setCurrLang] = useState(languages[0]);
    let [isActiveLang, setIsActiveLang] = useState(initActive);
    let [isDisplayBlock, setIsDisplayBlock] = useState(initDisplay);

    useEffect(()=>{
        const handleCheckWidth = () =>{
            setIsActiveLang(window.innerWidth <=991);
            if(window.innerWidth >991){
                setIsDisplayBlock(initDisplay)
            }
        }
        window.addEventListener("resize",handleCheckWidth);

        return(()=>{
            window.removeEventListener("resize",handleCheckWidth);
        });
    },[])

    const handleDisplay = (i) =>{
        let newArr = Array(3).fill(false);
        newArr[i] = !isDisplayBlock[i];
        setIsDisplayBlock(newArr);
       
    }
    // console.log(isDisplayBlock);

    return (
        <header className="header">
            <div className="header-top scale-mid">
                <div className="container w-90 d-flex">
                    <div className="zone-logo w-20">
                        <div className="logo-img">
                            <img src={require("~/assets/images/layout-logo.png")}
                                alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="menu w-80 ">
                        <div className="menu-container d-flex ">
                            <div className="menu-top">
                                <SearchBox className={`  ${(window.innerWidth <= 800) && (isDisplayBlock[0] ? "search-active" : "search-un-active")}`}/>
                                <div className={`w-30 language position-absolute ${(window.innerWidth <=991)&&(isDisplayBlock[1]?"lang-active":"lang-un-active")}`} 
                                    onClick={(window.innerWidth >991)?(()=>setIsActiveLang(!isActiveLang)):undefined}>
                                    <div className="lang-active">
                                        {Icon("globe")}
                                        <span className="lang-current">{currLang.name}</span>
                                        {Icon("down")}
                                    </div>
                                    {isActiveLang && <ul className="lang-option">
                                        {
                                            languages.filter(langs => langs.id !== currLang.id).map(lang => {
                                                return (
                                                    <li key={lang.id} onClick={() => setCurrLang(lang)}>
                                                        <span className='op-item'>{lang.name}</span>
                                                    </li>
                                                );
                                            })
                                        }

                                    </ul>}
                                </div>
                                <div className="book-action">
                                    <Link to='/booking' className='booking-btn'>
                                        <span>Book a room</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="icons-menu" style={{ display: "flex" }}>
                                {
                                    ["glass","global","menu"].map((icon, i)=>{
                                        return(
                                            <span key={i} onClick={()=>handleDisplay(i)}>{Icon(icon)}</span>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <nav className={`navbar menu-main d-flex ${(window.innerWidth <=1370)&&(isDisplayBlock[2]?"active":"un-active")}`} >
                            {
                                menuItem.map((item, i) => {
                                    var activeClass = "";
                                    var id = item.path.slice(1);

                                    if (id === activeMenu) {
                                        // console.log("match",id);
                                        activeClass = "load_menuItem";
                                    }
                                    return (
                                        <div key={i} className={"menu-item " + activeClass} >
                                            <Link className="item" to={item.path} onClick={() => handleActiveMenu(id)}>{item.name}</Link>
                                        </div>
                                    );
                                })
                            }
                        </nav>
                    </div>
                </div>
            </div>
            {props.children}

        </header>

    );
}

const mapStateToProps = (state) => ({ activeMenu: state.activeMenu });
const mapDispatchToProps = { handleActiveMenu }
export default connect(mapStateToProps, mapDispatchToProps)(Header);