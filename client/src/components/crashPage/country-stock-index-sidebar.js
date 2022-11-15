export default function (props) {
    return (
        <li className={"stock-list-item"}>
            <div className={"list-indicator"}></div>
            <div>{props.name}</div>
            <div>{props.value.toLocaleString()}</div>
        </li>
    )
}