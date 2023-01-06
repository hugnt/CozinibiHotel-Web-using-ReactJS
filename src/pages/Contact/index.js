//hooks form
import { useForm } from 'react-hook-form';

//css
import './Contact.css'

import { Fragment, useEffect, useState } from 'react';
import { SectionPart, Title } from '~/components';

import { contacts } from '~/utils';
const initData = {
    name: "",
    email: "",
    tel: "",
    address: "",
    title: "",
    comments: ""
}

function Contact() {
    let { register, handleSubmit, reset } = useForm();
    let [data, setData] = useState(initData);

    const submitData = (formData) => {
        setData(formData)
        console.log(formData);
    }
    useEffect(() => {
        reset(initData);
        // eslint-disable-next-line 
    }, [data])
    return (
        <Fragment>
            <SectionPart bgColor="bg-gold" classname="section-contact">
                <div className="contact-infor w-40">
                    <Title name="Cozynibi Hotel" />
                    {contacts.map((info, i) => {
                        return (
                            <div key={i} className='infor-item'>
                                <span>{info.icon}</span>
                                <span className='infor'>{info.info}</span>
                            </div>
                        );
                    })}
                </div>
                <form action="" className="contact-form w-50" onSubmit={handleSubmit(submitData)}>
                    <span className="title-focus">get in touch with us</span>
                    <div className="name-tel d-flex">
                        <input type="text" {...register("name")} name="name" id="name" placeholder="Name" />
                        <input type="tel" {...register("tel")} name="tel" id="tel" placeholder="Tel" />
                    </div>
                    <div className="mail-address d-flex">
                        <input type="email" name="email" id="email" placeholder="Email" {...register("email")}/>
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
                    <iframe title='gg-map'
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d20767.523870929625!2d105.80116097212839!3d21.008135515573954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3135ab7aba3cad95%3A0x7abbb4b806e8073d!2zVmnhu4duIEPDtG5nIE5naOG7hyBWw6AgxJDDoG8gVOG6oW8gRGV2bWFzdGVyLCBQaOG7kSBWxakgTmfhu41jIFBoYW4sIEzDoW5nIEjhuqEsIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWk!3m2!1d21.013478199999998!2d105.8113758!5e0!3m2!1svi!2s!4v1672223894146!5m2!1svi!2s"
                        width={2000}
                        height={600}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='gg-map'
                    />
                </div>
            </section>

        </Fragment>
    );
}

export default Contact;