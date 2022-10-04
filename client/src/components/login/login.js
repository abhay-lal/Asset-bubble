import "../../css/login.css"
import LoginCard from "./login-card";

export default function () {
    return (
        <main>
            <section className={"login-section"}>

                <div className={"circular-arc"}>

                </div>

                <div className={"login-card-container"}>
                    <div className={"stock-ig"}>

                    </div>

                    <div className={"login-card"}>
                        <h2>Welcome Back !</h2>
                        <LoginCard />
                    </div>

                </div>
            </section>
        </main>
    )
}