const testMockApi = [
    {
        "id": "languages",
        "data": [
            {
                "id": "lang-02",
                "name": "English"
            },
            {
                "id": "lang-01",
                "name": "Vietnamese"
            }
        ]
    },
    {
        "id": "banner",
        "data": [
            {
                "id": "home",
                "name": "home",
                "slide": true,
                "imgSrc": [
                    "home/banner1.jpeg",
                    "home/banner2.jpg",
                    "home/banner3.jpeg",
                    "home/banner4.jpeg",
                    "home/banner5.jpg"
                ]
            },
            {
                "id": "about-us",
                "name": "about us",
                "slide": false,
                "imgSrc": "about_us/banner.jpeg"
            },
            {
                "id": "accommodation",
                "name": "accommodation",
                "slide": false,
                "imgSrc": "accommodation/banner.jpeg"
            },
            {
                "id": "menu",
                "name": "menu",
                "slide": false,
                "imgSrc": "menu/banner.gif"
            },
            {
                "id": "tour-travel",
                "name": "tour travel",
                "slide": false,
                "imgSrc": "tour_travel/banner.gif"
            },
            {
                "id": "service",
                "name": "service",
                "slide": false,
                "imgSrc": "service/banner.gif"
            },
            {
                "id": "news",
                "name": "news",
                "slide": false,
                "imgSrc": "news/banner.jpg"
            },
            {
                "id": "gallery",
                "name": "gallery",
                "slide": false,
                "imgSrc": "gallery/banner-gallery.jpg"
            },
            {
                "id": "contact",
                "name": "contact",
                "slide": false,
                "imgSrc": "contact/contact-banner.png"
            },
            {
                "id": "booking",
                "name": "booking",
                "slide": false,
                "imgSrc": "booking.jpeg"
            },
            {
                "id": "search-results",
                "name": "search-results",
                "slide": false,
                "imgSrc": ""
            },
            {
                "id": "bill",
                "name": "bill",
                "slide": false,
                "imgSrc": ""
            },
            {
                "id": "no-found",
                "name": "no-found",
                "slide": false,
                "imgSrc": "404-banner.gif"
            }
        ]
    },
    {
        "id": "menuItem",
        "data": [
            {
                "name": "home",
                "component": "Home",
                "path": "/home"
            },
            {
                "name": "about us",
                "component": "AboutUs",
                "path": "/about-us"
            },
            {
                "name": "accommodation",
                "component": "accommodation",
                "path": "/accommodation"
            },
            {
                "name": "menu",
                "component": "menu",
                "path": "/menu"
            },
            {
                "name": "tour travel",
                "component": "TourTravel",
                "path": "/tour-travel",
                "active": false
            },
            {
                "name": "service",
                "component": "Service",
                "path": "/service",
                "active": false
            },
            {
                "name": "news",
                "component": "News",
                "path": "/news",
                "active": false
            },
            {
                "name": "gallery",
                "component": "Gallery",
                "path": "/gallery",
                "active": false
            },
            {
                "name": "contact",
                "component": "Contact",
                "path": "/contact"
            }
        ]
    },
    {
        "id": "rooms",
        "data": [
            {
                "id": "double-room",
                "parentId": "accommodation",
                "name": "double room",
                "imgSrc": "accommodation_2/dbroom2.jpeg"
            },
            {
                "id": "triple-room",
                "parentId": "accommodation",
                "name": "triple room",
                "imgSrc": "accommodation_2/tbroom2.jpeg"
            },
            {
                "id": "family-room",
                "parentId": "accommodation",
                "name": "family room",
                "imgSrc": "accommodation_2/fam3.jpeg"
            }
        ]
    },
    {
        "id": "roomDetails",
        "data": [
            {
                "id": "double-room",
                "name": "double room",
                "listImg": [
                    "accommodation_2/dbroom1.jpeg",
                    "accommodation_2/dbroom2.jpeg",
                    "accommodation_2/dbroom3.jpeg"
                ],
                "specifications": {
                    "room": "18M2",
                    "high": "3.5",
                    "bedSize": "1.1 * 2.0M",
                    "roomrates": "600.000"
                },
                "desc": "Room size of 20m2, with modern equipment and warm, elegant tones. All rooms have windows.",
                "equipments": [
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
                    "Iron - iron (upon request)"
                ]
            },
            {
                "id": "triple-room",
                "name": "triple room",
                "listImg": [
                    "accommodation_2/tbroom1.jpeg",
                    "accommodation_2/tbroom2.jpeg",
                    "accommodation_2/tbroom3.jpeg"
                ],
                "specifications": {
                    "room": "35M2",
                    "high": "3.5",
                    "bedSize": "1.1 * 2.0M",
                    "roomrates": "1.100.000"
                },
                "desc": "Economy Triple room of 35 square meters with luxurious interior, fully equipped with modern, wide glass windows covering the whole cozynibi panoramic view, giving you a pleasant peaceful space will be the best choice for seminar guests and business people. family with children.",
                "equipments": [
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
                    "Swimming pool"
                ]
            },
            {
                "id": "family-room",
                "name": "family room",
                "listImg": [
                    "accommodation_2/fam1.jpeg",
                    "accommodation_2/fam2.jpeg",
                    "accommodation_2/fam3.jpeg"
                ],
                "specifications": {
                    "room": "35M2",
                    "high": "3.5",
                    "bedSize": "1 KING BED (1.8M) & 1 FULL BED (1.4M)",
                    "roomrates": "1.100.000"
                },
                "desc": "The Family room with luxurious interior, fully equipped with modern, wide glass windows covering the whole cozynibi panoramic view, giving you a pleasant peaceful space will be the best choice for seminar guests and business people. family with children.",
                "equipments": [
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
                    "Swimming pool"
                ]
            }
        ]
    },
    {
        "id": "tourDetails",
        "data": [
            {
                "id": "tour-01",
                "name": "hoa lu ancient capital",
                "title": "hoa lu ancient capital am tien grotto tam coc bich dong pagoda",
                "subTitle": "am tien grotto-tam coc-bich dong pagoda",
                "listImg": [
                    "tour_travel_2/tour-11.jpg",
                    "tour_travel_2/tour-12.jpg",
                    "tour_travel_2/tour-13.jpg"
                ],
                "inclusions": [
                    "Pick-up/drop-off by air-conditioned car.",
                    "English speaking guide.",
                    "Vietnamese lunch.",
                    "Entrance fees and sight-seeing tickets."
                ],
                "exclusions": [
                    "Tax and travel insurance",
                    "Tips and other expenses not mentioned above"
                ],
                "price": [
                    "2 Persons: US$ 75/per person",
                    "3 to 4 Persons:US$62/per person",
                    "5 to 10 Persons: US54 /per person"
                ]
            },
            {
                "id": "tour-02",
                "name": "2 day cycling around ninh binh",
                "title": "2 day cycling around ninh binh",
                "subTitle": "",
                "listImg": [
                    "tour_travel_2/tour-02.jpg",
                    "gallery/travel-4.jpg",
                    "gallery/travel-8.jpg"
                ],
                "inclusions": [
                    "Pick-up/drop-off by air-conditioned car.",
                    "English speaking guide.",
                    "Vietnamese lunch.",
                    "Entrance fees and sight-seeing tickets."
                ],
                "exclusions": [
                    "Tax and travel insurance",
                    "Tips and other expenses not mentioned above"
                ],
                "price": [
                    "2 Persons: US$ 75/per person",
                    "3 to 4 Persons:US$62/per person",
                    "5 to 10 Persons: US54 /per person"
                ]
            },
            {
                "id": "tour-03",
                "name": "mua cave phat diem cathedral",
                "title": "mua cave phat diem cathedral",
                "subTitle": "",
                "listImg": [
                    "tour_travel_2/tour-03.jpeg",
                    "gallery/travel-1.jpg",
                    "tour_travel_2/tour-13.jpg"
                ],
                "inclusions": [
                    "Pick-up/drop-off by air-conditioned car.",
                    "English speaking guide.",
                    "Vietnamese lunch.",
                    "Entrance fees and sight-seeing tickets."
                ],
                "exclusions": [
                    "Tax and travel insurance",
                    "Tips and other expenses not mentioned above"
                ],
                "price": [
                    "2 Persons: US$ 75/per person",
                    "3 to 4 Persons:US$62/per person",
                    "5 to 10 Persons: US54 /per person"
                ]
            },
            {
                "id": "tour-04",
                "name": "hoa lu ancient capital",
                "title": "hoa lu ancient capital am tien tam coc bich dong pagoda bird valley",
                "subTitle": "am tien tam coc bich dong-pagoda bird valley",
                "listImg": [
                    "tour_travel_2/tour-04.jpg",
                    "tour_travel_2/tour-12.jpg",
                    "tour_travel_2/tour-13.jpg"
                ],
                "inclusions": [
                    "Pick-up/drop-off by air-conditioned car.",
                    "English speaking guide.",
                    "Vietnamese lunch.",
                    "Entrance fees and sight-seeing tickets."
                ],
                "exclusions": [
                    "Tax and travel insurance",
                    "Tips and other expenses not mentioned above"
                ],
                "price": [
                    "2 Persons: US$ 75/per person",
                    "3 to 4 Persons:US$62/per person",
                    "5 to 10 Persons: US54 /per person"
                ]
            },
            {
                "id": "tour-05",
                "name": "bai dinh pagoda",
                "title": "mua cave trang an lanscape complex bai dinh pagoda",
                "subTitle": "mua cave-trang an lanscape complex",
                "listImg": [
                    "tour_travel_2/tour-05.jpg",
                    "gallery/travel-10.jpg",
                    "tour_travel_2/tour-13.jpg"
                ],
                "inclusions": [
                    "Pick-up/drop-off by air-conditioned car.",
                    "English speaking guide.",
                    "Vietnamese lunch.",
                    "Entrance fees and sight-seeing tickets."
                ],
                "exclusions": [
                    "Tax and travel insurance",
                    "Tips and other expenses not mentioned above"
                ],
                "price": [
                    "2 Persons: US$ 75/per person",
                    "3 to 4 Persons:US$62/per person",
                    "5 to 10 Persons: US54 /per person"
                ]
            },
            {
                "id": "tour-06",
                "name": "tam coc thai vi ",
                "title": "tam coc thai vi bich dong bird valley",
                "subTitle": "bich dong-bird valley",
                "listImg": [
                    "tour_travel_2/tour-06.jpg",
                    "tour_travel_2/tour-12.jpg",
                    "gallery/travel-12.jpg"
                ],
                "inclusions": [
                    "Pick-up/drop-off by air-conditioned car.",
                    "English speaking guide.",
                    "Vietnamese lunch.",
                    "Entrance fees and sight-seeing tickets."
                ],
                "exclusions": [
                    "Tax and travel insurance",
                    "Tips and other expenses not mentioned above"
                ],
                "price": [
                    "2 Persons: US$ 75/per person",
                    "3 to 4 Persons:US$62/per person",
                    "5 to 10 Persons: US54 /per person"
                ]
            }
        ]
    },
    {
        "id": "tour_travels",
        "data": [
            {
                "id": "tour-01",
                "parentId": "tour-travel",
                "name": "hoa lu ancient capital",
                "title": "hoa lu ancient capital am tien grotto tam coc bich dong pagoda",
                "subTitle": "am tien grotto-tam coc-bich dong pagoda",
                "imgSrc": "tour_travel_2/tour-01.jpg"
            },
            {
                "id": "tour-02",
                "parentId": "tour-travel",
                "name": "2 day cycling around ninh binh",
                "title": "2 day cycling around ninh binh",
                "subTitle": "",
                "imgSrc": "tour_travel_2/tour-02.jpg"
            },
            {
                "id": "tour-03",
                "parentId": "tour-travel",
                "name": "mua cave phat diem cathedral",
                "title": "mua cave phat diem cathedral",
                "subTitle": "",
                "imgSrc": "tour_travel_2/tour-03.jpeg"
            },
            {
                "id": "tour-04",
                "parentId": "tour-travel",
                "name": "hoa lu ancient capital",
                "title": "hoa lu ancient capital am tien tam coc bich dong pagoda bird valley",
                "subTitle": "am tien tam coc bich dong-pagoda bird valley",
                "imgSrc": "tour_travel_2/tour-04.jpg"
            },
            {
                "id": "tour-05",
                "parentId": "tour-travel",
                "name": "bai dinh pagoda",
                "title": "mua cave trang an lanscape complex bai dinh pagoda",
                "subTitle": "mua cave-trang an lanscape complex",
                "imgSrc": "tour_travel_2/tour-05.jpg"
            },
            {
                "id": "tour-06",
                "parentId": "tour-travel",
                "name": "tam coc thai vi",
                "title": "tam coc thai vi bich dong bird valley",
                "subTitle": "bich dong-bird valley",
                "imgSrc": "tour_travel_2/tour-06.jpg"
            }
        ]
    },
    {
        "id": "tripSchedule",
        "data": [
            {
                "id": "tour-01",
                "timeline": [
                    {
                        "time": "8:00 AM",
                        "content": "Start cycling to Mua Cave."
                    },
                    {
                        "time": "8:30 AM",
                        "content": "Arrive at Mua Cave to do hiking up the 500 steps up to Mua Mountain for the fantastic panorama view from Mua peak with Ninh Binh city view and Tam Coc boat tour from other side."
                    },
                    {
                        "time": "10:00 AM",
                        "content": "Leave Mua Cave and continue cycling to Ninh Binh City."
                    },
                    {
                        "time": "10.20 AM",
                        "content": "Start to explore Thuy Mountain – the important observation point of Vietnam military from Dinh Dynasty – more than 1000 years ago upto US war from 1954-1975. The beautiful mountain with view to the main river branch crossing the border of Ninh Binh and other provinces which was also carved  lots of famous poems in Vietnamese literature."
                    },
                    {
                        "time": "11:30 AM",
                        "content": "Cycle back to some special street for local vendor foods."
                    },
                    {
                        "time": "11:45 AM",
                        "content": "Start exploring and experiencing the traditional and modern styles of local street food such as porridges, cakes, bubble tea, “bánh xèo”,  “bánh gối”, grilled steak pork or mixed, tra da, thuoc lao and etc…"
                    },
                    {
                        "time": "1:45 AM",
                        "content": "Finish having lunch and street tea. Continue to cycle back."
                    },
                    {
                        "time": "2:30 PM",
                        "content": "Arrive to Thai Vi Temple to visit the most special, interesting and important temple dedicating Tran Dynasty of Viet Nam."
                    },
                    {
                        "time": "4:00 PM",
                        "content": "Cycle back to hotel and finish the trip."
                    }
                ]
            }
        ]
    },
    {
        "id": "foods",
        "data": [
            {
                "id": "food-01",
                "name": "Pizza Premire",
                "price": 5,
                "imgSrc": "menu/menu-item1.png"
            },
            {
                "id": "food-02",
                "name": "Cuon Cake",
                "price": 8,
                "imgSrc": "menu/menu-item2.png"
            },
            {
                "id": "food-03",
                "name": "Humbarger Bao",
                "price": 4,
                "imgSrc": "menu/menu-item3.png"
            },
            {
                "id": "food-04",
                "name": "Potato Fried",
                "price": 10,
                "imgSrc": "menu/menu-item4.png"
            },
            {
                "id": "food-05",
                "name": "Ocean Fish",
                "price": 25,
                "imgSrc": "menu/menu-item5.png"
            },
            {
                "id": "food-06",
                "name": "Verigate mix",
                "price": 30,
                "imgSrc": "menu/menu-item6.png"
            }
        ]
    },
    {
        "id": "services",
        "data": [
            {
                "name": "massage & sauna",
                "imgSrc": "service/ser-1.png",
                "imgSrc2": "service/service-item1.jpg"
            },
            {
                "name": "wedding",
                "imgSrc": "service/ser-2.png",
                "imgSrc2": "service/service-item2.jpg"
            },
            {
                "name": "meeting & events",
                "imgSrc": "service/ser-3.png",
                "imgSrc2": "service/service-item3.jpg"
            },
            {
                "name": "charles bar",
                "imgSrc": "service/ser-4.png",
                "imgSrc2": "service/service-item4.jpg"
            }
        ]
    },
    {
        "id": "hightlights",
        "data": [
            {
                "name": "World Tourism Day 2019: Tourism and Jobs - A better Future for All",
                "imgSrc": "home/home-section4-item1.png"
            },
            {
                "name": "Tourism Day 2020: Tourism and Jobs - Amazing for All",
                "imgSrc": "home/home-section4-item2.png"
            },
            {
                "name": "Tourism Day 2021: Tourism and Landscapes - Beatiful for All",
                "imgSrc": "home/home-section4-item3.png"
            }
        ]
    },
    {
        "id": "commands",
        "data": [
            {
                "author": "Steve",
                "ava": "",
                "country": "USA",
                "param": "The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown"
            },
            {
                "author": "Harvey",
                "ava": "",
                "country": "Germany",
                "param": "They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and I didn’t wanna wait. So this was a big plus. The sevice was exceptional as well. Would definitely send a friend there"
            },
            {
                "author": "Peter",
                "ava": "",
                "country": "Hungary",
                "param": "I had a wonderful experience at the (HN). Every staff member I encountered, from the valet to the check- in to the cleaning staff were delightful and eager to help! Thank you! Will recommend to my colleagues!"
            },
            {
                "author": "Kante",
                "ava": "",
                "country": "France",
                "param": "The staff at this property are all great! They all go above and beyond to make your stay comfortable. Please (HN) give your staff awards!"
            },
            {
                "author": "Mbape",
                "ava": "",
                "country": "France",
                "param": "Took advantage of the downtown location to walk to dinner, check out a couple galleries, and have drinks. It was great. Service top notch as always. Bed comfort can not be beat."
            },
            {
                "author": "Hung Nguyen",
                "ava": "",
                "country": "Vietnam",
                "param": "The best hotel I’ve ever been privileged enough to stay at. Gorgeous building, and it only gets more breathtaking when you walk in. High quality rooms (there was even a tv by the shower), and high quality service."
            }
        ]
    },

    {
        "id": "news",
        "data": [
            {
                "name": "New modern devices and technologies",
                "param": "",
                "imgSrc": "news/news-item.jpg"
            },
            {
                "name": "Furnitures quality",
                "param": "",
                "imgSrc": "accommodation-banner.png"
            },
            {
                "name": "Fresh environment",
                "param": "",
                "imgSrc": "news/news-item2.jpg"
            }
        ]
    },
    {
        "id": "features",
        "data": [
            {
                "name": "comfortable rooms",
                "param": "A Comfort Room provides a supportive therapeutic environment where individuals can use self-help techniques to manage their behavior and emotional state in a safe environment. It is a designated space that is intentionally designed to help calm an individual when that person feels stressed, or becomes overwhelmed."
            },
            {
                "name": "extensive menu",
                "param": "However, you'll need to get to grips with the extensive menu or spend your dive jabbing at buttons.\n        The extensive menu has everything from jamon iberico croquetas to chargrilled octopus with new potatoes, capers, shallots and aioli.\n        The extensive menu only features local produce - if the chefs can't find it within 20 miles they won't cook it.\n        Bug hotels have several storeys, each floor offering a décor suited to its guests, and with an extensive menu catering to all tastes however strange.\n        Staff would always serve her chicken consomme and lemon sole as asking her to choose from the extensive menu would confuse her.\n        "
            },
            {
                "name": "various services",
                "param": "Consumers of electronic communications services should be able to easily compare prices of various services offered on the market based on tariff information published in an easily accessible form.\n        End-users and consumers of electronic communications services should be able to easily compare the prices of various services offered on the market based on information published in an easily accessible form.\n        "
            }
        ]
    },
    {
        "id": "pictures",
        "data": [
            {
                "id": "hotel",
                "imgSrc": [
                    "gallery/ht-11.jpg",
                    "gallery/ht-2.png",
                    "gallery/ht-3.png",
                    "gallery/ht-4.png",
                    "gallery/ht-5.png",
                    "gallery/ht-6.jpeg",
                    "gallery/ht-7.jpg",
                    "gallery/ht-8.jpeg",
                    "gallery/ht-9.jpg",
                    "gallery/ht-10.jpeg",
                    "gallery/ht-11.jpg"
                ]
            },
            {
                "id": "travel",
                "imgSrc": [
                    "gallery/travel-1.jpg",
                    "gallery/travel-2.jpg",
                    "gallery/travel-3.jpg",
                    "gallery/travel-4.jpg",
                    "gallery/travel-5.jpg",
                    "gallery/travel-6.jpg",
                    "gallery/travel-7.jpg",
                    "gallery/travel-8.jpg",
                    "gallery/travel-9.jpg",
                    "gallery/travel-10.jpg",
                    "gallery/travel-11.jpg",
                    "gallery/travel-12.jpg"
                ]
            }
        ]
    }

]
