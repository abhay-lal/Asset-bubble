import {Link} from "react-router-dom";

export default function (props) {

    const list = props.description.split(' ');
    let description = props.description;
    let link=`https://twitter.com/${props.link}`;
    //
    if(list[list.length - 1].startsWith('https')) {
        link = `${list[list.length - 1]}`;
        description = list.slice(0, list.length - 1).join(' ')
    }

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
                    {description||props.description}
                </div>

                <div className={"follow-tweet"}>
                    <a href={link} target={"_blank"}>Follow Tweet <i className="fa-brands fa-twitter"></i> </a>
                </div>

            </div>
        </div>
    )
}