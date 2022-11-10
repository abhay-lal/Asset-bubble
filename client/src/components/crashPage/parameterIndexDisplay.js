export default function (props) {
    return (
        <div className={"tax-parameter"}>
            <p>{props.type}</p>
            <h3>${(props.price).toLocaleString()}</h3>
            <h4>{(props.price/1287572*100).toFixed(2)}%</h4>
        </div>
    )
}