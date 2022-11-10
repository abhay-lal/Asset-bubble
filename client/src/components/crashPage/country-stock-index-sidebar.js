export default function (props) {
    return (
        <li className={"stock-list-item"}>
            <div className={"list-indicator"}></div>
            <div>{props.name}</div>
            <div>${props.value.toLocaleString()}</div>
            <div>{(parseFloat(props.value)/1287572*100).toFixed(2)}</div>
        </li>
    )
}