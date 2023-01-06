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

const features = [
    {
        name:"comfortable rooms",
        param:"A Comfort Room provides a supportive therapeutic environment where individuals can use self-help techniques to manage their behavior and emotional state in a safe environment. It is a designated space that is intentionally designed to help calm an individual when that person feels stressed, or becomes overwhelmed.",

    },
    {
        name:"extensive menu",
        param:`However, you'll need to get to grips with the extensive menu or spend your dive jabbing at buttons.
        The extensive menu has everything from jamon iberico croquetas to chargrilled octopus with new potatoes, capers, shallots and aioli.
        The extensive menu only features local produce - if the chefs can't find it within 20 miles they won't cook it.
        Bug hotels have several storeys, each floor offering a décor suited to its guests, and with an extensive menu catering to all tastes however strange.
        Staff would always serve her chicken consomme and lemon sole as asking her to choose from the extensive menu would confuse her.
        `,

    },
    {
        name:"various services",
        param:`Consumers of electronic communications services should be able to easily compare prices of various services offered on the market based on tariff information published in an easily accessible form.
        End-users and consumers of electronic communications services should be able to easily compare the prices of various services offered on the market based on information published in an easily accessible form.
        `,

    },

];

function AboutUs() {
    return (
        <div className='about_us'>
            <SectionPart bgColor="bg-gold">
                <ArticlePart title="cozynibi hotel" subTitle="Welcome to" param={welcome} textAlign="center" ending="Thank you!"/>
            </SectionPart>
            <SectionPart classname={"comfortable-rooms"}>
                <ArticlePart title={features[0].name} param={features[0].param} 
                color="var(--gold)" width="w-30" classname="bg-trans au-article-wrapper" 
                paramColor="#fff" textAlignParam="left" ending="Explore now!" link="/accommodation"/>
            </SectionPart>
            <SectionPart classname={"extensive-menu"}>
                <ArticlePart title={features[1].name} param={features[1].param} 
                color="var(--gold)" width="w-30" classname="bg-trans au-article-wrapper"
                 paramColor="#fff" textAlignParam="left" ending="Explore now!" link="/menu"/>
            </SectionPart>
            <SectionPart classname={"various-services"}>
                <ArticlePart title={features[2].name} param={features[2].param} 
                color="var(--gold)" width="w-30" classname="bg-trans au-article-wrapper"
                 paramColor="#fff" textAlignParam="left" ending="Explore now!" link="/service"/>
                <div className='last-border'></div>
            </SectionPart>
    </div>
    );
}

export default AboutUs;