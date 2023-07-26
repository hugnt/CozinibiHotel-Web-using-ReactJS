//api
import * as request from '~/utils/request'; 

export const getArticles = async() => {
    try {
        var res = await request.get('Article');
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getArticleByPage = async(pageName) => {
    try {
        var res = await request.get(`Article/Page/${pageName}`);
        res = res.filter(e => e.isActive == true);
        return res;
    } catch (error) {
        console.log(error);
    }
}