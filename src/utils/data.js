import { icons } from "./icons";

//language
const languages = [
    {
        id: "lang-02",
        name: "English"
    },
    {
        id: "lang-01",
        name: "Vietnamese"
    },  
]
//menuItem
const menuItem = [
    {
        name: "home",
        component:"Home",
        path: "/home",
    },
    {
        name: "about us",
        component:"AboutUs",
        path: "/about-us",
    },
    {
        name: "accommodation",
        component:"accommodation",
        path: "/accommodation",
    },
    {
        name: "menu",
        component:"menu",
        path: "/menu",
    },
    {
        name: "tour travel",
        component:"TourTravel",
        path: "/tour-travel",
        active: false,
    },
    {
        name: "service",
        component:"Service",
        path: "/service",
        active: false,
    },
    {
        name: "news",
        component:"News",
        path: "/news",
        active: false,
    },
    {
        name: "gallery",
        component:"Gallery",
        path: "/gallery",
        active: false,
    },
    {
        name: "contact",
        component:"Contact",
        path: "/contact",
    },


];

//rooms
const rooms = [
    {
        id:"double-room",
        parentId:"accommodation",
        name: "double room",
        imgSrc: require("~/assets/images/accommodation_2/dbroom2.jpeg"),
    },
    {
        id:"triple-room",
        parentId:"accommodation",
        name: "triple room",
        imgSrc: require("~/assets/images/accommodation_2/tbroom2.jpeg"),
    },
    {   
        id:"family-room",
        parentId:"accommodation",
        name: "family room",
        imgSrc: require("~/assets/images/accommodation_2/fam3.jpeg"),
    }
];

const roomDetails = [
    {
        id:"double-room",
        name:"double room",
        listImg:[
            require("~/assets/images/accommodation_2/dbroom1.jpeg"),
           require("~/assets/images/accommodation_2/dbroom2.jpeg"),
           require("~/assets/images/accommodation_2/dbroom3.jpeg"),
        ],
        specifications:{
            room:"18M2",
            high:"3.5",
            bedSize:"1.1 * 2.0M",
            roomrates:"600.000"
        },
        desc:"Room size of 20m2, with modern equipment and warm, elegant tones. All rooms have windows.",
        equipments:[
            "Free wifi - internet access",
            "Room phone",
            "Air-conditional",
            "Swimming pool",
            "Room ammenitie",
            "Cable TV",
            "High quality satin cotton bedding",
            "Kettle",
            "Work desk",
            "Minibar",
            "Tea-coffee",
            "Cupboard clothes",
            "Hair dryer",
            "Modern bathroom equipment",
            "Room service (surcharge)",
            "Iron - iron (upon request)",
        ],   
    },
    {
        id:"triple-room",
        name:"triple room",
        listImg:[
            require("~/assets/images/accommodation_2/tbroom1.jpeg"),
            require("~/assets/images/accommodation_2/tbroom2.jpeg"),
            require("~/assets/images/accommodation_2/tbroom3.jpeg"),
        ],
        specifications:{
            room:"35M2",
            high:"3.5",
            bedSize:"1.1 * 2.0M",
            roomrates:"1.100.000"
        },
        desc:"Economy Triple room of 35 square meters with luxurious interior, fully equipped with modern, wide glass windows covering the whole cozynibi panoramic view, giving you a pleasant peaceful space will be the best choice for seminar guests and business people. family with children.",
        equipments:[
            "Room ammenities",
            "Cable TV",
            "High quality satin cotton bedding",
            "Kettle",
            "Work desk",
            "Minibar",
            "Tea-coffee",
            "Cupboard clothes",
            "Hair dryer",
            "Modern bathroom equipment",
            "Room service (surcharge)",
            "Iron - iron (upon request)",
            "Free Buffet breakfast",
            "Reception 24h",
            "Security 24h",
            "Free wifi - internet access",
            "Room phone",
            "Air-conditional",
            "Swimming pool",
        ],   
    },
    {
        id:"family-room",
        name:"family room",
        listImg:[
            require("~/assets/images/accommodation_2/fam1.jpeg"),
            require("~/assets/images/accommodation_2/fam2.jpeg"),
            require("~/assets/images/accommodation_2/fam3.jpeg"),
        ],
        specifications:{
            room:"35M2",
            high:"3.5",
            bedSize:"1 KING BED (1.8M) & 1 FULL BED (1.4M)",
            roomrates:"1.100.000"
        },
        desc:"The Family room with luxurious interior, fully equipped with modern, wide glass windows covering the whole cozynibi panoramic view, giving you a pleasant peaceful space will be the best choice for seminar guests and business people. family with children.",
        equipments:[
            "Room ammenities",
            "Cable TV",
            "High quality satin cotton bedding",
            "Kettle",
            "Work desk",
            "Minibar",
            "Tea-coffee",
            "Cupboard clothes",
            "Hair dryer",
            "Modern bathroom equipment",
            "Room service (surcharge)",
            "Iron - iron (upon request)",
            "Free Buffet breakfast",
            "Reception 24h",
            "Security 24h",
            "Free wifi - internet access",
            "Room phone",
            "Air-conditional",
            "Swimming pool",
        ],   
    },
];
export function getRoomDetails(id){
    var room = roomDetails.find(item => item.id===id);
    return room;
}

 
//tour travels
const tourDetails = [
    {
        id:"tour-01",
        name:"hoa lu ancient capital",
        title: "hoa lu ancient capital am tien grotto tam coc bich dong pagoda",
        subTitle: "am tien grotto-tam coc-bich dong pagoda",
        listImg:[
            require("~/assets/images/tour_travel_2/tour-11.jpg"),
            require("~/assets/images/tour_travel_2/tour-12.jpg"),
            require("~/assets/images/tour_travel_2/tour-13.jpg"),
        ],
        inclusions:[
            "Pick-up/drop-off by air-conditioned car.",
            "English speaking guide.",
            "Vietnamese lunch.",
            "Entrance fees and sight-seeing tickets.",
        ],
        exclusions:[
            "Tax and travel insurance",
            "Tips and other expenses not mentioned above"
        ],
        price:[
            "2 Persons: US$ 75/per person",
            "3 to 4 Persons:US$62/per person",
            "5 to 10 Persons: US54 /per person",
        ]
    },
    {
        id:"tour-02",
        name:"2 day cycling around ninh binh",
        title: "2 day cycling around ninh binh",
        subTitle: "",
        listImg:[
            require("~/assets/images/tour_travel_2/tour-02.jpg"),
            require("~/assets/images/gallery/travel-4.jpg"),
            require("~/assets/images/gallery/travel-8.jpg"),
        ],
        inclusions:[
            "Pick-up/drop-off by air-conditioned car.",
            "English speaking guide.",
            "Vietnamese lunch.",
            "Entrance fees and sight-seeing tickets.",
        ],
        exclusions:[
            "Tax and travel insurance",
            "Tips and other expenses not mentioned above"
        ],
        price:[
            "2 Persons: US$ 75/per person",
            "3 to 4 Persons:US$62/per person",
            "5 to 10 Persons: US54 /per person",
        ]
    },
    {
        id:"tour-03",
        name:"mua cave phat diem cathedral",
        title: "mua cave phat diem cathedral",
        subTitle: "",
        listImg:[
            require("~/assets/images/tour_travel_2/tour-03.jpeg"),
            require("~/assets/images/gallery/travel-1.jpg"),
            require("~/assets/images/tour_travel_2/tour-13.jpg"),
        ],
        inclusions:[
            "Pick-up/drop-off by air-conditioned car.",
            "English speaking guide.",
            "Vietnamese lunch.",
            "Entrance fees and sight-seeing tickets.",
        ],
        exclusions:[
            "Tax and travel insurance",
            "Tips and other expenses not mentioned above"
        ],
        price:[
            "2 Persons: US$ 75/per person",
            "3 to 4 Persons:US$62/per person",
            "5 to 10 Persons: US54 /per person",
        ]
    },
    {
        id:"tour-04",
        name:"hoa lu ancient capital",
        title: "hoa lu ancient capital am tien tam coc bich dong pagoda bird valley",
        subTitle: "am tien tam coc bich dong-pagoda bird valley",
        listImg:[
            require("~/assets/images/tour_travel_2/tour-04.jpg"),
            require("~/assets/images/tour_travel_2/tour-12.jpg"),
            require("~/assets/images/tour_travel_2/tour-13.jpg"),
        ],
        inclusions:[
            "Pick-up/drop-off by air-conditioned car.",
            "English speaking guide.",
            "Vietnamese lunch.",
            "Entrance fees and sight-seeing tickets.",
        ],
        exclusions:[
            "Tax and travel insurance",
            "Tips and other expenses not mentioned above"
        ],
        price:[
            "2 Persons: US$ 75/per person",
            "3 to 4 Persons:US$62/per person",
            "5 to 10 Persons: US54 /per person",
        ]
    },
    {
        id:"tour-05",
        name:"bai dinh pagoda",
        title: "mua cave trang an lanscape complex bai dinh pagoda",
        subTitle: "mua cave-trang an lanscape complex",
        listImg:[
            require("~/assets/images/tour_travel_2/tour-05.jpg"),
            require("~/assets/images/gallery/travel-10.jpg"),
            require("~/assets/images/tour_travel_2/tour-13.jpg"),
        ],
        inclusions:[
            "Pick-up/drop-off by air-conditioned car.",
            "English speaking guide.",
            "Vietnamese lunch.",
            "Entrance fees and sight-seeing tickets.",
        ],
        exclusions:[
            "Tax and travel insurance",
            "Tips and other expenses not mentioned above"
        ],
        price:[
            "2 Persons: US$ 75/per person",
            "3 to 4 Persons:US$62/per person",
            "5 to 10 Persons: US54 /per person",
        ]
    },
    {
        id:"tour-06",
        name:"tam coc thai vi ",
        title: "tam coc thai vi bich dong bird valley",
        subTitle: "bich dong-bird valley",
        listImg:[
            require("~/assets/images/tour_travel_2/tour-06.jpg"),
            require("~/assets/images/tour_travel_2/tour-12.jpg"),
            require("~/assets/images/gallery/travel-12.jpg"),
        ],
        inclusions:[
            "Pick-up/drop-off by air-conditioned car.",
            "English speaking guide.",
            "Vietnamese lunch.",
            "Entrance fees and sight-seeing tickets.",
        ],
        exclusions:[
            "Tax and travel insurance",
            "Tips and other expenses not mentioned above"
        ],
        price:[
            "2 Persons: US$ 75/per person",
            "3 to 4 Persons:US$62/per person",
            "5 to 10 Persons: US54 /per person",
        ]
    }
];
export function getTourDetails(id){
    var tour = tourDetails.find(item => item.id===id);
    return tour;
}

const tour_travels = [
    {
        id:"tour-01",
        parentId:"tour-travel",
        name:"hoa lu ancient capital",
        title: "hoa lu ancient capital am tien grotto tam coc bich dong pagoda",
        subTitle: "am tien grotto-tam coc-bich dong pagoda",
        imgSrc:require("~/assets/images/tour_travel_2/tour-01.jpg")
    },
    {
        id:"tour-02",
        parentId:"tour-travel",
        name:"2 day cycling around ninh binh",
        title: "2 day cycling around ninh binh",
        subTitle: "",
        imgSrc: require("~/assets/images/tour_travel_2/tour-02.jpg")
    },
    {
        id:"tour-03",
        parentId:"tour-travel",
        name:"mua cave phat diem cathedral",
        title: "mua cave phat diem cathedral",
        subTitle: "",
        imgSrc: require("~/assets/images/tour_travel_2/tour-03.jpeg")
    },
    {
        id:"tour-04",
        parentId:"tour-travel",
        name:"hoa lu ancient capital",
        title: "hoa lu ancient capital am tien tam coc bich dong pagoda bird valley",
        subTitle: "am tien tam coc bich dong-pagoda bird valley",
        imgSrc: require("~/assets/images/tour_travel_2/tour-04.jpg")
    },
    {
        id:"tour-05",
        parentId:"tour-travel",
        name:"bai dinh pagoda",
        title: "mua cave trang an lanscape complex bai dinh pagoda",
        subTitle: "mua cave-trang an lanscape complex",
        imgSrc: require("~/assets/images/tour_travel_2/tour-05.jpg")
    },
    {
        id:"tour-06",
        parentId:"tour-travel",
        name:"tam coc thai vi",
        title: "tam coc thai vi bich dong bird valley",
        subTitle: "bich dong-bird valley",
        imgSrc:  require("~/assets/images/tour_travel_2/tour-06.jpg")
    }
];

const tripSchedule = [
    {
        id:"tour-01",
        timeline:[
            {
                time:"8:00 AM",
                content:"Start cycling to Mua Cave."
            },
            {
                time:"8:30 AM",
                content:"Arrive at Mua Cave to do hiking up the 500 steps up to Mua Mountain for the fantastic panorama view from Mua peak with Ninh Binh city view and Tam Coc boat tour from other side."
            },
            {
                time:"10:00 AM",
                content:"Leave Mua Cave and continue cycling to Ninh Binh City."
            },
            {
                time:"10.20 AM",
                content:"Start to explore Thuy Mountain – the important observation point of Vietnam military from Dinh Dynasty – more than 1000 years ago upto US war from 1954-1975. The beautiful mountain with view to the main river branch crossing the border of Ninh Binh and other provinces which was also carved  lots of famous poems in Vietnamese literature."
            },
            {
                time:"11:30 AM",
                content:"Cycle back to some special street for local vendor foods."
            },
            {
                time:"11:45 AM",
                content:"Start exploring and experiencing the traditional and modern styles of local street food such as porridges, cakes, bubble tea, “bánh xèo”,  “bánh gối”, grilled steak pork or mixed, tra da, thuoc lao and etc…"
            },
            {
                time:"1:45 AM",
                content:"Finish having lunch and street tea. Continue to cycle back."
            },
            {
                time:"2:30 PM",
                content:"Arrive to Thai Vi Temple to visit the most special, interesting and important temple dedicating Tran Dynasty of Viet Nam."
            },
            {
                time:"4:00 PM",
                content:"Cycle back to hotel and finish the trip."
            },
        ]
    }
];
export function getTripSchedule(id){
    var trip = tripSchedule.find(item => item.id===id);
    return trip;
}

//foods
const foods = [
    {
        id:"food-01",
        name: "Pizza Premire",
        price:5,
        imgSrc: require("~/assets/images/menu/menu-item1.png")
    },
    {
        id:"food-02",
        name: "Cuon Cake",
        price:8,
        imgSrc: require("~/assets/images/menu/menu-item2.png")
    },
    {
        id:"food-03",
        name: "Humbarger Bao",
        price:4,
        imgSrc: require("~/assets/images/menu/menu-item3.png")
    },
    {
        id:"food-04",
        name: "Potato Fried",
        price:10,
        imgSrc: require("~/assets/images/menu/menu-item4.png")
    },
    {
        id:"food-05",
        name: "Ocean Fish",
        price:25,
        imgSrc: require("~/assets/images/menu/menu-item5.png")
    },
    {
        id:"food-06",
        name: "Verigate mix",
        price:30,
        imgSrc: require("~/assets/images/menu/menu-item6.png")
    },
];

const services = [
    {
        name: "massage & sauna",
        imgSrc: require("~/assets/images/service/ser-1.png"),
    },
    {
        name: "wedding",
        imgSrc: require("~/assets/images/service/ser-2.png"),
    },
    {
        name: "meeting & events",
        imgSrc: require("~/assets/images/service/ser-3.png"),
    },
    {
        name: "charles bar",
        imgSrc: require("~/assets/images/service/ser-4.png"),
    },
];

const hightlights = [
    {
        name: "World Tourism Day 2019: Tourism and Jobs - A better Future for All",
        imgSrc: require("~/assets/images/home/home-section4-item1.png")
    },
    {
        name: "Tourism Day 2020: Tourism and Jobs - Amazing for All",
        imgSrc: require("~/assets/images/home/home-section4-item2.png")
    },
    {
        name: "Tourism Day 2021: Tourism and Landscapes - Beatiful for All",
        imgSrc: require("~/assets/images/home/home-section4-item3.png")
    },

];

const commands = [
    {
        author:"Steve",
        ava:"",
        country:"USA",
        param:"The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown"
    },
    {
        author:"Harvey",
        ava:"",
        country:"Germany",
        param:"They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and I didn’t wanna wait. So this was a big plus. The sevice was exceptional as well. Would definitely send a friend there"
    },
    {
        author:"Peter",
        ava:"",
        country:"Hungary",
        param:"I had a wonderful experience at the (HN). Every staff member I encountered, from the valet to the check- in to the cleaning staff were delightful and eager to help! Thank you! Will recommend to my colleagues!"
    },
    {
        author:"Kante",
        ava:"",
        country:"France",
        param:"The staff at this property are all great! They all go above and beyond to make your stay comfortable. Please (HN) give your staff awards!"
    },
    {
        author:"Mbape",
        ava:"",
        country:"France",
        param:"Took advantage of the downtown location to walk to dinner, check out a couple galleries, and have drinks. It was great. Service top notch as always. Bed comfort can not be beat."
    },
    {
        author:"Hung Nguyen",
        ava:"",
        country:"Vietnam",
        param:"The best hotel I’ve ever been privileged enough to stay at. Gorgeous building, and it only gets more breathtaking when you walk in. High quality rooms (there was even a tv by the shower), and high quality service."
    },

];

const pictures = {
    hotel:[
        require("~/assets/images/gallery/ht-11.jpg"),
        require("~/assets/images/gallery/ht-2.png"),
        require("~/assets/images/gallery/ht-3.png"),
        require("~/assets/images/gallery/ht-4.png"),
        require("~/assets/images/gallery/ht-5.png"),
        require("~/assets/images/gallery/ht-6.jpeg"),
        require("~/assets/images/gallery/ht-7.jpg"),
        require("~/assets/images/gallery/ht-8.jpeg"),
        require("~/assets/images/gallery/ht-9.jpg"),
        require("~/assets/images/gallery/ht-10.jpeg"),
        require("~/assets/images/gallery/ht-11.jpg"),
    ],
    travel:[
        require("~/assets/images/gallery/travel-1.jpg"),
        require("~/assets/images/gallery/travel-2.jpg"),
        require("~/assets/images/gallery/travel-3.jpg"),
        require("~/assets/images/gallery/travel-4.jpg"),
        require("~/assets/images/gallery/travel-5.jpg"),
        require("~/assets/images/gallery/travel-6.jpg"),
        require("~/assets/images/gallery/travel-7.jpg"),
        require("~/assets/images/gallery/travel-8.jpg"),
        require("~/assets/images/gallery/travel-9.jpg"),
        require("~/assets/images/gallery/travel-10.jpg"),
        require("~/assets/images/gallery/travel-11.jpg"),
        require("~/assets/images/gallery/travel-12.jpg"),
    ],
    others:[

    ]
    
};

const contacts = [
    {
        name:"address",
        info:"P.1505 - A2 Ecolife Capitol Building 58 To Huu, Thanh Xuan, Hanoi",
        icon:icons[0].icon,
    },
    {
        name:"phone",
        info:"(024) .3783.5639 - (024) .3783.5640",
        icon:icons[1].icon,
    },
    {
        name:"print",
        info:"(024) 3,783,5641",
        icon:icons[2].icon,
    },
    {
        name:"mail",
        info:"info@adcvietnam.net",
        icon:icons[3].icon,
    },
    {
        name:"web",
        info:"www.adcvietnam.net",
        icon:icons[4].icon,
    },

];



export {languages,menuItem,rooms, tour_travels, foods, services, 
    hightlights, commands,pictures,contacts,roomDetails,tourDetails}