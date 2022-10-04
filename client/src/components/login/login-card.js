export default function () {
    return (
        <form method={"post"} action={"#"}>
            <label htmlFor={"name"} className={"login-label"}>
                <i className="fa-solid fa-user"></i>
                <input id={"name"} name={"name"} placeholder={"John Smith"} type={"text"} required={true}/>
            </label>

            <label htmlFor={"password"} className={"login-label"}>
                <i className="fa-solid fa-lock"></i>
                <input id={"password"} name={"password"} placeholder={"Password"} type={"password"} required={true}/>
            </label>

            <div className={"submit-btn-container"}>
                <input id={"submit-btn"} type={"submit"} value={"Sign In"}/>
            </div>

            <div className={"direct-to-signup"}>
                Don't Have an account?
                <a href={"/signup"}> Sign up</a>
            </div>

        </form>
    )
}