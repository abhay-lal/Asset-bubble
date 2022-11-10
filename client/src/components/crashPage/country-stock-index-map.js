import build_img from "../../images/build-icon.png";

export default function (props) {
    return (
        <div className={`hover-country-data ${props.name.toLowerCase()}-card`}>
            <div className={"build-img-container"}>
                <img src={build_img} alt={"building-img"}/>
            </div>
            <div>
                <div className={"country-name"}>{props.name}</div>
                <div className={"country-stock-value"}>{props.value}</div>
            </div>
        </div>
    )
}