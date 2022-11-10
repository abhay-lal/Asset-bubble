import AddDataListItem from "./addDataListItem";
import {Link} from "react-router-dom";

export default function (props) {

    const dataList = props.items.map(item => {
        return (
            <AddDataListItem
                {...item}
            />
        )
    })

    console.log(props);

    return (
        <div className={"prev-data-card"}>
            <div className={"prev-data-heading"}>
                <h2>{props.chance}</h2>
                <p>Crash Probability</p>
            </div>

            <ul className={"data-list"}>
                {dataList}
            </ul>
            <a href={"#"} onClick={(e)=>{e.preventDefault()}} className={"validate-btn"}>
                Validate Again
            </a>
        </div>
    )
}