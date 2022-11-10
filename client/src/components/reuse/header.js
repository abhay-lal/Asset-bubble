import "../../css/crash.css"
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import NavModal from "./navModal";
import {Link, useHistory} from "react-router-dom";
import {deleteUser} from "../../redux-toolkit";

export default function () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setUser] = useState("");
    const [showModal, setShowModal] = useState(false);

    const u = useSelector(state => state.logged);

    const logout = (e) => {
        e.preventDefault();
        dispatch(deleteUser(
            {
                user: "",
                token: "",
            }
        ))
    }

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    }

    useEffect(() => {
        if(u.user.length) setUser(u.user);
    }, [])

    return (
        <header>
            <nav className={"top-nav"}>
                <div className={"nav-logo"} onClick={() => history.push('/')}><span className={"company-name"}>BigBull</span></div>
                <div>
                    <ul className={"top-nav-links"}>
                        <li><Link to="/tweets" className={"top-nav-link"}>tweets</Link></li>
                        <li><Link to="/comments" className={"top-nav-link"}>comments</Link></li>

                        {u.user.length?
                            <li><Link to={"/"} onClick={logout} className={"top-nav-link"}>logout</Link></li>:
                            <li><Link to="/login" className={"top-nav-link"}>sign in</Link></li>
                        }

                    </ul>
                </div>
                <div className={"modal-popper"} onClick={toggleModal}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>


            {showModal? <NavModal
                showModal={toggleModal}
                user={user}
                logout={logout}
            /> : <></> }

        </header>
    )

}