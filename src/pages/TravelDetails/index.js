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
    let {tourDetails,tripSchedule,handleData, tour_travels} = props;
    let { id } = useParams();
    const [selectedTour, setSelectedTour] = useState();
    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await tourServices.getTourDetails(id);
            setSelectedTour(res);
        }
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [id])

    return (
        <Fragment>
            <SectionPart bgColor="bg-gold" classname="tv-title">
                {selectedTour&&<Title name={selectedTour.name} subTitle={selectedTour.address}
                    pos="center" fontSize="2rem" />}
            </SectionPart>
            <section className='tv-section-images'>
                {selectedTour&&selectedTour.tourGalleries.map((img, i) => {
                    if(i >= 3) return;
                    const imgSrc =  process.env.REACT_APP_IMAGE_URL + "tour_travel_2/" + img;
                    return (
                        <div key={i} className='tv-img-box'>
                            <img src={imgSrc} alt='tour-img' className='img-fit' />
                        </div>
                    );
                })}

            </section>
            <SectionPart bgColor="bg-white">
                <div className="trip_schedule_comp">
                    <Title name="trip chedule" type="haft-underline" />
                    {selectedTour&&<TripSchedule schedule={selectedTour.tourSchedules}/>}
                </div>
                <div className="travel-desc content-bottom d-flex">
                    <ul className="travel-desc-col">
                        <Title name="inclusions" type="haft-underline" />
                        {selectedTour&&selectedTour.tourInclusions.map((item, i) => {
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
                        {selectedTour&&selectedTour.tourExclusions.map((item, i) => {
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
                        {selectedTour&&selectedTour.tourPrices.map((item, i) => {
                            return (
                                <li key={i}>
                                    {Icon("point-right")}
                                    <span>{item.minPeople} to {item.maxPeople} people: {item.price}$ /person</span>
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
                        {tour_travels&&selectedTour&&tour_travels.filter(tours => tours.id!=selectedTour.id).map((otherTour,i)=>{
                            const imgSrc =  process.env.REACT_APP_IMAGE_URL + "tour_travel_2/" + otherTour.tourGalleries[0];
                            if(i >=4) return;
                            return(
                                <Item key={i} className="otherTour-item" imgSrc={imgSrc} mainTitle={otherTour.name} 
                                subTitle={otherTour.address} textPos="onMidle" color="#fff" fontSize="1.2rem"
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
