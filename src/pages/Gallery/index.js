//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper";

//css
import { SectionPart, Title } from '~/components';
import './Gallery.css'

//data
import { pictures } from '~/utils';
import { Fragment } from 'react';

function Gallery() {
    return (
        <Fragment>
            <SectionPart bgColor="bg-white" classname="">
                <Title name="About Hotel" type="underline" pos="center" />
            </SectionPart>
            <SectionPart classname="about-hotel-pics list-pics" >
            <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={5}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="pics-slide"
                >
                {
                    [...pictures.hotel].map((ht, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={ht} alt="img" className="w-100"/>
                            </SwiperSlide>
                        );
                    })
                }
                </Swiper>
            </SectionPart>
            <SectionPart bgColor="bg-white" classname="">
                <Title name="About Travel" type="underline" pos="center" />
            </SectionPart>
            <SectionPart classname="about-travel-pics list-pics" >
            <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={5}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="pics-slide"
                >
                {
                    [...pictures.travel].map((ht, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={ht} alt="img" className="w-100"/>
                            </SwiperSlide>
                        );
                    })
                }
                </Swiper>
                <div className='last-border'></div>
            </SectionPart>
        </Fragment>
    );
}

export default Gallery;