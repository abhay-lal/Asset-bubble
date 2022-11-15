import "../../css/login.css"
import SignUp from "./signup-card";

export default function () {
    return (
        <main>
            <section className={"login-section"}>
                <div className={"login-card-container"}>
                    <div className={"stock-ig"}>

                    </div>

                    <div className={"login-card"}>
                        <h2>Set Up Your Account !</h2>
                        <SignUp />
                    </div>

                </div>
            </section>
        </main>
    )
}