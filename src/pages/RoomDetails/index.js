
//slides
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

//getParam url
import { useParams } from "react-router-dom";

//redux
import { connect } from "react-redux";
import {handleData } from '~/utils';

//hooks
import { useState,useEffect } from "react";

//api
import * as roomServices from '~/apiServices/roomServices';
//css
import { Border, FormBooking, Item, SectionPart, Title } from '~/components';
import './RoomDetails.css'


//icons & data
import { Icon } from "~/utils";

const itemInfors = [
    {
        icon: require("~/assets/images/accommodation_2/acp-1.jpg"),
        title: "room",
    },
    {
        icon: require("~/assets/images/accommodation_2/acp-2.jpg"),
        title: "hight",
    },
    {
        icon: require("~/assets/images/accommodation_2/acp-3.jpg"),
        title: "bed size",
    },
    {
        icon: require("~/assets/images/accommodation_2/acp-4.jpg"),
        title: "room rates",
    },
];

function RoomDetails(props) {
    let {handleData, roomDetails, rooms} = props;
    let {id} = useParams();
    const [selectedRoom, setSelectedRoom] = useState();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await roomServices.getRoomDetails(id);
            setSelectedRoom(res);
        }
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [id])

   
    return (
        <SectionPart bgColor="bg-white" classname="accommodation_2">
            <div className="content d-flex w-100">
                <div className="content-main w-65">
                {selectedRoom&&<Title name={selectedRoom.name} type="haft-underline" />}
                    <div className="box-pic" >
                        <div className="box-pic-main position-relative">
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
                                className="mySwiper2 slide-show">
                                {selectedRoom&&selectedRoom.images.map((image, i) => {
                                    const imgSrc =  process.env.REACT_APP_IMAGE_URL + "accommodation_2/" + image;
                                    return (
                                        <SwiperSlide key={i}>
                                            <img src={imgSrc} alt="img" />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            <div className="slide-container">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={5}
                                    slidesPerView={3}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper list-slides">
                                    {selectedRoom&&selectedRoom.images.map((image, i) => {
                                        const imgSrc =  process.env.REACT_APP_IMAGE_URL + "accommodation_2/" + image;
                                        return (
                                            <SwiperSlide key={i}>
                                                <img src={imgSrc} alt="" />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className="box-pic-desc d-flex">
                            {selectedRoom&&itemInfors.map((item, i) => {
                                var param = "";
                                if(i == 0) param = selectedRoom.area;
                                else if(i == 1) param = selectedRoom.hight;
                                else if(i == 2) param = selectedRoom.bedSize;
                                else if(i == 3) param = selectedRoom.roomRate;
                                param = param == null? "0":param;
                                var title = item.title + ": "+param;
                                // console.log(title);
                                return (
                                    <Item key={i} imgSrc={item.icon} mainTitle={title}
                                        textTransform="uppercase" textPos="inBottom" />
                                );
                            })}
                        </div>
                    </div>
                    <div className="box-desc" style={{ lineHeight: "2rem" }}>
                        <Title name="Decription" fontSize="2rem" />
                        <p style={{ fontSize: "1.2rem" }}>{selectedRoom&&selectedRoom.description}</p>
                    </div>
                    <div className="box-equipments">
                        <span className="title">{selectedRoom&&selectedRoom.name} equipments</span>
                        <div className="list-equips">
                            {selectedRoom&&selectedRoom.equipments.map((item, i) => {
                                return (
                                    <div key={i} className="equip-item d-flex">
                                        <span className="check-icon">{Icon("check")}</span>
                                        <span style={{ fontSize: "1.2rem" }}>{item}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="content-relevent w-35">
                    <Title name="Booking infomation" fontSize="2rem" type="haft-underline" />
                    <FormBooking type2/>
                    <div className="other_rooms">
                        <Title name="OTHER ROOMS" fontSize="2rem" />
                        <div className="list-rooms">
                            {selectedRoom&&rooms&&rooms.filter(r => r.id !== selectedRoom.id).map((room, i) => {
                                const imgSrc =  process.env.REACT_APP_IMAGE_URL + "accommodation_2/" + room.images[0];
                                return (
                                    <Border key={i} color="gold" classname="other-room-item">
                                        <Item className="al-center " imgSrc={imgSrc} mainTitle={room.name}
                                            textPos="right" fontSize="1.5rem" textTransform="uppercase" fontFamily='Font-Title'
                                            width="w-100" imgWidth="w-50" imgHeight="10rem" contentWidth="w-40" link={`/accommodation/${room.id}`} />
                                    </Border>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </SectionPart>
    );
}
const mapStateToProps = (state) => ({ 
    roomDetails:state.roomDetails,
    rooms: state.rooms
});
const mapDispatchToProps = { handleData }
export default connect(mapStateToProps, mapDispatchToProps)(RoomDetails);