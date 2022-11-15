<<<<<<< HEAD
export default () => {
    return (
        <form className={"custom-data-form"}>
            <label htmlFor={"name"} className={" data-elt"}>
                <input id={"name"} name={"email"} placeholder={"123@example.com"} type={"email"} required={true}/>
            </label>

            <label htmlFor={"password"} className={" data-elt"}>
                <input id={"password"} name={"password"} placeholder={"Password"} type={"password"} required={true}/>
            </label>

            <label htmlFor={"name"} className={" data-elt"}>
                <input id={"name"} name={"email"} placeholder={"123@example.com"} type={"email"} required={true}/>
            </label>

            <label htmlFor={"password"} className={" data-elt"}>
                <input id={"password"} name={"password"} placeholder={"Password"} type={"password"} required={true}/>
            </label>

            <label htmlFor={"name"} className={" data-elt"}>
                <input id={"name"} name={"email"} placeholder={"123@example.com"} type={"email"} required={true}/>
            </label>

            <label htmlFor={"password"} className={" data-elt"}>
                <input id={"password"} name={"password"} placeholder={"Password"} type={"password"} required={true}/>
            </label>

            <label htmlFor={"name"} className={" data-elt"}>
                <input id={"name"} name={"email"} placeholder={"123@example.com"} type={"email"} required={true}/>
            </label>

            <label htmlFor={"password"} className={" data-elt"}>
                <input id={"password"} name={"password"} placeholder={"Password"} type={"password"} required={true}/>
            </label>

            <label htmlFor={"name"} className={" data-elt"}>
                <input id={"name"} name={"email"} placeholder={"123@example.com"} type={"email"} required={true}/>
            </label>

            <label htmlFor={"password"} className={" data-elt"}>
                <input id={"password"} name={"password"} placeholder={"Password"} type={"password"} required={true}/>
=======
import model from './crashModel';
import {useState} from "react";
import {postUserData} from "../apis/api";
import {useSelector} from "react-redux";

export default (props) => {

    const u = useSelector(state => state.logged)

    const [formData, setFormData] = useState({
        unemployment: 0,
        cpi: 0,
        pe: 0,
        open: 0,
        high: 0,
        low: 0,
        close: 0,
        industrialProduction: 0,
        treasury: 0,
        year: 0,
        month: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.changeValue(0);
        const data = Object.values(formData).map(val => Number(val));
        model(data).then(res => {
            props.changeValue(res)
            formData.crash = String(res);
            formData.user = u?.user;
            postUserData(formData).then(res => {
                console.log('Success');
            }).catch(err => console.log(err));

        }).catch(err=>console.log(err));
    }

    const handleChange = (e) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        });
    }


    return (
        <form className={"custom-data-form"} onSubmit={handleSubmit}>
            <label htmlFor={"unemployment"} className={" data-elt"}>
                <input onChange={handleChange} id={"unemployment"} name={"unemployment"} placeholder={"Unemployment Value"} type={"number"} value={(formData.unemployment)?formData.unemployment:''} required={true}/>
            </label>

            <label htmlFor={"cpi"} className={" data-elt"}>
                <input onChange={handleChange} id={"cpi"} name={"cpi"} placeholder={"CPI Value"} type={"number"} value={(formData.cpi)?formData.cpi:''} required={true}/>
            </label>

            <label htmlFor={"pe"} className={" data-elt"}>
                <input onChange={handleChange} id={"pe"} name={"pe"} placeholder={"PE Value"} type={"number"} value={(formData.pe)?formData.pe:''} required={true}/>
            </label>

            <label htmlFor={"open"} className={" data-elt"}>
                <input onChange={handleChange} id={"open"} name={"open"} placeholder={"Open Value"} type={"number"} value={(formData.open)?formData.open:''} required={true}/>
            </label>

            <label htmlFor={"high"} className={" data-elt"}>
                <input onChange={handleChange} id={"high"} name={"high"} placeholder={"High Value"} type={"number"} value={(formData.high)?formData.high:''} required={true}/>
            </label>

            <label htmlFor={"low"} className={" data-elt"}>
                <input onChange={handleChange} id={"low"} name={"low"} placeholder={"Low Value"} type={"number"} value={(formData.low)?formData.low:''} required={true}/>
            </label>

            <label htmlFor={"close"} className={" data-elt"}>
                <input onChange={handleChange} id={"close"} name={"close"} placeholder={"Close Value"} type={"number"} value={(formData.close)?formData.close:''} required={true}/>
            </label>

            <label htmlFor={"industrialProduction"} className={" data-elt"}>
                <input onChange={handleChange} id={"industrialProduction"} name={"industrialProduction"} placeholder={"Industrial Production Value"} type={"text"} value={(formData.industrialProduction)?formData.industrialProduction:''} required={true}/>
            </label>

            <label htmlFor={"treasury"} className={" data-elt"}>
                <input onChange={handleChange} id={"treasury"} name={"treasury"} placeholder={"Treasury Value"} type={"number"} value={(formData.treasury)?formData.treasury:''} required={true}/>
            </label>

            <label htmlFor={"year"} className={" data-elt"}>
                <input onChange={handleChange} id={"year"} name={"year"} placeholder={"Year Value"} type={"number"} min={1978} value={(formData.year)?formData.year:''} required={true}/>
            </label>

            <label htmlFor={"month"} className={" data-elt"}>
                <input onChange={handleChange} id={"month"} name={"month"} placeholder={"Month Value"} type={"number"} min={1} max={12} value={(formData.month)?formData.month:''} required={true}/>
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
            </label>

            <button type={'submit'}>Check Crash</button>

        </form>
    )
}