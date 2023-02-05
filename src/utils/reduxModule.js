//data


const initial = {
    activeMenu: window.location.pathname.split('/').at(1),
    resSearch:{
        keyword:"",
        results:[],
    },
    foodPicked:[
        
    ],
    languages:[],
    banner:[],
    menuItem:[],
    rooms:[],
    services:[],
    tour_travels:[],
    foods:[],
    commands:[],
    hightlights:[],
    features:[],
    roomDetails:[],
    tourDetails:[],
    tripSchedule:[],
    news:[],
    pictures:[],

}

export const reducer = (state = initial, action) => {
    switch (action.type){
        case "isActiveMenu":
            {// console.log(action.value);
            return{
                ...state,
                activeMenu: action.value
            }}
        case "handleSearchResult":
            {let tmpRes = {
                keyword:"",
                results:[],
            }
            tmpRes.keyword = action.value.keyword;
            tmpRes.results = action.value.results;
            return{
                ...state,
                resSearch:{...tmpRes}
            }}
        case "handleAddFoods":
            {let listFoods = [...state.foodPicked];
            let sameFood = listFoods.find(x => x.food.id===action.value.id);
            if(sameFood){
                sameFood.number+=1;
            }
            else{
                listFoods.push({
                    number:1,
                    food:action.value
                });
            }
            return{
                ...state,
                foodPicked:[...listFoods]
            }}
        case "handleRemoveFoods":
            {let listFoods = [...state.foodPicked];
            listFoods = listFoods.filter(x=>x.food.id!==action.value.id);
            return{
                ...state,
                foodPicked:[...listFoods]
            }}
        case "handleSubFoods":
            {let listFoods = [...state.foodPicked];
            let delFood = listFoods.find(x=>x.food.id===action.value.id);
            delFood.number-=1;
            if(delFood.number===0){
                listFoods = listFoods.filter(x=>x.food.id!==action.value.id);
            }
            return{
                ...state,
                foodPicked:[...listFoods]
            }}
        case "handleData":{
            // console.log("inmodule: ",action.name);
            let selectedData = Object.keys(state).find(x=>x===action.name);
            state[selectedData] = action.value;
            return {
                ...state
            }
        }
        default:
            return state;
    }
}

export const handleActiveMenu = name => {
    return{
        type: "isActiveMenu",
        value: name
    }
}

export const handleSearchResult = (keyword, results) => {
    return{
        type: "handleSearchResult",
        value: {keyword,results}
    }
}
export const handleAddFoods = (food) => {
    return{
        type: "handleAddFoods",
        value: food
    }
}
export const handleSubFoods = (food) => {
    return{
        type: "handleSubFoods",
        value: food
    }
}
export const handleRemoveFoods = (food) => {
    return{
        type: "handleRemoveFoods",
        value: food
    }
}


//data 
export const handleData = (name,data) => {
    return{
        type: "handleData",
        name: name,
        value: data,
    }
}


