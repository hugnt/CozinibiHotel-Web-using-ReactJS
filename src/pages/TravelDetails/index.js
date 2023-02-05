//getParam url
import { useParams } from "react-router-dom";

//hooks
import { Fragment,useEffect, useState } from "react";

//redux
import { connect } from "react-redux";
import {handleData } from '~/utils';

//api
import * as tourServices from '~/apiServices/tourServices';


//data
import { Icon } from '~/utils';

//css
import { SectionPart, Title,Item, TripSchedule } from '~/components';
import './TravelDetails.css'




function TravelDetails(props) {
    let {tourDetails,tripSchedule,handleData} = props;
    let { id } = useParams();
    const [selectedTour, setSelectedTour] = useState();
    const [selectedSchedule, setSelectedSchedule] = useState();
    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await tourServices.getTourDetails();
            handleData("tourDetails",res.data);
            setSelectedTour(res.data.find(item => item.id===id));

            const res2 = await tourServices.getTripSchedule();
            handleData("tripSchedule",res2.data);
            setSelectedSchedule(res2.data.find(item => item.id==="tour-01"));
        }
        if(tourDetails.length===0||tripSchedule.length===0){
            fetchApi();
        }
        else{
            setSelectedTour(tourDetails.find(item => item.id===id));
            setSelectedSchedule(tripSchedule.find(item => item.id==="tour-01"));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

    return (
        <Fragment>
            <SectionPart bgColor="bg-gold" classname="tv-title">
                {selectedTour&&<Title name={selectedTour.title} subTitle={selectedTour.subTitle}
                    pos="center" fontSize="2rem" />}
            </SectionPart>
            <section className='tv-section-images'>
                {selectedTour&&selectedTour.listImg.map((img, i) => {
                    return (
                        <div key={i} className='tv-img-box'>
                            <img src={require(`src/assets/images/${img}`)} alt='tour-img' className='img-fit' />
                        </div>
                    );
                })}

            </section>
            <SectionPart bgColor="bg-white">
                <div className="trip_schedule_comp">
                    <Title name="trip chedule" type="haft-underline" />
                    {selectedSchedule&&<TripSchedule schedule={selectedSchedule.timeline}/>}
                </div>
                <div className="travel-desc content-bottom d-flex">
                    <ul className="travel-desc-col">
                        <Title name="inclusions" type="haft-underline" />
                        {selectedTour&&selectedTour.inclusions.map((item, i) => {
                            return (
                                <li key={i}>
                                    {Icon("point-right")}
                                    <span>{item}</span>
                                </li>
                            );
                        })}

                    </ul>
                    <ul className="travel-desc-col">
                        <Title name="exclusions" type="haft-underline" />
                        {selectedTour&&selectedTour.exclusions.map((item, i) => {
                            return (
                                <li key={i}>
                                    {Icon("point-right")}
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="travel-desc-col">
                        <Title name="Price" type="haft-underline" />
                        {selectedTour&&selectedTour.price.map((item, i) => {
                            return (
                                <li key={i}>
                                    {Icon("point-right")}
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="content-other">
                    <div className="title d-flex">
                        <img src={require("~/assets/images/line-left.png")} alt="line" className="line-title"/>
                        <Title name="OTHER TOURS" fontSize="2.5rem"/>
                        <img src={require("~/assets/images/line-right.png")} alt="line" className="line-title"/>
                    </div>
                    <ul className="travel-list-img d-flex" >
                        {selectedTour&&tourDetails&&tourDetails.filter(tours => tours.id!==selectedTour.id).map((otherTour,i)=>{
                            return(
                                <Item key={i} className="otherTour-item" imgSrc={require(`src/assets/images/${otherTour.listImg[0]}`)} mainTitle={otherTour.name} 
                                subTitle={otherTour.subTitle} textPos="onMidle" color="#fff" fontSize="1.2rem"
                                 textTransform="uppercase" fontFamily='Font-Title' link={`/tour-travel/${otherTour.id}`}>
                                </Item>
                            );
                        })}
                    </ul>
                </div>
            </SectionPart>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({ 
    tour_travels:state.tour_travels,
    tourDetails:state.tourDetails,
    tripSchedule:state.tripSchedule,
});
const mapDispatchToProps = { handleData }
export default connect(mapStateToProps, mapDispatchToProps)(TravelDetails);
