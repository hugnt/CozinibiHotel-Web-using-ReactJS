//icon

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faLocationDot, faEnvelope,faPhone, faPrint,faHandPointRight,faCartPlus,
        faCaretRight,faCirclePlus,faAnglesRight,faCheck,faAngleLeft,faAngleRight,faHeart,
        faCaretDown,faSearch,faMagnifyingGlass,faBars} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

import {}  from "@fortawesome/free-regular-svg-icons";
library.add(faGlobe, faLocationDot, faPhone, faPrint, faHeart,faCartPlus,
    faEnvelope, faFacebook,faTwitter, faYoutube, faInstagram,
    faCaretRight,faCirclePlus, faAnglesRight,faCaretDown,faHandPointRight,
    faSearch,faMagnifyingGlass,faBars,faCheck,faAngleLeft,faAngleRight);

export const icons = [
    {
        name:"address",
        icon: <FontAwesomeIcon icon="fa-solid fa-location-dot" className="fa-solid fa-location-dot icon"/>,
    },
    {
        name:"phone",
        icon: <FontAwesomeIcon icon="fa-solid fa-phone" className="fa-solid  fa-phone icon"/>,
    },
    {
        name:"print",
        icon: <FontAwesomeIcon icon="fa-solid fa-print" className="fa-solid fa-print icon"/>,
    },
    {
        name:"mail",
        icon: <FontAwesomeIcon icon="fa-solid fa-envelope" className="fa-solid fa-envelope icon"/>,
    },
    {
        name:"globe",
        icon: <FontAwesomeIcon icon="fa-solid fa-globe" className="fa-solid fa-globe icon" />,
    },
    {
        name:"global",
        icon: <FontAwesomeIcon icon="fa-solid fa-globe" className="fa-solid fa-globe icon" id="global-btn"/>,
    },
    {
        name:"arrow-left",
        icon: <FontAwesomeIcon icon="fa-solid fa-angle-left" className="left icon-fa icon"/>,
    },
    {
        name:"arrow-right",
        icon: <FontAwesomeIcon icon="fa-solid fa-angle-right" className="right icon-fa btn btn-next icon"/>,
    },
    {
        name:"arrow-rights",
        icon:    <FontAwesomeIcon icon="fa-solid fa-angles-right" className="rights icon-fa btn btn-next2"/>,
    },
    {
        name:"plus",
        icon: <FontAwesomeIcon icon="fa-solid fa-circle-plus" className="add-action fa-solid fa-circle-plus" />,
    },
    {
        name:"search",
        icon: <FontAwesomeIcon icon="fa fa-search" className="search-icon"/>,
    },
    {
        name:"down",
        icon: <FontAwesomeIcon icon="fa-solid fa-caret-down" className="icon fa-solid fa-caret-down"/>,
    },
    {
        name:"glass",
        icon: <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="fa-solid fa-magnifying-glass icon" id="search-btn2"/>,
    },
    {
        name:"caret",
        icon: <FontAwesomeIcon icon="fa-solid fa-caret-right" className="fa-solid fa-caret-right icon"/>,
    },
    {
        name:"menu",
        icon: <FontAwesomeIcon icon="fa-bars" className="fas fa-bars icon" id="menu-btn"/> ,
    },
    {
        name:"facebook",
        icon: <FontAwesomeIcon icon="fa-brands fa-facebook" className="fa-brands fa-facebook icon"/>,
    },
    {
        name:"twitter",
        icon: <FontAwesomeIcon icon="fa-brands fa-twitter" className="fa-brands fa-twitter icon"/>,
    },
    {
        name:"youtube",
        icon: <FontAwesomeIcon icon="fa-brands fa-youtube" className="fa-brands fa-youtube icon"/>,
    },
    {
        name:"instagram",
        icon: <FontAwesomeIcon icon="fa-brands fa-instagram" className="fa-brands fa-instagram icon"/>,
    },
    {
        name:"check",
        icon: <FontAwesomeIcon icon="fa-solid fa-check" className="fa-solid fa-check"/>,
    },
    {
        name:"point-right",
        icon:<FontAwesomeIcon icon="fa-solid fa-hand-point-right" className="icon fa-hand-point-right"/>,
    },
    {
        name:"heart",
        icon:<FontAwesomeIcon icon="fa-regular fa-heart" className='heart icon'/>,
    },
    {
        name:"heart-fill",
        icon:<FontAwesomeIcon icon="fa-solid fa-heart"  className='heart icon'/>
    },
    {
        name:"cart",
        icon:<FontAwesomeIcon icon="fa-solid fa-cart-plus" className='cart icon'/>
    },

];

export function Icon(name){
    var Comp = icons.find(item => item.name===name).icon;
    return Comp
}

