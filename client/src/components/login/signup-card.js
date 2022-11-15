import {useState} from "react";
import {registerUser} from "../apis/api";
import {Link} from "react-router-dom"

export default function () {

    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: "",
        }
    )

    const handleChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(formData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={"name"} className={"login-label"}>
                <i className="fa-solid fa-user"></i>
                <input id={"name"} name={"name"} value={formData.name} onChange={handleChange} placeholder={"John Smith"} type={"text"} required={true}/>
            </label>

            <label htmlFor={"email"} className={"login-label"}>
                <i className="fa-solid fa-lock"></i>
                <input id={"email"} name={"email"} value={formData.email} onChange={handleChange} placeholder={"example@gmail.com"} type={"email"} required={true}/>
            </label>

            <label htmlFor={"password"} className={"login-label"}>
                <i className="fa-solid fa-lock"></i>
                <input id={"password"} name={"password"} value={formData.password} onChange={handleChange} placeholder={"Password"} type={"password"} required={true}/>
            </label>

            <div className={"submit-btn-container"}>
                <input id={"submit-btn"} type={"submit"} value={"Sign Up"}/>
            </div>

            <div className={"direct-to-signup"}>
                Already Have an account?
                <Link to={"/login"}> Sign In</Link>
            </div>

        </form>
    )
}