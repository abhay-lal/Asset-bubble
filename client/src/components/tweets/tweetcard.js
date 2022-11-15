import {Link} from "react-router-dom";

export default function (props) {

<<<<<<< HEAD
    const today = new Date();
    const now = `${today.getDate()} / ${today.getMonth()} / ${today.getFullYear()}`
=======
    const list = props.description.split(' ');
    let description = props.description;
    let link=`https://twitter.com/${props.link}`;
    //
    if(list[list.length - 1].startsWith('https')) {
        link = `${list[list.length - 1]}`;
        description = list.slice(0, list.length - 1).join(' ')
    }
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b

    return (
        <div className={"tweet-card-container"}>

            <div className={"tweet-pop-up"}>
                <Link to={"404"}> <i className="fa-brands fa-twitter"></i> </Link>
            </div>

            <div className={"tweet-card"}>
                <div className={"tweet-user"}>
                    <h2>{props.name}</h2>
                    <h3>@{props.username}</h3>
                </div>

                <div className={"tweet-description"}>
<<<<<<< HEAD
                    {props.description}
                </div>

                <div className={"tweet-date"}>
                    <span>{`${today.getHours()} : ${today.getMinutes()}`}</span>
                    {now}
                </div>

                <div className={"follow-tweet"}>
                    <Link to={"/404"}>Follow Tweet <i className="fa-brands fa-twitter"></i> </Link>
=======
                    {description||props.description}
                </div>

                <div className={"follow-tweet"}>
                    <a href={link} target={"_blank"}>Follow Tweet <i className="fa-brands fa-twitter"></i> </a>
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
                </div>

            </div>
        </div>
    )
}