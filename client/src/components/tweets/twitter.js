import "../../css/tweets.css"
import Header from "../reuse/header";
import TweetCard from "./tweetcard";
import {fetchTweets} from "../apis/api";
import {useEffect, useState} from "react";

export default function () {

    const [tweetsData, setTweetsData] = useState([])

    const tweetsLeft = tweetsData?.slice(0, 8).map(tweet => {
        return (
            <TweetCard
                name={tweet.user.name}
                username={tweet.user.screen_name}
                description={tweet.text}
                link={tweet.user.screen_name}
            />
        )
    })

    const tweetsRight = tweetsData?.slice(8, 15).map(tweet => {
        return (
            <TweetCard
                name={tweet.user.name}
                username={tweet.user.screen_name}
                description={tweet.text}
                link={tweet.user.screen_name}
            />
        )
    })

    useEffect(() => {
        fetchTweets()
            .then(res => {
                console.log(res.data.result.data.statuses);
                setTweetsData(res.data.result.data.statuses);
            });
    }, [])

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

            <section className={"mobile-tweets-container"}>
                {tweetsLeft}
                {tweetsRight}
            </section>

        </main>
    )
}