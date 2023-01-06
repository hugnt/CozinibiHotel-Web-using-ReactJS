import AboutUs from '~/pages/AboutUs';
import Home from '~/pages/Home';
import Accommodation from '~/pages/Accommodation';
import Menu from '~/pages/Menu';
import TourTravel from '~/pages/TourTravel';
import Service from '~/pages/Service';
import News from '~/pages/News';
import Gallery from '~/pages/Gallery';
import Contact from '~/pages/Contact';
import RoomDetails from '~/pages/RoomDetails';
import TravelDetails from '~/pages/TravelDetails';
import NotFoundPage from '~/pages/NotFoundPage';
import Booking from '~/pages/Booking';
import SearchResults from '~/pages/SearchResults';
const publicRoutes = [
    {
        name: "home",
        path: '/',
        component: Home,
    },
    {
        name: "home",
        path: '/home',
        component: Home,
    },
    {
        name: "about-us",
        path: '/about-us',
        component: AboutUs,
    },
    {
        name: "accommodation",
        path: '/accommodation',
        component: Accommodation,
    },
    {
        name: "menu",
        path: '/menu',
        component: Menu,
    },
    {
        name: "tour-travel",
        path: '/tour-travel',
        component: TourTravel,
    },
    {
        name: "service",
        path: '/service',
        component: Service,
    },
    {
        name: "news",
        path: '/news',
        component: News,
    },
    {
        name: "gallery",
        path: '/gallery',
        component: Gallery,
    },
    {
        name: "contact",
        path: '/contact',
        component: Contact,
    },
    {
        name: "roomDetails",
        path: '/accommodation/:id',
        component: RoomDetails,
    },
    {
        name: "tourDetails",
        path: '/tour-travel/:id',
        component: TravelDetails,
    },
    {
        name: "booking",
        path: '/booking',
        component: Booking,
    },
    {
        name: "search-results",
        path: '/search-results',
        component: SearchResults,
    },
    {
        name: "not-found",
        path: '*',
        component: NotFoundPage,
    },


];

const privateRoutes = [

];

export {publicRoutes, privateRoutes}