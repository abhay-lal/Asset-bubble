export default function (props) {
    return (
        <div className={"tax-parameter"}>
            <p>{props.type}</p>
            <h3>${(props.price).toLocaleString()}</h3>
        </div>
    )
}