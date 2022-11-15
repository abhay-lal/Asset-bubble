export default (props) => {
    return (
        <div className={"sentiment-card"}>
            <div className={"sentiment-image"}>
                <img src={props.image} alt={"Just Some Sentiment Image"}/>
            </div>
            <h2 className={"author-name"}>{props.authors?.join(', ')} </h2>
            <div className={"title"}>{props.title}</div>
            <div className={"summary"}>{props.summary}</div>

            <div className={"sentiment-label"}>
                <div>
                    <div className={"sentiment-type"}>Sentiment Label: {props.type}</div>
                    <div className={"sentiment-ratio"}>Sentiment Ratio: {props.ratio}</div>
                </div>
                <div>
                    <a className={"sentiment-link"} href={props.url} target={'_blank'}>Follow This</a>
                </div>
            </div>
        </div>
    )
}