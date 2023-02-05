//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination ,Navigation} from "swiper";
import "swiper/css/navigation";
import { Fragment} from 'react';

//redux
import { connect } from 'react-redux';
import {handleData } from '~/utils';

//hook
import { useEffect } from "react";

//api
import * as menuServices from "~/apiServices/menuServices";
import * as  hightlightServices from "~/apiServices/hightlightServices";
import  * as  commandServices from "~/apiServices/commandServices";

//Move Left Right
import { handleMoveRight, handleMoveLeft } from '~/utils';

//data & icons
import {Icon} from '~/utils'

//Components
import { ArticlePart, SectionPart, Room, Title, Item, Border, Comment } from '~/components';


//css & js
import './home.css';

function Home(props) {
    let {rooms, foods,hightlights,commands,tour_travels, services, handleData} = props;

    
    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await menuServices.getMenu();
            handleData("foods",res.data);
          
            const res2 = await hightlightServices.getHightlight();
            handleData("hightlights",res2.data);

            const res3 = await commandServices.getCommand();
            handleData("commands",res3.data);
        
        }
        if(rooms.length===0||foods.length===0||commands.length===0){
            fetchApi();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    

    
    return (
        <div>
            <SectionPart sectionName={"home-intro"} flexContent={true} bgColor="bg-white">
                <div className="intro-para w-30">
                    <ArticlePart title="cozynibi hotel" subTitle="Welcome to"
                     classname="home-intro-param" link={"/about-us"} ending="Read more"/>
                </div>
                <div className="intro-type_room d-flex w-70">
                    {rooms&&rooms.map((room, i) => {
                        return <Room key={i} name={room.name} width="w-30" imgSrc={require(`src/assets/images/${room.imgSrc}`)} link={`/accommodation/${room.id}`}/>
                    })}
                </div>
            </SectionPart>

            <SectionPart sectionName={"tour_travel"} flexContent={false}>
                <Title name="tour travel" type="underline" color="#fff" pos="center" />
                <div className="row d-flex">
                    {tour_travels&&tour_travels.map((item, i) => {
                        return <Item key={i} className="cp-item" mainTitle={item.title} 
                            imgSrc={require(`src/assets/images/${item.imgSrc}`)} 
                            color="#fff" icon="corner" width="w-30" imgWidth="w-50" contentWidth="w-50" 
                            textTransform="capitalize" textPos="right" link={`/tour-travel/${item.id}`}/>
                    })}
                </div>
            </SectionPart>


            <SectionPart sectionName={"services"} flexContent={true} bgColor="bg-white">
                <div className="restaurant w-50 " >
                    <Title name="food restaurant" type="haft-underline" color="#000" pos="left" />
                    <Border color="gold">
                        <Swiper className="food-slider" id="sl-01" modules={[Pagination]} loop={true}>
                            {
                                foods&&foods.map((food, i) => {
                                    return (
                                        <SwiperSlide key={i} className="w-100 swiper-slide">
                                            <Item className="food-item" mainTitle={food.name} imgSrc={require(`src/assets/images/${food.imgSrc}`)} color="#fff" 
                                            bgTitle={true} textPos="onBottom" textTransform="capitalize" fontSize='1.5rem' 
                                            fontFamily='Font-Title' link="/menu"/>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                        <div className="slide-foods-move d-flex">
                            <span id="left" onMouseUp={() => handleMoveLeft("food-slider")}>
                                {Icon("arrow-left")}
                            </span>
                            <span id="right" onMouseUp={() => handleMoveRight("food-slider")}>
                                {Icon("arrow-right")}
                            </span>
                        </div>
                    </Border>

                </div>
                <div className="service w-50">
                    <Title name="services" type="haft-underline" color="#000" pos="left" />
                    <div className="sv-content">
                        {services&&services.map((service, i) => {
                            return (
                                <Border key={i} color="black" classname="w-48 sv-wrapper-item">
                                    <Item className="sv-item" mainTitle={service.name} imgSrc={require(`src/assets/images/${service.imgSrc}`)}
                                        color="#000" textPos="inBottom center" textTransform="uppercase" fontSize='1.5rem' 
                                        fontFamily='Font-Title' link="/service"/>
                                </Border>
                            );
                        })}


                    </div>
                </div>
            </SectionPart>

            <SectionPart sectionName={"hight_light"} flexContent={false}>
                <Title name="NEW HIGHLIGHTS" type="underline" color="#fff" pos="center" />
                <div className="content d-flex">
                    {
                        hightlights&&hightlights.map((item, i) => {
                            return (
                                <div className='w-20 item' key={i}>
                                    <Border classname="border-circle">
                                        <Item className=""  imgSrc={require(`src/assets/images/${item.imgSrc}`)} 
                                            color="#fff" />
                                    </Border>
                                    <Title name={item.name} color="#fff" pos="center" fontSize="1.2rem" />
                                </div>
                            );
                        })
                    }
                </div>
            </SectionPart>


            <SectionPart sectionName={"commands"} flexContent={false} bgColor="bg-white">
                <Title name="WHAT OTHER SAY?" color="#000" pos="center" />
                <Swiper className="comment-slider"  modules={[Navigation]} loop={true} 
                    spaceBetween={100} navigation={true} >
                    {
                        commands&&commands.map((cmt, i) => {
                            if(i%2!==0||i===commands.length-1){
                                return <Fragment key={i}></Fragment>
                            }
                            return (
                                <SwiperSlide key={i} className="w-100 swiper-slide d-flex">
                                    <Comment classname="w-47 cmt-item" author={commands[i].author} country={commands[i].country} ava={commands[i].ava} comment={commands[i].param}/>
                                    <Comment classname="w-47 cmt-item" author={commands[i+1].author} country={commands[i+1].country} ava={commands[i+1].ava} comment={commands[i+1].param}/>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
                
            </SectionPart>


        </div>
    );
}

const mapStateToProps = (state) => ({ 
    rooms: state.rooms, 
    tour_travels: state.tour_travels, 
    foods: state.foods, 
    services: state.services, 
    hightlights: state.hightlights, 
    commands: state.commands, 
});
const mapDispatchToProps = {handleData};
export default connect(mapStateToProps, mapDispatchToProps)(Home);