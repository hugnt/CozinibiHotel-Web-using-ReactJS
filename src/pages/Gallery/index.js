//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper";

//redux
import { connect } from "react-redux";
import {handleData } from '~/utils';

//hooks
import { Fragment,useEffect } from "react";

//api
import * as featureServices from '~/apiServices/featureServices';

//css
import { SectionPart, Title } from '~/components';
import './Gallery.css'


function Gallery(props) {
    let {pictures, handleData} = props;

    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await featureServices.getPicture();
            handleData("pictures",res.data);
        }
        if(pictures.length===0){
            fetchApi();
        }
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
                    pictures.length!==0&&pictures.find(x => x.id === 'hotel').imgSrc.map((ht, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={require(`src/assets/images/${ht}`)} alt="img" className="w-100"/>
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
                    pictures.length!==0&&pictures.find(x => x.id === 'travel').imgSrc.map((ht, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={require(`src/assets/images/${ht}`)} alt="img" className="w-100"/>
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
