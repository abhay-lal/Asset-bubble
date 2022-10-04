export default function (props) {

    const today = new Date();
    const now = `${today.getDate()} / ${today.getMonth()} / ${today.getFullYear()}`

    return (
        <div className={"tweet-card-container"}>

            <div className={"tweet-pop-up"}>
                <a href={"404"}> <i className="fa-brands fa-twitter"></i> </a>
            </div>

            <div className={"tweet-card"}>
                <div className={"tweet-user"}>
                    <h2>{props.name}</h2>
                    <h3>@{props.username}</h3>
                </div>

                <div className={"tweet-description"}>
                    {props.description}
                </div>

                <div className={"tweet-date"}>
                    <span>{`${today.getHours()} : ${today.getMinutes()}`}</span>
                    {now}
                </div>

                <div className={"follow-tweet"}>
                    <a href={"/404"}>Follow Tweet <i className="fa-brands fa-twitter"></i> </a>
                </div>

            </div>
        </div>
    )
}