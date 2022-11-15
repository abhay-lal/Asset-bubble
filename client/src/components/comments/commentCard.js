export default function (props) {

<<<<<<< HEAD
    console.log(props);

=======
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
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