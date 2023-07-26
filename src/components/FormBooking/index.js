
//hook
import { useForm } from 'react-hook-form';

//Tosast JS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//API
import * as contactServices from '~/apiServices/contactServices';
//css
import { Fragment, useEffect, useState } from 'react';
import Border from '../Border';
import './FormBooking.css'


function Input(props) {
    let { placeHolder, width, type, name, register } = props;
    if (type === "datetime-local") {
        return (
            <div className={`inputBox ${width}`}>
                <input {...register(name)}
                    type={"text"} placeholder={placeHolder} className="w-100"
                    onChange={(e) => console.log(e.target.value)}
                    onFocus={(e) => (e.target.type = "datetime-local")}
                     />
            </div>
        );
    }
    if (type === "time") {
        return (
            <div className={`inputBox ${width}`}>
                <input {...register(name)}
                    type={"text"} placeholder={placeHolder} className="w-100"
                    onChange={(e) => console.log(e.target.value)}
                    onFocus={(e) => (e.target.type = "time")}
                     />
            </div>
        );
    }
    return (<div className={`inputBox ${width}`}>
        <input {...register(name)} type={type} placeholder={placeHolder} className="w-100" />
    </div>);

}

function Select(props) {
    let { name, width, options, register, placeHolder } = props;
    let [selectedValue, setSelectedValue] = useState(0);
    return (
        <div className={`inputBox ${width}`}>
            <select id={name} name={name} className="w-100" {...register(name)}
                value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)}>
                <option disabled={true} value={0}>
                    {placeHolder}
                </option>
                {options.map((op, i) => {
                    return (
                        <option key={i} className='op' value={op}>{op}</option>
                    );
                })}
            </select>
        </div>
    );
}

function TextArea(props) {
    let { placeHolder, width, register, name } = props;
    return (
        <div className={`inputBox ${width}`} >
            <textarea {...register(name)} name={name} placeholder={placeHolder} className="w-100"></textarea>
        </div>
    );
}

function validateEmail(email) {
    const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    return regex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
}
function validateDateTime(dateTime, dateTimeCompare) {
    const selectedDate = new Date(dateTime);
  
    if (selectedDate.getTime() < dateTimeCompare.getTime()) {
      return false; 
    } else {
      return true; 
    }
  }
function getValidation(formData){
    var validatObj = {
        name: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
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
    if (!validateDateTime(validatObj.checkIn, new Date())|| 
        !validateDateTime(validatObj.checkOut, new Date())||
        !validateDateTime(validatObj.checkOut,  new Date(validatObj.checkIn))){
        return {
            status: false,
            message: "The date time is not valid"
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



const initData = {
    fullName: "",
    adults: "",
    checkIn: "",
    phone: "",
    children: "",
    checkOut: "",
    email: "",
    content: "",
    room_id:"",
    eating_time: "",
    eating_place:"",
}
function FormBooking(props) {
    let { type1, type2, type3 } = props;
    let { register, handleSubmit, reset } = useForm();//map all input by registing
    let [data, setData] = useState(initData);

    
    const submitData = (formData) => {
        setData(formData)
        var isValid = getValidation(formData);
        if (!isValid.status) {
            toast.error(isValid.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                zIndex: 1000000
                });
            return;
        }
        console.log(typeof formData)
        const fetchApi = async () => {
            const res = await contactServices.postBooking(formData);
            if(res!=null){
                toast.success('Thanks for booking ,We will reply you as soon as we can!', {
                    position: "bottom-center",
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
                    position: "bottom-right",
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
            {type1 && <form className='form-booking' onSubmit={handleSubmit(submitData)}>
                <div className='f-row d-flex'>
                    <Input placeHolder="Full name" width="w-33" register={register} name="fullName" />
                    <Select options={[0,1, 2, 3, 4, 5, 6, 7]} width="w-33" register={register} placeHolder="ADULTS" name="adults" />
                    <Input type="datetime-local" placeHolder="CHECKIN" width="w-33" register={register} name="checkIn" />
                </div>
                <div className='f-row d-flex'>
                    <Input placeHolder="Telephone" width="w-33" register={register} name="phoneNumber" />
                    <Select options={[0,1, 2, 3, 4, 5, 6, 7]} width="w-33" register={register} placeHolder="CHILDREN" name="children" />
                    <Input type="datetime-local" placeHolder="CHECKOUT" width="w-33" register={register} name="checkOut" />
                </div>
                <div className='f-row d-flex'>
                    <Input type="email" placeHolder="Email" width="w-33" register={register} name="email" />
                    <Input placeHolder="Address" width="w-66" register={register} name="address" />
                </div>
                <div className='f-row d-flex'>
                    <TextArea placeHolder="Content" width="w-100" register={register} name="content" />
                </div>
                <div className='f-row d-flex'>
                    <button type='submit' id="btn-send" className={"w-10"}>Send</button>
                </div>
            </form>}
            {type2 &&
                <Border color="black">
                    <form className='form-booking' style={{ padding: "1rem" }} onSubmit={handleSubmit(submitData)}>
                        <div className='f-row d-flex'>
                            <Input type="datetime-local" placeHolder="CHECKIN" width="w-50" register={register} name="checkIn" />
                            <Input type="datetime-local" placeHolder="CHECKOUT" width="w-50" register={register} name="checkOut" />
                        </div>
                        <div className='f-row d-flex'>
                            <Select placeHolder="ADULTS" options={[0,1, 2, 3, 4, 5, 6, 7]} width="w-50" register={register} name="adults" />
                            <Select placeHolder="CHILDREN" options={[0,1, 2, 3, 4, 5, 6, 7]} width="w-50" register={register} name="children" />
                        </div>
                        <div className='f-row d-flex'>
                            <Select placeHolder="Rooms" options={["Double Room", "Triple Room", "Family Room"]} width="w-100" register={register} name="room" />
                        </div>
                        <div className='f-row d-flex'>
                            <Input placeHolder="Full Name" width="w-100" register={register} name="name" />
                        </div>
                        <div className='f-row d-flex'>
                            <Input type="email" placeHolder="Email" width="w-100" register={register} name="email" />
                        </div>
                        <div className='f-row d-flex'>
                            <Input type="tel" placeHolder="Telephone" width="w-100" register={register} name="phoneNumber" />
                        </div>
                        <div className='f-row d-flex'>
                            <button type='submit' id="btn-send" className={"w-30"}>Send</button>
                        </div>
                    </form>
                </Border>
            }
            {type3 && <form className='form-booking type3' onSubmit={handleSubmit(submitData)}>
                <div className='f-row d-flex'>
                    <Input placeHolder="Full name" width="w-50" register={register} name="fullName" />
                    <Input placeHolder="Telephone" width="w-50" register={register} name="phoneNumber" type="tel" />
                </div>
                <div className='f-row d-flex'>
                    <Input placeHolder="Room Id" width="w-50" register={register} name="room_id" />
                    <Input type="time" placeHolder="Eating Time" width="w-50" register={register} name="eating_time" />
                </div>
                <div className='f-row d-flex'>
                    <Select options={["Room","Pool", "Restaurant", "Beach", "Playground"]} width="w-100" register={register} placeHolder="Eating Place" name="eating_place" />
                </div>
                <div className='f-row d-flex'>
                    <TextArea placeHolder="Some more notes" width="w-100" register={register} name="content" />
                </div>
                <div className='f-row d-flex'>
                    <button type='submit' id="btn-send" className={"w-50"}>Comfirm</button>
                </div>
            </form>}


            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                zIndex={10000000}
            />
        </Fragment>
    );
}

export default FormBooking;
