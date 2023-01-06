//icon
import { Icon } from '~/utils';

//css
import './News.css'
import { ArticlePart, Border, SectionPart } from '~/components';

const news = [
    {
        name: "New modern devices and technologies",
        param: "",
        imgSrc: require("~/assets/images/news/news-item.jpg")
    },
    {
        name: "Furnitures quality",
        param: "",
        imgSrc: require("~/assets/images/accommodation-banner.png"),
    },
    {
        name: "Fresh environment",
        param: "",
        imgSrc: require("~/assets/images/news/news-item2.jpg"),
    },

]

function News() {
    return (
        <SectionPart bgColor="bg-white" >
            {news.map((item, i)=>{
                return (
                    <Border key={i} color="gold" classname="d-flex new-wrapper">
                        <ArticlePart title={item.name} fontTitle="2rem" width="w-50" 
                        classname="new-article" ending="Read more"/>
                        <div className='w-50 news-img'>
                            <img src={item.imgSrc} alt='img' className='w-100'/>
                        </div>
                    </Border>
                );
            })}
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

export default News;