import Header from "../reuse/header";
import "../../css/crashPage.css"
import UserCrashSpeedometer from "./usercrashspeedometer";
<<<<<<< HEAD
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
=======
import UserDataCard from "./userDataCard";
import CustomDataForm from "./customDataForm";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getUserData} from "../apis/api";

export default function () {

    const [value, setValue] = useState(0);
    const [userCardData, setUserCardData] = useState([]);

    const u = useSelector(state => state.logged);

    const handleSetValue = (val) => {
        setValue(val);
        document.querySelectorAll(".responsive-hidden")[0].classList.remove("responsive-hidden");
        document.querySelectorAll(".content")[0].classList.add("responsive-hidden");
    }

    const dataListCards = userCardData?.map(data => {
        return (
            <UserDataCard
                {...data}
                changeValue={setValue}
            />
        )
    });

    useEffect(() => {
        getUserData(u?.name)
            .then(res=> {
                console.log(res.data.results);
                setUserCardData(res.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }, [value]);
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b

    return (
        <main>
            <Header />

<<<<<<< HEAD
            <section className={"user-data-check"}>

                <div>
                    <CustomDataForm />
                </div>

                <div className={"content-speedometer"}>
                    <UserCrashSpeedometer
                        value={40}
                    />
=======
            <h1 style={{
                textAlign: "center",
                marginTop: 2 + 'rem',
            }}>Check your data</h1>
            <section className={"user-data-check"}>

                <div className={"content"}>
                    <CustomDataForm
                        changeValue={handleSetValue}
                    />
                </div>

                <div className={"content-speedometer responsive-hidden"}>
                    {value ? <UserCrashSpeedometer value={value*100} />:
                        <></>}
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
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