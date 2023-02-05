
//slides
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

//redux
import { connect } from "react-redux";

//Link
import { Link } from "react-router-dom";


//cps
import { ArticlePart, SectionPart, Item } from '~/components';

//css
import './Accommodation.css';

function Accommodation(props) { 
    let {rooms} = props;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <SectionPart bgColor="bg-white" classname="accomodation">
            <div className="intro">
                <div className="slide-show position-relative">
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
                        {rooms.map((room, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="current-slide d-flex">
                                        <Link to={`/accommodation/${room.id}`} className="current-img w-60">
                                            <img
                                                src={require(`src/assets/images/${room.imgSrc}`)}
                                                alt=""
                                            />
                                        </Link>
                                        <ArticlePart classname="acc-article" width="w-40"
                                         title={room.name} param={room.param} color="#" 
                                         subTitleBottom={room.type} link={`/accommodation/${room.id}`} ending="Read more"/>
                                    </div>
                                </SwiperSlide>);
                         })}

                    </Swiper>

                    <div className="slide-list d-flex">
                        <div className="wrapper d-flex w-90">
                            <Swiper
                                className="mySwiper"
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                breakpoints={{
                                    1316:{
                                        // width: 1316,
                                        slidesPerView: 4,
                                    },
                                    1054:{
                                        // width:1054,
                                        slidesPerView: 3
                                    },
                                    991:{
                                        // width: 991,
                                        slidesPerView: 2,
                                    },
                                    100:{
                                        // width:100,
                                        slidesPerView:1,
                                    }
                                    
                                }}
                                >

                                {rooms.map((room, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Item className="al-center acc-item" imgSrc={require(`src/assets/images/${room.imgSrc}`)} mainTitle={room.name} subTitle={room.type}
                                                textPos="right" fontSize="1.5rem" textTransform="uppercase" fontFamily='Font-Title'
                                                width="w-100" imgWidth="w-60" imgHeight="8rem" contentWidth="w-40" />
                                        </SwiperSlide>
                                    );
                                })}

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </SectionPart>


    );
}

const mapStateToProps = (state) => ({ 
    rooms:state.rooms,
});
export default connect(mapStateToProps)(Accommodation);