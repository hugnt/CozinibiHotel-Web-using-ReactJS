//icon
import { Icon } from '~/utils';

//data
import { tour_travels } from '~/utils';

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

const tours = tour_travels.slice(0, 4);

function TourTravel() {
    return (
        <SectionPart bgColor="bg-white">
            <ArticlePart param={paramIntro} textAlign="center" title="You have a letter ❤"/>
            <div className="ourtour">
                <Title name="our tours" pos="center" type="haft-underline" />

                <div className="tours-list d-flex">
                    {tours.map((tour,i)=>{
                        return(
                            <Item key={i} className="tour-item" imgSrc={tour.imgSrc} mainTitle={tour.name} subTitle={tour.subTitle} 
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

export default TourTravel;