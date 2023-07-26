//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper";

//redux
import { connect } from "react-redux";
import {handleData } from '~/utils';

//hooks
import { Fragment,useEffect, useState } from "react";

//api
import * as featureServices from '~/apiServices/featureServices';
import * as galleryServices from '~/apiServices/galleryServices';


//css
import { SectionPart, Title } from '~/components';
import './Gallery.css'


function Gallery(props) {
    let {pictures, handleData} = props;
    const [hotelGallery, setHotelGallery] = useState();
    const [tourGallery, setTourGallery] = useState();

    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await galleryServices.getGalleryByCategory("Accommodation");
            setHotelGallery(res);

            const res2 = await galleryServices.getGalleryByCategory("Tour Travel");
            setTourGallery(res2);
        }
        fetchApi();  
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
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
                    hotelGallery&&hotelGallery.map((ht, i) => {
                        const image =  process.env.REACT_APP_IMAGE_URL + "gallery/" + ht.image;
                        return (
                            <SwiperSlide key={i}>
                                <img src={image} alt="img" className="w-100"/>
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
                    tourGallery&&tourGallery.map((ht, i) => {
                        const image =  process.env.REACT_APP_IMAGE_URL + "gallery/" + ht.image;
                        return (
                            <SwiperSlide key={i}>
                                <img src={image} alt="img" className="w-100"/>
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
const mapStateToProps = (state) => ({ 
    pictures:state.pictures,
   
});
const mapDispatchToProps = { handleData }
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
