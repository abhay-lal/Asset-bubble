import Header from "../reuse/header";
import "../../css/crashPage.css"
import UserCrashSpeedometer from "./usercrashspeedometer";
import userCardData from "./userCardData";
import UserDataCard from "./userDataCard";
import CustomDataForm from "./customDataForm";

export default function () {

    const dataListCards = userCardData.map(data => {
        return (
            <UserDataCard
                {...data}
            />
        )
    })

    return (
        <main>
            <Header />

            <section className={"user-data-check"}>

                <div>
                    <CustomDataForm />
                </div>

                <div className={"content-speedometer"}>
                    <UserCrashSpeedometer
                        value={40}
                    />
                </div>
            </section>

            <div className={"graph-container"}>
                <h2>Your Previous Data</h2>
                <div className={"prev-card-container"}>
                    {dataListCards}
                </div>
            </div>

        </main>
    )
}