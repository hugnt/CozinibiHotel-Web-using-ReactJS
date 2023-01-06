
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

//icons & data
import { Icon,rooms, tour_travels } from "~/utils";

//css
import './banner.css'


//Move Left Right
import { handleMoveRight, handleMoveLeft} from '~/utils';
import { Fragment } from "react";


const banner = [
    {
        id:"home",
        name: "home",
        slide: true,
        imgSrc: [
            require("~/assets/images/home/banner1.jpeg"),
             require("~/assets/images/home/banner2.jpg"),
             require("~/assets/images/home/banner3.jpeg"),
             require("~/assets/images/home/banner4.jpeg"),
             require("~/assets/images/home/banner5.jpg"),
        ]
    }, 
    {
        id:"about-us",
        name: "about us",
        slide: false,
        imgSrc:  require("~/assets/images/about_us/banner.jpeg"),
    },
    {
        id:"accommodation",
        name: "accommodation",
        slide: false,
        imgSrc:  require("~/assets/images/accommodation/banner.jpeg"),
    },
    {
        id:"menu",
        name: "menu",
        slide: false,
        imgSrc:  require("~/assets/images/menu/banner.gif"),
    },
    {
        id:"tour-travel",
        name: "tour travel",
        slide: false,
        imgSrc: require("~/assets/images/tour_travel/banner.gif"),
    },
    {
        id:"service",
        name: "service",
        slide: false,
        imgSrc:  require("~/assets/images/service/banner.gif"),
    },
    {
        id:"news",
        name: "news",
        slide: false,
        imgSrc:  require("~/assets/images/news/banner.jpg"),
    },
    {
        id:"gallery",
        name: "gallery",
        slide: false,
        imgSrc:  require("~/assets/images/gallery/banner-gallery.jpg"),
    },
    {
        id:"contact",
        name: "contact",
        slide: false,
        imgSrc:  require("~/assets/images/contact/contact-banner.png"),
    },
    {
        id:"booking",
        name: "booking",
        slide: false,
        imgSrc:  require("~/assets/images/booking.jpeg"),
    },
    {
        id:"search-results",
        name: "search-results",
        slide: false,
        imgSrc:  "",
    },
    {
        id:"no-found",
        name: "no-found",
        slide: false,
        imgSrc:  require("~/assets/images/404-banner.gif"),
    },
];




function Banner(props) {
    let {bannerName, id} = props;
    
    var selectedBanner = banner.find(x => x.id === bannerName);
    if(id){
        if(bannerName==="roomDetails"){
            selectedBanner = rooms.find(x => x.id === id);
        }
        else if(bannerName==="tourDetails"){
            selectedBanner = tour_travels.find(x => x.id === id);
        }
        else{
            selectedBanner = banner.at(-1);
        }
        
    }
    if(selectedBanner.id==="search-results"){
        return (
            <div style={{paddingTop:"10rem"}}>

            </div>
        );
    }
    if(!selectedBanner){
        selectedBanner = banner.at(-1);
    }
    // console.log(selectedBanner);
    return (
        <Fragment>
            {selectedBanner.name==="home"&&<div className="banner swiper position-relative">
                <Swiper className="banner-slider" id="sl-01" pagination={true} modules={[Pagination]} loop={true} >
                    {
                        selectedBanner.imgSrc.map((img, i) => {
                            return (
                                <SwiperSlide key={i} className="banner-slide-img w-100 swiper-slide">
                                    <img src={img}
                                    alt="" className="w-100" />
                                </SwiperSlide>
                            );
                        })                    
                    }
                   
                </Swiper>
                <div className="banner-slide-move w-100 position-absolute">
                    <span id="left" onMouseUp={() => handleMoveLeft("banner-slider")}>
                        {Icon("arrow-left")}
                    </span>
                    <span id="right" onMouseUp={() => handleMoveRight("banner-slider")}>
                        {Icon("arrow-right")}
                    </span>
                </div>
            </div>}
            {(selectedBanner.name!=="home"&&selectedBanner)&&
                <div className="banner position-relative">
                    <div className="banner-image"><img src={selectedBanner.imgSrc} alt="" /></div>
                    <div className="banner-tilte position-absolute"><span>{selectedBanner.name}</span></div>
                </div>
            }
        </Fragment>
    );
}

export default Banner;