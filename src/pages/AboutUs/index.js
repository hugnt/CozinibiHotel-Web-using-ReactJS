//hooks
import { Fragment, useEffect, useState } from "react";

//redux
import { connect } from 'react-redux';
import { handleData } from '~/utils';

//api
import  * as  articleServices from "~/apiServices/articleServices";


//css
import { ArticlePart, SectionPart } from '~/components';
import './AboutUs.css'

const welcome = `Dear Guests,
I would like to extend to you a very warm welcome. On behalf of our Cozynibi team, we are delighted to have the opportunity to serve you and share the light and warmth of hospitality that Cozynibi was founded.
Ninh Binh is a city with a colourful past, a fast-paced present and a promising future. It is a fascinating city for every visitor. Ninh Binh is a hub for amusement parks and entertainment attractions as well as a business hub where some of the most innovative minds meet to host conventions and special events. In the middle of all this is our hotel, Cozynibi.
Please allow me to introduce our facilities. On level one, we are pleased to offer our lobby lounge, Mix Lounge, serving a wide variety of beverages and lunch after 11 a.m., and Mix Restaurant offering a delicious breakfast buffet in the morning and an exceptional dinner menu.
Our Health Club + Spa is located on the lower lobby level, and feature a 10,000-square foot gym, spin room, basketball court and saltwater pool. For your business needs, we offer a Courier Center on level one across from Guest Services. As a courtesy to our guests, the hotel provides complimentary high-speed Internet access in the Mix Lounge area.
May I also take the opportunity to introduce you to our Program that can be used at any Cozynibi property worldwide. For more information please feel free to talk to one of our associates at the front desk. Membership to the program is free.
In the meantime, please feel free to contact the front desk, duty manager or myself if there is anything we can do to make your stay more pleasurable.
We hope that you will have a memorable and productive stay with us.`


function AboutUs(props) {
    let {features, handleData} = props;

    const [paramAboutUs, setParamAboutUs] = useState();

    useEffect(()=>{
        const fetchApi = async() =>{

            const res4 = await articleServices.getArticleByPage("About-Us");
            setParamAboutUs(res4);
        }
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

    return (
        <div className='about_us'>
            {paramAboutUs&&<Fragment>
                <SectionPart bgColor="bg-gold">
                    <ArticlePart title={paramAboutUs[0].title} subTitle={paramAboutUs[0].subTitle} param={paramAboutUs[0].content} textAlign="center" ending="Thank you!"/>
                </SectionPart>
                <SectionPart classname={"comfortable-rooms"}>
                    <ArticlePart title={paramAboutUs[1].title} param={paramAboutUs[1].content} 
                    color="var(--gold)" width="w-30" classname="bg-trans au-article-wrapper" 
                    paramColor="#fff" textAlignParam="left" ending="Explore now!" link="/accommodation"/>
                </SectionPart>
                <SectionPart classname={"extensive-menu"}>
                    <ArticlePart title={paramAboutUs[2].title} param={paramAboutUs[2].content} 
                    color="var(--gold)" width="w-30" classname="bg-trans au-article-wrapper"
                     paramColor="#fff" textAlignParam="left" ending="Explore now!" link="/menu"/>
                </SectionPart>
                <SectionPart classname={"various-services"}>
                    <ArticlePart title={paramAboutUs[3].title} param={paramAboutUs[3].content} 
                    color="var(--gold)" width="w-30" classname="bg-trans au-article-wrapper"
                     paramColor="#fff" textAlignParam="left" ending="Explore now!" link="/service"/>
                    <div className='last-border'></div>
                </SectionPart>
            </Fragment>}
    </div>
    );
}

const mapStateToProps = (state) => ({ features: state.features});
const mapDispatchToProps = {handleData}
export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);