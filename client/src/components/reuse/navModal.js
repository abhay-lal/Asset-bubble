import {Link} from "react-router-dom";

export default (props) => {
    return (
        <>
            <div className={"modal-window"} onClick={props.showModal}></div>
            <div className={"nav-list-ver"}>
                <ul className={"list-nav-links"}>
                    <li><Link to="/tweets" className={"top-nav-link-ver"}>tweets</Link></li>
                    <li><Link to="/comments" className={"top-nav-link-ver"}>comments</Link></li>

                    {props.user.length?
                        <li><Link to="" onClick={props.logout} className={"top-nav-link-ver"}>logout</Link></li>:
                        <li><Link to="/login" className={"top-nav-link-ver"}>sign in</Link></li>
                    }

                </ul>
            </div>
        </>
    )
}