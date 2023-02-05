
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

//redux
import { connect } from "react-redux";
import {handleData } from '~/utils';

//hooks
import { Fragment, useState,useEffect } from "react";

//api
import * as bannerServices from '~/apiServices/bannerServices';
import * as tourServices from '~/apiServices/tourServices';

//icons & data
import { Icon} from "~/utils";

//css
import './banner.css'

//Move Left Right
import { handleMoveRight, handleMoveLeft} from '~/utils';

const errorBanner =  {
    id:"no-found",
    name: "no-found",
    slide: false,
    imgSrc:  "404-banner.gif",
}

function Banner(props) {
    let {loading,bannerName, id, banner, rooms, tour_travels, handleData} = props;
    const [selectedBanner, setSelectedBanner] = useState();

    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await bannerServices.getBanner();
            handleData("banner",res.data);
            setSelectedBanner(res.data.find(x => x.id === bannerName));

            const res3 = await tourServices.getTour();
            handleData("tour_travels",res3.data);
        }
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
    useEffect(()=>{
        setSelectedBanner(banner.find(x => x.id === bannerName));
        if(id){
            if(bannerName==="roomDetails"){
                setSelectedBanner(rooms.find(x => x.id === id));
            }
            else if(bannerName==="tourDetails"){
                setSelectedBanner(tour_travels.find(x => x.id === id));
            }
            else{
                setSelectedBanner(errorBanner);
            }    
        }
        if(!selectedBanner){
            setSelectedBanner(errorBanner);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[bannerName, id, rooms,tour_travels])
   
    if(selectedBanner&&(selectedBanner.id==="search-results"||selectedBanner.id==="bill")){
        return (
            <div style={{paddingTop:"10rem"}}>

            </div>
        );
    }
    // console.log(selectedBanner);
    return (
        <Fragment>
            {!loading&&selectedBanner&&selectedBanner.name==="home"&&<div className="banner swiper position-relative">
                <Swiper className="banner-slider" id="sl-01" pagination={true} modules={[Pagination]} loop={true} >
                    {
                        selectedBanner.imgSrc.map((img, i) => {
                            return (
                                <SwiperSlide key={i} className="banner-slide-img w-100 swiper-slide">
                                    <img src={require(`src/assets/images/${img}`)}
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
            {!loading&&selectedBanner&&selectedBanner.name!=="home"&&
                <div className="banner position-relative">
                    <div className="banner-image"><img src={require(`src/assets/images/${selectedBanner.imgSrc}`)} alt="" /></div>
                    <div className="banner-tilte position-absolute"><span>{selectedBanner.name}</span></div>
                </div>
            }
        </Fragment>
    );
}

const mapStateToProps = (state) => ({ 
    banner:state.banner,
    rooms:state.rooms,
    tour_travels:state.tour_travels
});
const mapDispatchToProps = { handleData }
export default connect(mapStateToProps, mapDispatchToProps)(Banner);
