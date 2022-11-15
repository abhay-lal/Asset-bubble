import {useEffect, useState} from "react";
import '../../css/sentiments.css'
import axios from "axios";
import Header from "../reuse/header";
import SentimentCard from "./sentimentCard";

export default () => {

    const [dataLeft, setLeftData] = useState([]);
    const [dataRight, setRightData] = useState([]);

    const leftDataHtml = dataLeft?.map(item => {
        return (
            <SentimentCard
                image={item.banner_image}
                authors={item.authors}
                title={item.title}
                summary={item.summary}
                type={item.overall_sentiment_label}
                ratio={item.overall_sentiment_score}
                url={item.url}
            />
        )
    });

    const rightDataHtml = dataRight.map(item => {
        return (
            <SentimentCard
                image={item.banner_image}
                authors={item.authors}
                title={item.title}
                summary={item.summary}
                type={item.overall_sentiment_label}
                ratio={item.overall_sentiment_score}
                url={item.url}
            />
        )
    });

    useEffect(() => {
        axios.get('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&limit=25&sort=LATEST&tickers=AAPL&topics=technology&apikey=XSIGPEGM8J0O6G2F')
            .then(res => {
                setLeftData(res.data?.feed.slice(0, 27));
                setRightData(res.data?.feed.slice(27, 50));
                console.log(res.data.feed);
            });
    }, []);

    return (
        <div>

            <Header />

            <h1 className={'sentiment-page-heading'}>Sentiments From Across The Globe</h1>

            <section className={"sentiment-card-container"}>
                <div className={"sentiment-left-card"}>
                    {leftDataHtml}
                </div>
                <div className={"sentiment-right-card"}>
                    {rightDataHtml}
                </div>
            </section>
        </div>
    );
}