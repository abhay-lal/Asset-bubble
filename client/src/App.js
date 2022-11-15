import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CrashProbPublic from "./components/crashPage/crashProbPublic";
import Home from "./components/home/home";
import Error from "./components/404";
import Comments from "./components/comments/comments"
import CheckUserCrash from "./components/userCrashCheckPage/checkUserCrash";
import Tweet from "./components/tweets/twitter";
import Login from "./components/login/login";
import Signup from "./components/login/signup";
import SentimentHome from "./components/sentiments/sentimentHome";
import PredictedChart from "./components/crashPage/predictedChart";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path="/crashProb" component={CrashProbPublic}/>
                    <Route exact path={"/comments"} component={Comments} />
                    <Route exact path={"/checkCrash"} component={CheckUserCrash} />
                    <Route exact path={"/tweets"} component={Tweet} />
                    <Route exact path={"/login"} component={Login} />
                    <Route exact path={"/signup"} component={Signup} />
                    <Route exact path={"/sentiments"} component={SentimentHome} />
                    <Route exact path={"/charts"} component={PredictedChart} />
                    <Route exact path={"*"} component={Error} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
