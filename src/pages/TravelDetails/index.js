//getParam url
import { useParams } from "react-router-dom";

//data
import { getTourDetails, getTripSchedule, Icon,tourDetails } from '~/utils';

//css
import { Fragment } from 'react';
import { SectionPart, Title,Item, TripSchedule } from '~/components';
import './TravelDetails.css'




function TravelDetails() {
    let { id } = useParams();
    let selectedTour = getTourDetails(id);
    return (
        <Fragment>
            <SectionPart bgColor="bg-gold" classname="tv-title">
                <Title name={selectedTour.title} subTitle={selectedTour.subTitle}
                    pos="center" fontSize="2rem" />
            </SectionPart>
            <section className='tv-section-images'>
                {selectedTour.listImg.map((img, i) => {
                    return (
                        <div key={i} className='tv-img-box'>
                            <img src={img} alt='tour-img' className='img-fit' />
                        </div>
                    );
                })}

            </section>
            <SectionPart bgColor="bg-white">
                <div className="trip_schedule_comp">
                    <Title name="trip chedule" type="haft-underline" />
                    <TripSchedule schedule={getTripSchedule("tour-01").timeline}/>
                </div>
                <div className="travel-desc content-bottom d-flex">
                    <ul className="travel-desc-col">
                        <Title name="inclusions" type="haft-underline" />
                        {selectedTour.inclusions.map((item, i) => {
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
                        {selectedTour.exclusions.map((item, i) => {
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
                        {selectedTour.price.map((item, i) => {
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
                        {tourDetails.filter(tours => tours.id!==selectedTour.id).map((otherTour,i)=>{
                            return(
                                <Item key={i} className="otherTour-item" imgSrc={otherTour.listImg[0]} mainTitle={otherTour.name} 
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

export default TravelDetails; 