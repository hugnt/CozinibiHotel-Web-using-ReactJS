//redux
import { connect } from "react-redux";
import {handleData } from '~/utils';

//hooks
import {useEffect } from "react";

//api
import * as featureServices from '~/apiServices/featureServices';


//icon
import { Icon } from '~/utils';

//css
import './News.css'
import { ArticlePart, Border, SectionPart } from '~/components';


function News(props) {
    let {news, handleData} = props;

    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await featureServices.getNews();
            handleData("news",res.data);
     
        }
        if(news.length===0){
            fetchApi();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
    return (
        <SectionPart bgColor="bg-white" >
            {news.map((item, i)=>{
                return (
                    <Border key={i} color="gold" classname="d-flex new-wrapper">
                        <ArticlePart title={item.name} fontTitle="2rem" width="w-50" 
                        classname="new-article" />
                        <div className='w-50 news-img'>
                            <img src={require(`src/assets/images/${item.imgSrc}`)} alt='img' className='w-100'/>
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
const mapStateToProps = (state) => ({ 
    news:state.news,
});
const mapDispatchToProps = { handleData }
export default connect(mapStateToProps, mapDispatchToProps)(News);
