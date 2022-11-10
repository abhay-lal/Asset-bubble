export default function (props) {

    console.log(props);

    return (
        <div className={"comment"}>
            <div className={"comment-line"}>
                {props.message}
            </div>
            <div className={"comment-info"}>
                <div className={"comment-date"}>
                    {props.dateOfEntry.slice(0, 10)}
                </div>
                <div className={"comment-user"}>
                    {props.user.name}
                </div>
            </div>
        </div>
    )
}