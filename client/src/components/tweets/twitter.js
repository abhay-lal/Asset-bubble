import "../../css/tweets.css"
import Header from "../reuse/header";
<<<<<<< HEAD
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
=======
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
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
            />
        )
    })

<<<<<<< HEAD
    const tweetsRight = tweetRightData.map(tweet => {
        return (
            <TweetCard
                {...tweet}
=======
    const tweetsRight = tweetsData?.slice(8, 15).map(tweet => {
        return (
            <TweetCard
                name={tweet.user.name}
                username={tweet.user.screen_name}
                description={tweet.text}
                link={tweet.user.screen_name}
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
            />
        )
    })

<<<<<<< HEAD
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
=======
    useEffect(() => {
        fetchTweets()
            .then(res => {
                console.log(res.data.result.data.statuses);
                setTweetsData(res.data.result.data.statuses);
            });
    }, [])
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b

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