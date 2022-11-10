import Header from "../reuse/header";
import "../../css/comments.css"
import BearishBullishRatioBar from "./bearish-bullish-ratio-bar";
import CommentCard from "./commentCard";
import {useEffect, useState} from "react";
import {getAllComments, postComment} from "../apis/api";
import {useSelector} from "react-redux";

export default function () {

    const [loadComments, setLoadComments] = useState(1);
    const [commentsData, setCommentsData] = useState([]);

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
                console.log(res);
                formData.message = '';
                setLoadComments(prevState => prevState*-1);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getAllComments().then(res => {
            setCommentsData(res.data.results.reverse());
        });
    }, [loadComments]);

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
                        <BearishBullishRatioBar
                            value={40}
                            strokeWidth={8}
                        />
                    </div>
                    <div className={"ratio"}>
                        <div className={'ratio-elt'}><div className={"box-list-red"}></div> Bearish: <span>20</span></div>
                        <div className={'ratio-elt'}><div className={"box-list-blue"}></div> Bullish: <span>80</span></div>
                    </div>
                </div>

            </section>

        </main>
    )
}