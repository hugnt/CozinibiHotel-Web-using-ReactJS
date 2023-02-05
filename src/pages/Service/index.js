//slides
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//redux
import { connect } from "react-redux";

//hooks
import {useState } from "react";


//components
import { FreeMode, Navigation, Thumbs } from "swiper";


import { SectionPart, Border, Item, ArticlePart } from '~/components';
//css
import './Service.css'






function Service(props) {
    let {services} = props;
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
                                <Item className={`sv-item ${activeClass}`} mainTitle={service.name} imgSrc={require(`src/assets/images/${service.imgSrc}`)} imgHeight="5rem"
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
                            <Border color="black" classname="sv-intro-item" bgNow= {require(`src/assets/images/${service.imgSrc2}`)}> 
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

const mapStateToProps = (state) => ({ 
    services:state.services,
});
export default connect(mapStateToProps)(Service);