export default function (props) {
    return (
        <div className={"comment"}>
            <div className={"comment-line"}>
                {props.comment}
            </div>
            <div className={"comment-info"}>
                <div className={"comment-date"}>
                    {props.date}
                </div>
                <div className={"comment-user"}>
                    {props.username}
                </div>
            </div>
        </div>
    )
}