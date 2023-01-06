import { SectionPart, Border, Item, ArticlePart } from '~/components';
//css
import './Service.css'

//slides
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";



const services = [
    {
        name: "massage & sauna",
        icon: require("~/assets/images/service/ser-1.png"),
        imgSrc: require("~/assets/images/service/service-item1.jpg"),
    },
    {
        name: "wedding",
        icon: require("~/assets/images/service/ser-2.png"),
        imgSrc: require("~/assets/images/service/service-item2.jpg"),
    },
    {
        name: "MEETING & EVENTS",
        icon: require("~/assets/images/service/ser-3.png"),
        imgSrc: require("~/assets/images/service/service-item3.jpg"),
    },
    {
        name: "CHARLES BAR",
        icon: require("~/assets/images/service/ser-4.png"),
        imgSrc: require("~/assets/images/service/service-item4.jpg"),
    },
];

function Service() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [active, setActive] = useState(null);

    const handleActiveItem = (i) =>{
        setActive(i)
    }


    return (
        <SectionPart bgColor="bg-white" classname="service-page">
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                breakpoints={{
                    1279:{
                        slidesPerView:4,
                    },
                    900:{
                        slidesPerView:3,
                    },
                    700:{
                        slidesPerView:2,
                    },
                    100:{
                        slidesPerView:1,
                    },

                }}>
                {services.map((service, i) => {
                    var activeClass = "";
                    if(active===i){
                        activeClass = "sv-active";
                    }
                    return (
                        <SwiperSlide key={i} onClick={()=>handleActiveItem(i)}> 
                            <Border color="black" classname="w-100 sv-wrapper-item">
                                <Item className={`sv-item ${activeClass}`} mainTitle={service.name} imgSrc={service.icon} imgHeight="5rem"
                                    color="#000" textPos="inBottom" textTransform="uppercase" fontSize='1.5rem' fontFamily='Font-Title' />
                            </Border>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2">
                {services.map((service, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Border color="black" classname="sv-intro-item" bgNow= {service.imgSrc}> 
                                <ArticlePart title={service.name} param={service.param}
                                    color="var(--gold)" width="w-30" classname="bg-trans sv-article-wrapper" 
                                    paramColor="#fff" textAlignParam="left" limitLine="8"/>
                            </Border>
                        </SwiperSlide>);
                })}
            </Swiper>
        </SectionPart>
    );
}

export default Service;