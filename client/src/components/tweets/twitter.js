import "../../css/tweets.css"
import Header from "../reuse/header";
import tweetLeftData from "./tweetleftdata";
import tweetRightData from "./tweetrightdata"
import TweetCard from "./tweetcard";
// import {useEffect} from "react";
// import {fetchTweets} from "../apis/twitterapi";
// const Twit = require('twit');

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

    // useEffect(() => {
    //     // fetchTweets();
    //     const T = new Twit({
    //         consumer_key: '6QKssjoogZgbYxqu4tq3oMZWf',
    //         consumer_secret: 'AeGaLp93QXZfN0S6WoE2emSdmBNM0ANlPlEFyitfzCxPHCLIvH',
    //         access_token: '804686968177049601-EG5545NblupPzgrPObIQFVA97Jqlz1c',
    //         access_token_secret: 'HadgA2PUNQySdNVZiuubcKGJHivFBm20bZwtKiZNaADQy',
    //         timeout_ms: 60*1000,
    //         strictSSL: true,
    //     });
    //
    //     T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    //         console.log(data)
    //     })
    //
    // }, [])

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