import Header from "../reuse/header";
import "../../css/comments.css"
import BearishBullishRatioBar from "./bearish-bullish-ratio-bar";
import CommentCard from "./commentCard";
import React, {useEffect, useState} from "react";
import {patchBearish, getAllComments, getBearish, postComment} from "../apis/api";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function () {

    const [loadComments, setLoadComments] = useState(1);
    const [commentsData, setCommentsData] = useState([]);

    const [totalClicks, setTotalClicks] = useState(0);
    const [bearishClicks, setBearishClicks] = useState(0);

    const [ratio, setRatio] = useState(0);

    const u = useSelector(state => state.logged);

    const [formData, setFormData] = useState({
        user: u?.user || '',
        message: ""
    });

    const handleChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        postComment(formData)
            .then(res => {
                formData.message = '';
                setLoadComments(prevState => prevState*-1);
            })
            .catch(err => console.log(err));
    }

    const bearishClick = () => {

        setRatio(0);

        patchBearish({totalClicks: String(totalClicks+1), bearishClicks: String(bearishClicks+1)})
            .then(res => {
                setBearishClicks(Number(res.data.bearishClicks));
                setTotalClicks(Number(res.data.totalClicks));

                setTimeout(() => setRatio(bearishClicks/totalClicks*100), 1000);

            });
    }

    const bullishClick = () => {

        setRatio(0);

        patchBearish({totalClicks: String(totalClicks+1), bearishClicks: String(bearishClicks)})
            .then(res => {
                setBearishClicks(Number(res.data.bearishClicks));
                setTotalClicks(Number(res.data.totalClicks));

                setTimeout(() => setRatio(bearishClicks/totalClicks*100), 500);

            });
    }

    useEffect(() => {
        getAllComments().then(res => {
            setCommentsData(res.data.results.reverse());
        });
    }, [loadComments]);

    useEffect(() => {
        getBearish().then(res => {
            setTotalClicks(Number(res.data.totalClicks));
            setBearishClicks(Number(res.data.bearishClicks));

            setTimeout(() => {
                setRatio(bearishClicks / totalClicks * 100)
            }, 500);

        })
    })

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
                    <div id={"bearish"} onClick={bearishClick}>Bearish</div>
                    <div id={"bullish"} onClick={bullishClick}>Bullish</div>
                </div>
            </div>

            <section className={"comments-main-section"}>

                <div className={"comments-container"}>
                    <div className={"add-comment"}>
                        {u.user.length?
                            <form onSubmit={handleSubmit}>
                                <input type={'text'} value={formData.message} name={'message'} onChange={handleChange} placeholder={'Share your opinion'}/>
                                <button type={"submit"}><i className="fa-solid fa-angle-right"></i><i
                                    className="fa-solid fa-angle-right"></i></button>
                            </form>:
                            <p>Please Sign in to Post Comment</p>
                        }

                    </div>
                    {commentCards}
                </div>


                <div>
                    <div className={"comments-speedometer"}>

                        {ratio ? <BearishBullishRatioBar value={ratio} strokeWidth={8}/> : <></> }

                    </div>

                    {ratio ? <div className={"ratio"}>
                        <div className={'ratio-elt'}><div className={"box-list-blue"}></div> Bearish: <span>{ratio}</span></div>
                        <div className={'ratio-elt'}><div className={"box-list-red"}></div> Bullish: <span>{100-ratio}</span></div>
                    </div> : <></> }

                    <div style={{textAlign: "center", margin: '3rem 0 0 1.2rem'}}>
                        <Link to={"/sentiments"} className={"btn btn-white"}>View Market Sentiments</Link>
                    </div>

                </div>

            </section>

        </main>
    )
}