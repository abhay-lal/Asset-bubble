import "../../css/crash.css"

export default function () {
    return (
        <header>
            <nav className={"top-nav"}>
                <div className={"nav-logo"} onClick={() => window.location.replace("http://localhost:3000/")}><span className={"company-name"}>BigBull</span></div>
                <div>
                    <ul className={"top-nav-links"}>
                        <li><a href="/tweets" className={"top-nav-link"}>tweets</a></li>
                        <li><a href="/comments" className={"top-nav-link"}>comments</a></li>
                        <li><a href="src/components/reuse/header#" className={"top-nav-link"}>sign in</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}