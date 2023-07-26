
//redux
import { connect } from "react-redux";
import {handleData } from '~/utils';

//hooks
import { useState,useEffect } from "react";

//api
import * as tourServices from '~/apiServices/tourServices';
import  * as  articleServices from "~/apiServices/articleServices";


//icon
import { Icon } from '~/utils';


//css 
import './TourTravel.css'
import { ArticlePart, SectionPart, Title, Item} from '~/components';

function TourTravel(props) {
    let {handleData, tour_travels} = props;

    const [tours, setTours] = useState();
    const [introTour, setIntroTour] = useState();
    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await tourServices.getTour();
            handleData("tour_travels",res);
            setTours(res);

            const res4 = await articleServices.getArticleByPage("Tour-Travel");
            setIntroTour(res4[0]);
        }
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     
    return (
        <SectionPart bgColor="bg-white">
            {introTour&&<ArticlePart param={introTour.content} textAlign="center" title={introTour.title} />}
            <div className="ourtour">
                <Title name="our tours" pos="center" type="haft-underline" />

                <div className="tours-list d-flex">
                    {tours&&tours.map((tour,i)=>{
                        const image =  process.env.REACT_APP_IMAGE_URL + "tour_travel_2/" + tour.tourGalleries[0];
                        return(
                            <Item key={i} className="tour-item" imgSrc={image} mainTitle={tour.name} subTitle={tour.address} 
                                textPos="onMidle" color="#fff" textTransform="uppercase" 
                                width="w-47" fontSize="2rem" fontFamily="Font-Title" link={`/tour-travel/${tour.id}`}>
                                {Icon("plus")}
                            </Item>
                        );
                    })}
                </div>
            </div>
            <div className="move-pages d-flex">
                    <div className="btn btn-1">1</div>
                    <div className="btn btn-2">2</div>
                    <div className="btn btn-3">3</div>
                    {Icon("arrow-right")}
                    {Icon("arrow-rights")}
                </div>
        </SectionPart>
    );
}

const mapStateToProps = (state) => ({ 
    tour_travels:state.tour_travels
});
const mapDispatchToProps = { handleData }
export default connect(mapStateToProps, mapDispatchToProps)(TourTravel);