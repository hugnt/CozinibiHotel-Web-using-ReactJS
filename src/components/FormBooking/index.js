
//hook
import { useForm } from 'react-hook-form';
//css
import { Fragment, useEffect, useState } from 'react';
import Border from '../Border';
import './FormBooking.css'


function Input(props) {
    let { placeHolder, width, type, name, register } = props;
    if (type !== "date") {
        return (<div className={`inputBox ${width}`}>
            <input {...register(name)} type={type} placeholder={placeHolder} className="w-100" />
        </div>);
    }
    return (
        <div className={`inputBox ${width}`}>
            <input {...register(name)}
                type={"text"} placeholder={placeHolder} className="w-100"
                onChange={(e) => console.log(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")} />
        </div>
    );
}

function Select(props) {
    let { name, width, options, register, placeHolder } = props;
    return (
        <div className={`inputBox ${width}`}>
            <select id={name} name={name} className="w-100" {...register(name)}>
                <option disabled={true} value="">
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


const initData = {
    name: "",
    adults: "",
    checkin: "",
    phone: "",
    childrens: "",
    checkout: "",
    email: "",
    content: ""
}
function FormBooking(props) {
    let { type1, type2 } = props;
    let { register, handleSubmit, reset } = useForm();//map all input by registing
    let [data, setData] = useState(initData);
    const submitData = (formData) => {
        setData(formData)
        console.log(formData);
    }
    useEffect(() => {
        reset(initData)
        // eslint-disable-next-line 
    }, [data])
    return (
        <Fragment>
            {type1 && <form className='form-booking' onSubmit={handleSubmit(submitData)}>
                <div className='f-row d-flex'>
                    <Input placeHolder="Full name" width="w-33" register={register} name="name" />
                    <Select options={[1, 2, 3, 4, 5, 6, 7]} width="w-33" register={register} placeHolder="ADULTS" name="adults" />
                    <Input type="date" placeHolder="CHECKIN" width="w-33" register={register} name="checkin" />
                </div>
                <div className='f-row d-flex'>
                    <Input placeHolder="Telephone" width="w-33" register={register} name="phone" />
                    <Select options={[1, 2, 3, 4, 5, 6, 7]} width="w-33" register={register} placeHolder="CHILDREN" name="childrens" />
                    <Input type="date" placeHolder="CHECKOUT" width="w-33" register={register} name="checkout" />
                </div>
                <div className='f-row d-flex'>
                    <Input type="email" placeHolder="Email" width="w-33" register={register} name="email" />
                    <Input placeHolder="Address" width="w-66" register={register} name="checkin" />
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
                            <Input type="date" placeHolder="CHECKIN" width="w-50" register={register}  name="checkin" />
                            <Input type="date" placeHolder="CHECKOUT" width="w-50" register={register} name="checkout" />
                        </div>
                        <div className='f-row d-flex'>
                            <Select placeHolder="ADULTS" options={[1, 2, 3, 4, 5, 6, 7]} width="w-50" register={register} name="adults" />
                            <Select placeHolder="CHILDREN" options={[1, 2, 3, 4, 5, 6, 7]} width="w-50" register={register} name="childrens" />
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
                            <Input type="tel" placeHolder="Telephone" width="w-100" register={register} name="phone" />
                        </div>
                        <div className='f-row d-flex'>
                            <button type='submit' id="btn-send" className={"w-30"}>Send</button>
                        </div>
                    </form>
                </Border>
            }
        </Fragment>
    );
}

export default FormBooking;
