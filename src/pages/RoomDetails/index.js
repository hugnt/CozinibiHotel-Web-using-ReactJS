
//slides
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

//getParam url
import { useParams } from "react-router-dom";

//css
import { Border, FormBooking, Item, SectionPart, Title } from '~/components';
import './RoomDetails.css'


//icons & data
import { Icon, roomDetails, getRoomDetails } from "~/utils";

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

function RoomDetails() {
    let {id} = useParams();
    let selectedRoom = getRoomDetails(id);
    let specifics= [...Object.values(selectedRoom.specifications)]
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <SectionPart bgColor="bg-white" classname="accommodation_2">
            <div className="content d-flex w-100">
                <div className="content-main w-65">
                    <Title name={selectedRoom.name} type="haft-underline" />
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
                                {selectedRoom.listImg.map((image, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <img src={image} alt="img" />
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
                                    {selectedRoom.listImg.map((image, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <img src={image} alt="" />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className="box-pic-desc d-flex">
                            {itemInfors.map((item, i) => {
                                var title = item.title + ": "+specifics[i];
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
                        <p style={{ fontSize: "1.2rem" }}>{selectedRoom.desc}</p>
                    </div>
                    <div className="box-equipments">
                        <span className="title">{selectedRoom.name} equipments</span>
                        <div className="list-equips">
                            {selectedRoom.equipments.map((item, i) => {
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
                            {roomDetails.filter(rooms => rooms.name !== selectedRoom.name).map((room, i) => {
                                return (
                                    <Border key={i} color="gold" classname="other-room-item">
                                        <Item className="al-center " imgSrc={room.listImg[0]} mainTitle={room.name}
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

export default RoomDetails;