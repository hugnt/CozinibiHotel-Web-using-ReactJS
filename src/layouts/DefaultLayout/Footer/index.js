
//Router DOm
import { Link } from 'react-router-dom';
//redux
import { connect } from 'react-redux';
//hooks
import {  useEffect } from 'react';

//api
import * as roomServices from '~/apiServices/roomServices';
import * as serviceServices from '~/apiServices/serviceServices';
import * as infomationServices from '~/apiServices/informationServices';
//icons
import {Icon, handleActiveMenu, handleData } from '~/utils';

//css
import './footer.css';

//contact us
const contact_us = [
    {
        info: "58 To Huu, Thanh Xuan, Hanoi",
        icon: Icon("address"),
    },
    {
        info: "(024).3783.5639",
        icon: Icon("phone"),
    },
    {
        info: "info@adcvietnam.net",
        icon: Icon("mail"),
    },
    {
        info: "www.adcvietnam.net",
        icon: Icon("globe"),
    },
];

//social
const social = [
    Icon("facebook"),
    Icon("twitter"),
    Icon("youtube"),
    Icon("instagram"),
]


function Footer(props) {
    let { handleActiveMenu,menuItem, rooms, services,information, handleData } = props;
    useEffect(()=>{
        const fetchApi = async() =>{
            const res0 = await infomationServices.getInformation();
             handleData("information",res0);

             const res = await roomServices.getRoom();
             handleData("rooms",res);

             const res3 = await serviceServices.getService();
             handleData("services",res3);
        }
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     const handleGoToUrl = (url) =>{
        window.open(url, '_blank');
     }
    return (
        <footer className="footer">
            <div className="contact">
                <div className="container w-80">
                    <div className="footer-top d-flex">
                        <ul className="contact_us">
                            <span>contact us</span>
                            {information&&contact_us.map((contact, i) => {
                                var info = "";
                                if(i==0) info = information.address;
                                else if(i==1) info = information.phoneNumber;
                                else if(i==2) info = information.email;
                                else if(i==3) info = information.site;
                                return (
                                    <li key={i}>
                                        {contact.icon}
                                        <span>{info}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className="accommodation">
                            <span>accommodation</span>
                            {rooms&&rooms.map((room, i) => {
                                return (
                                    <Link key={i} to={`/accommodation/${room.id}`} className="ft-link">
                                        {room.name}
                                    </Link>
                                );
                            })}
                        </ul>
                        <ul className="service">
                            <span>service</span>
                            {services&&services.map((sv, i) => {
                                return (
                                    <li key={i}>
                                        <Link className='ft-link'>{sv.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className="newsletter">
                            <span>newsletter</span>
                            <div className="d-flex email">
                                <input
                                    type="email"
                                    name=""
                                    id="email-btn"
                                    placeholder="Enter your email"
                                />
                                <label htmlFor="email-btn">
                                    {Icon("caret")}
                                </label>
                            </div>
                            <div className="social d-flex">
                                {information&&social&&social.map((s, i) => {
                                    var linkSocial ="";
                                    if(i==0) linkSocial = information.facebookLink;
                                    else if(i==1) linkSocial = information.twisterLink;
                                    else if(i==2) linkSocial = information.youtubeLink;
                                    else if(i==3) linkSocial = information.instarLink;
                                    return (
                                        <li key={i} onClick = {() => handleGoToUrl(linkSocial)}>
                                            {s}
                                        </li>
                                    );
                                })}

                            </div>
                        </ul>
                    </div>
                    <div className="footer-bottom d-flex">
                        <ul className="d-flex ft-menu">
                            {menuItem&&menuItem.map((item, i) => {
                                var name = item.url.slice(1);
                                return (
                                    <li key={i}><Link className="ft-link" to={item.src} onClick={() => handleActiveMenu(name)}>{item.name}</Link></li>
                                );
                            })}
                        </ul>
                        <div className="ft-cpyright">
                            <b>
                                <span>Created by <a href='https://www.facebook.com/hug10.nt/' style={{ color: "var(--gold)" }} target="_blank" rel="noreferrer" >Nguyen Thanh Hung</a> | All rights reserved.</span>
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

const mapStateToProps = (state) => ({ 
    activeMenu: state.activeMenu,
    menuItem:state.menuItem,
    rooms:state.rooms,
    services:state.services,
    information: state.information
});
const mapDispatchToProps = { handleActiveMenu, handleData }
export default connect(mapStateToProps, mapDispatchToProps)(Footer);