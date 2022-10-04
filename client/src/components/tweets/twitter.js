import "../../css/tweets.css"
import Header from "../reuse/header";
import tweetLeftData from "./tweetleftdata";
import tweetRightData from "./tweetrightdata"
import TweetCard from "./tweetcard";

export default function () {

    const tweetsLeft = tweetLeftData.map(tweet => {
        return (
            <TweetCard
                {...tweet}
            />
        )
    })

    const tweetsRight = tweetRightData.map(tweet => {
        return (
            <TweetCard
                {...tweet}
            />
        )
    })

    return (
        <main>
            <Header />

            <div className={"heading-container"}>
                <h1>Stock Tweets From Across The World !</h1>
            </div>

            <section className={"just-tweets"}>
                <div className={"tweets-left"}>
                    {tweetsLeft}
                </div>
                <div className={"tweets-right"}>
                    {tweetsRight}
                </div>
            </section>

        </main>
    )
}