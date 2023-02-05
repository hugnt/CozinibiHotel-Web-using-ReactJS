
//redux
import { connect } from "react-redux";
import {handleData } from '~/utils';

//hooks
import { useState,useEffect } from "react";

//api
import * as tourServices from '~/apiServices/tourServices';


//icon
import { Icon } from '~/utils';


//css 
import './TourTravel.css'
import { ArticlePart, SectionPart, Title, Item} from '~/components';

const paramIntro = `
Love your morning cup of joe even more by discovering what goes 
into a satisfying brew on a Boquete coffee tour. Stroll through the 
fields of a coffee farm on the slopes of Volcan Baru, hearing stories of 
farmers who’ve worked the land, growing premium Geisha coffee enriched by 
volcanic ash and lunar cycles. After plucking ripe, red berries with your own hands, 
you meet with professional roasters to create your own custom blend to take home before 
sipping an aromatic espresso with notes of mango on the open patio, admiring a panoramic
 view of the cloud-forest and reddish-brown crema lining your cup. Can your coffee taste any better? 
What’s Included:
Hotel pick-up and drop-off
Bottled water
Sample bag of whole beans Isn’t that much better? Doesn’t it make you want to book this tour right now?
Now, it’s your turn!
`


function TourTravel(props) {
    let {handleData, tour_travels} = props;

    const [tours, setTours] = useState();
    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await tourServices.getTour();
            handleData("tour_travels",res.data);
            setTours(res.data.slice(0, 4));
        }
        if(tour_travels.length===0){
            fetchApi();
        }
        else{
            setTours(tour_travels.slice(0, 4));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     
    return (
        <SectionPart bgColor="bg-white">
            <ArticlePart param={paramIntro} textAlign="center" title="You have a letter ❤"/>
            <div className="ourtour">
                <Title name="our tours" pos="center" type="haft-underline" />

                <div className="tours-list d-flex">
                    {tours&&tours.map((tour,i)=>{
                        return(
                            <Item key={i} className="tour-item" imgSrc={require(`src/assets/images/${tour.imgSrc}`)} mainTitle={tour.name} subTitle={tour.subTitle} 
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