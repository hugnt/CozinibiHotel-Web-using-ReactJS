
//Router DOm
import { Link } from 'react-router-dom';
//redux
import { connect } from 'react-redux';
//hooks
import {  useEffect } from 'react';

//api
import * as roomServices from '~/apiServices/roomServices';
import * as serviceServices from '~/apiServices/serviceServices';

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
    let { handleActiveMenu,menuItem, rooms, services, handleData } = props;
    useEffect(()=>{
        const fetchApi = async() =>{
             const res = await roomServices.getRoom();
             handleData("rooms",res.data);

             const res3 = await serviceServices.getService();
             handleData("services",res3.data);
        }
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
    return (
        <footer className="footer">
            <div className="contact">
                <div className="container w-80">
                    <div className="footer-top d-flex">
                        <ul className="contact_us">
                            <span>contact us</span>
                            {contact_us.map((contact, i) => {
                                return (
                                    <li key={i}>
                                        {contact.icon}
                                        <span>{contact.info}</span>
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
                                {social&&social.map((s, i) => {
                                    return (
                                        <li key={i}>
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
                                var id = item.path.slice(1);
                                return (
                                    <li key={i}><Link className="ft-link" to={item.path} onClick={() => handleActiveMenu(id)}>{item.name}</Link></li>
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
});
const mapDispatchToProps = { handleActiveMenu, handleData }
export default connect(mapStateToProps, mapDispatchToProps)(Footer);