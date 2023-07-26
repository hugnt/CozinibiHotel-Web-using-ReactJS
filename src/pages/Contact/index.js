//hooks form
import { useForm } from 'react-hook-form';
//Api
import * as contactServices from '~/apiServices/contactServices';
//redux
import { connect } from 'react-redux';
//Tosast JS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//css
import './Contact.css'

import { Fragment, useEffect, useState } from 'react';
import { SectionPart, Title } from '~/components';

import { icons } from '~/utils';
const contacts = [
    {
        name: "address",
        info: "P.1505 - A2 Ecolife Capitol Building 58 To Huu, Thanh Xuan, Hanoi",
        icon: icons[0].icon,
    },
    {
        name: "phone",
        info: "(024) .3783.5639 - (024) .3783.5640",
        icon: icons[1].icon,
    },
    {
        name: "print",
        info: "(024) 3,783,5641",
        icon: icons[2].icon,
    },
    {
        name: "mail",
        info: "info@adcvietnam.net",
        icon: icons[3].icon,
    },
    {
        name: "web",
        info: "www.adcvietnam.net",
        icon: icons[4].icon,
    },

];
const initData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    title: "",
    comments: ""
}

function Contact(props) {
    let { information } = props;
    let { register, handleSubmit, reset } = useForm();
    let [data, setData] = useState(initData);

    function validateEmail(email) {
        const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
        return regex.test(email);
    }

    function validatePhoneNumber(phoneNumber) {
        const regex = /^\d{10}$/;
        return regex.test(phoneNumber);
    }

    function getValidation(formData){
        var validatObj = {
            name: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber
        }
        for (let prop in validatObj) {
            if (validatObj[prop] == null || validatObj[prop] == '' || validatObj[prop] == undefined) {
                return {
                    status: false,
                    message: `${prop} required `
                };
            }
        }
        if (validatObj.name.length < 4 || validatObj.name.length >= 50) {
            return {
                status: false,
                message: "Checking the name field"
            }
        }
        if (!validatePhoneNumber(validatObj.phoneNumber)) {
            return {
                status: false,
                message: "Checking the telephone field"
            }
        }
        if (!validateEmail(validatObj.email)) {
            return {
                status: false,
                message: "Checking the email field"
            }
        }
        
        return {
            status: true,
            message: "All valid"
        }

    }

    const submitData = (formData) => {
        setData(formData);

        //Validation
        var isValid = getValidation(formData);
        if (!isValid.status) {
            toast.error(isValid.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return;
        }

    
        console.log(typeof formData)
        const fetchApi = async () => {
            const res = await contactServices.postContact(formData);
            if(res!=null){
                toast.success('Thanks for contacting us ,We will reply you as soon as we can!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                reset(initData);
            }
            else{
                toast.error('Opps! There have some problem! please call us to get the contact', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        }
        fetchApi();
        console.log(formData);
    }

    return (
        <Fragment>
            <SectionPart bgColor="bg-gold" classname="section-contact">
                <div className="contact-infor w-40">
                    <Title name="Cozynibi Hotel" />
                    {information && contacts.map((info, i) => {
                        var mation = "";
                        if (i == 0) mation = information.address;
                        else if (i == 1) mation = information.phoneNumber;
                        else if (i == 3) mation = information.email;
                        else if (i == 4) mation = information.site;
                        else mation = "(024) .3783.5639 - (024) .3783.5640";
                        return (
                            <div key={i} className='infor-item'>
                                <span>{info.icon}</span>
                                <span className='infor'>{mation}</span>
                            </div>
                        );
                    })}
                </div>
                <form action="" className="contact-form w-50" onSubmit={handleSubmit(submitData)}>
                    <span className="title-focus">get in touch with us</span>
                    <div className="name-tel d-flex">
                        <input type="text" {...register("fullName")} name="fullName" id="name" placeholder="Name" />
                        <input type="tel" {...register("phoneNumber")} name="phoneNumber" id="tel" placeholder="Tel" />
                    </div>
                    <div className="mail-address d-flex">
                        <input type="email" name="email" id="email" placeholder="Email" {...register("email")} />
                        <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Address"
                            {...register("address")}
                        />
                    </div>
                    <div className="title-content">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title"
                            className="w-100"
                            {...register("title")}
                        />
                    </div>
                    <div className="comments">
                        <textarea
                            name=""
                            id=""
                            placeholder="Comments"
                            rows={5}
                            className="w-100"
                            defaultValue={""}
                            {...register("comments")}
                        />
                    </div>
                    <div className="submit-btn">
                        <input
                            type="submit"
                            name=""
                            id=""
                            defaultValue="SUBMIT"
                            className="submit"
                        />
                    </div>
                </form>
            </SectionPart>

            <section className="section-02">
                <div className="map" style={{ marginTop: "1.5rem" }}>
                    {information && <iframe title='gg-map'
                        src={information.googleMapLink}
                        style={{ border: 0, width: "100%", height: "40rem" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='gg-map'
                    />}
                </div>
            </section>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    information: state.information
});
export default connect(mapStateToProps)(Contact);