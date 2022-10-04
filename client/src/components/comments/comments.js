import Header from "../reuse/header";
import "../../css/comments.css"
import BearishBullishRatioBar from "./bearish-bullish-ratio-bar";
import CommentCard from "./commentCard";
import commentsData from "./commentsData";

export default function () {

    const commentCards = commentsData.map(comment => {
        return (
            <CommentCard
                {...comment}
            />
        )
    })

    return (
        <main>
            <Header />

            <div className={"decision-container"}>
                <h3>Share your opinion about prediction</h3>
                <div className={"decision-buttons"}>
                    <div id={"bearish"}>Bearish</div>
                    <div id={"bullish"}>Bullish</div>
                </div>
            </div>

            <section className={"comments-main-section"}>

                <div className={"comments-container"}>
                    {commentCards}
                </div>

                <div className={"comments-speedometer"}>
                    <BearishBullishRatioBar
                        value={20}
                        strokeWidth={8}
                    />
                </div>
            </section>

        </main>
    )
}