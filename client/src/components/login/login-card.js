import {useState} from "react";
import {login} from "../apis/api";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../redux-toolkit";
import {Link} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

export default function () {

    const history = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch();
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
        login(formData)
            .then(res => {
                console.log(res);
                dispatch(createUser(
                    {
                        user: res.data.user.id,
                        token: res.data.tokens.access.token,
                    }
                ))

                toast("Logged in Successfully");

                setTimeout(()=>history.push('/'), 2000);

            })
            .catch(err => console.log(err));

    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor={"name"} className={"login-label"}>
                <i className="fa-solid fa-user"></i>
                <input id={"name"} name={"email"} value={formData.email} onChange={handleChange} placeholder={"123@example.com"} type={"email"} required={true}/>
            </label>

            <label htmlFor={"password"} className={"login-label"}>
                <i className="fa-solid fa-lock"></i>
                <input id={"password"} name={"password"} value={formData.password} onChange={handleChange} placeholder={"Password"} type={"password"} required={true}/>
            </label>

            <div className={"submit-btn-container"}>
                <input id={"submit-btn"} type={"submit"} value={"Sign In"}/>
            </div>

            <div className={"direct-to-signup"}>
                Don't Have an account?
                <Link to={"/signup"}> Sign up</Link>
            </div>

            <ToastContainer />

        </form>

    )
}